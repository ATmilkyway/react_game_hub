import useData from "@/hooks/useData";
import useGenres from "@/hooks/useGenres";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenresList;
