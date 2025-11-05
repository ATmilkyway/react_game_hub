import type { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import {} from "react-icons";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";
const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      {/* <Image src={game.background_image} alt={game.name} /> */}
      <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body gap="2" width="100%">
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
