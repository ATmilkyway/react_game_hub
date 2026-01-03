import type { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find((g) => g.id === gameQuery.genreId);
  const heading = `${gameQuery.platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" fontSize="5xl" fontWeight="bold" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
