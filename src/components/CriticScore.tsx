import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color: string = score >= 75 ? "green" : score >= 50 ? "yellow" : "red";
  return (
    <Badge paddingX={2} colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
