import type { Game } from "@/hooks/useGames";
import { Button, Card, CardBody, Image, Text } from "@chakra-ui/react";

const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body gap="2">
        <Card.Title fontSize='2xl'>{game.name}</Card.Title>
        {/* <Card.Description></Card.Description> */}
        {/* <Text
          textStyle="2xl"
          fontWeight="medium"
          letterSpacing="tight"
          mt="2"
        ></Text> */}
      </Card.Body>
      {/* <Card.Footer gap="2"></Card.Footer> */}
    </Card.Root>
  );
};

export default GameCard;
