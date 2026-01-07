import useGenere from "@/hooks/useGenere";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";
import { Heading } from "@chakra-ui/react";

const GameHeading = () => {
  const genreId = useGameQueryStore((g) => g.gameQuery.genreId);
  const genre = useGenere(genreId);

  const platformId = useGameQueryStore((g) => g.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize="5xl" fontWeight="bold" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
