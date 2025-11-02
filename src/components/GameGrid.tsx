import useGames from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
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
