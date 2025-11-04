import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";
import {} from "react-icons";
const GameCardSkeleton = () => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body gap="2">
        <SkeletonText noOfLines={1} />
        <HStack justifyContent="space-between">
          <SkeletonText noOfLines={1} />
          <Skeleton gapX={2} width="5" height="5" variant="shine" />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
