import { useQuery } from "@tanstack/react-query";
import useData, { type FetchResponse } from "./useData";
import apiClient from "@/services/api-client";
import type { Genre } from "./useGenres";
import platform from "@/data/platform";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["parents"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 ** 60 * 1000, //24 hrs
    initialData: { count: platform.length, results: platform },
  });

export default usePlatforms;
