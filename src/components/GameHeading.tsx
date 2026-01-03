import type { GameQuery } from "@/App";
import useGenere from "@/hooks/useGenere";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenere(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" fontWeight="bold" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
