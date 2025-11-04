import useGenres, { type Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  Button,
  HStack,
  Image,
  List,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelecteGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelecteGenre }: Props) => {
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
              <Button
                fontSize="lg"
                variant="ghost"
                onClick={() => {
                  onSelecteGenre(genre);
                }}
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
