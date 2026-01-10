import APIClient from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatforms";
import ms from "ms";
import useGameQueryStore from "@/store";

export interface Game {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
const apiClent = new APIClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      apiClent.getAll({
        params: {
          genres: gameQuery.genreId,
          platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    placeholderData: (prev) => prev,
    getNextPageParam: (lastPage, allPage) => {
      return lastPage.next ? allPage.length + 1 : undefined;
    },
    staleTime: ms("24hr"), //24
  });
};
export default useGames;

// const useGames = (gameQuery: GameQuery) =>
//   useQuery<FetchResponse<Game>, Error>({
//     queryKey: ["games", gameQuery],
//     queryFn: () =>
//       apiClent.getAll({
//         params: {
//           genres: gameQuery.genre?.id,
//           platforms: gameQuery.platform?.id,
//           ordering: gameQuery.sortOrder,
//           search: gameQuery.searchText,
//         },
//       }),
//     staleTime: 60 * 1000,
//   });
