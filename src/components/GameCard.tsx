import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
interface Props {
  game: Game;
}

const GameGrid = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name} </Heading>
        <PlatformIconsList
          platforms={game.parent_platforms.map((platform) => platform.platform)}
        ></PlatformIconsList>
      </CardBody>
    </Card>
  );
};

export default GameGrid;
