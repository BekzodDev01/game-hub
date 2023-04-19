import { Heading, Text } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || " "
  }  Games`;

  return (
    <Heading fontSize={"5xl"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
