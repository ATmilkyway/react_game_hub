import { useQuery } from "@tanstack/react-query";
import { type FetchResponse } from "./useData";
import apiClient from "@/services/api-client";
import generes from "@/data/generes";
import APIClient from "@/services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    initialData: { count: generes.length, results: generes },
  });

export default useGenres;
