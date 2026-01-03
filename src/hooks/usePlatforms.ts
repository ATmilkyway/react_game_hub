import platform from "@/data/platform";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

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
    staleTime: ms("24h"), //24 hrs
    initialData: { count: platform.length, results: platform, next: null },
  });

export default usePlatforms;
