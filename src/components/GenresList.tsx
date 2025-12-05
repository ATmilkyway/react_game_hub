import useGenres, { type Genre } from "@/hooks/useGenres";
import { Button, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (isLoading) return <Spinner size="md" />;
  if (error) return null;
  return (
    <List.Root listStyle="none">
      {data.map((genre) => (
        <List.Item key={genre.id}>
          <HStack padding="5px">
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              fontSize="lg"
              variant="plain"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenresList;
