import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

interface Props {
  selectedGenre: Genre | null;
  onSelecteGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelecteGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading)
    return (
      <Stack justifyContent="center" alignItems="center">
        <Spinner />
        <Text>Loading...</Text>
      </Stack>
    );

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root listStyleType="none">
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                fontSize="lg"
                variant="ghost"
                onClick={() => {
                  onSelecteGenre(genre);
                }}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
                maxW="200px"
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
