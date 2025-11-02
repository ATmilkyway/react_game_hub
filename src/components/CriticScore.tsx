import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  const color = score > 90 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <Badge
        colorPalette={color}
        fontSize="14px"
        paddingX={2}
        borderRadius="4px"
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
