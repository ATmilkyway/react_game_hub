import generes from "@/data/generes";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClent = new APIClient<Genre>("/generes");

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["generes"],
    queryFn: apiClent.getAll,
    staleTime: ms("24"), //24 hrs
    initialData: { count: generes.length, results: generes, next: null },
  });

export default useGenres;
