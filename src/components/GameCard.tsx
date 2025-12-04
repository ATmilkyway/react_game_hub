import type { Game } from "@/hooks/useGames";
import { Button, Card, Image, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image
        src={game.background_image}
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title fontSize='2xl'>{game.name}</Card.Title>
        <Card.Description></Card.Description>
      </Card.Body>
      <Card.Footer gap="2"></Card.Footer>
    </Card.Root>
  );
};

export default GameCard;
