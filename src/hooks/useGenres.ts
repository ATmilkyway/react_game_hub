import { useQuery } from "@tanstack/react-query";
import { type FetchResponse } from "./useData";
import apiClient from "@/services/api-client";
import generes from "@/data/generes";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>("/genres");
const useGenres = () =>
  useQuery({
    queryKey: ["generes"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 ** 60 * 1000, //24 hrs
    initialData: { count: generes.length, results: generes },
  });

export default useGenres;
