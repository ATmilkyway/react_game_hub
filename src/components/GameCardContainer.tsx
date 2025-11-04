import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box maxW="sm" overflow="hidden" width="300px">
      {children}
    </Box>
  );
};

export default GameCardContainer;
