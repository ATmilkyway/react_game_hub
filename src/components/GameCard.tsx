import type { Game } from "@/hooks/useGames";
import {
  Button,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import {} from "react-icons";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <Card.Body gap="2">
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
