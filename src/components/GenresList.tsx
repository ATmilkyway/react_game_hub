import useGenres from "@/hooks/useGenres";
import { HStack, Image, List } from "@chakra-ui/react";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <List.Root>
      {data.map((genre) => (
        <HStack key={genre.id} padding='5px'>
          <Image src={genre.image_background} boxSize="32px" borderRadius={8}/>
          <List.Item fontSize='lg'>{genre.name}</List.Item>
        </HStack>
      ))}
    </List.Root>
  );
};

export default GenresList;
