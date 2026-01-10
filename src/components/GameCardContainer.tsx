import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      maxW="sm"
      overflow="hidden"
      transition="transform .15s ease-in"
      _hover={{
        transform: "scale(1.02)",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
