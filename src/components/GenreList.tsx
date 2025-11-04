import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, Image, List, Spinner, Stack, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data, isLoading } = useGenres();
  return (
    <>
      {isLoading && (
        <Stack justifyContent="center" alignItems="center">
          <Spinner />
          <Text>Loading...</Text>
        </Stack>
      )}
      <List.Root listStyleType="none">
        {data.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
