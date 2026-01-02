import platform from "@/data/platform";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { type FetchResponse } from "./useData";
import APIClient from "@/services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClent = new APIClient<Platform>("/platforms/lists/parents");

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["parents"],
    queryFn: apiClent.getAll,
    staleTime: 24 * 60 ** 60 * 1000, //24 hrs
    initialData: { count: platform.length, results: platform },
  });

export default usePlatforms;
