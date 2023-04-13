import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score < 65 ? "yellow" : "";
  return (
    <Badge colorScheme={color} paddingX={1} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
