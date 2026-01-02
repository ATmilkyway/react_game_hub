import type { GameQuery } from "@/App";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { type FetchResponse } from "./useData";
import type { Platform } from "./usePlatforms";
import APIClient from "@/services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const apiClent = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClent.getAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 60 * 1000,
  });
export default useGames;
