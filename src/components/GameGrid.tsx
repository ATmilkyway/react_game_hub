import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          xl: 3,
          lg: 5,
        }}
        gap="40px"
        padding="10px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

// {
//   "count": 12345,
// Game[]
//   "results": [
//     { "id": 1, "name": "Game One" },
//     { "id": 2, "name": "Game Two" }
//   ]
// }
