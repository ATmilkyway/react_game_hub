import {
  Card,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" maxW="sm" overflow="hidden">
      <Skeleton height="200px" width="100%" />
      <Card.Body gap="2">
        <Card.Title fontSize="2xl">
          <SkeletonText noOfLines={2} />
        </Card.Title>
        <Card.Description>
          <HStack justifyContent="space-between" alignItems="center" gap="2">
            <HStack gap="2">
              <SkeletonCircle size="4" />
              <SkeletonCircle size="4" />
              <SkeletonCircle size="4" />
            </HStack>
            <Skeleton height="20px" width="30px" borderRadius="md" />
          </HStack>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
