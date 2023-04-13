import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
const GamesGrid = () => {
  const { games, error, isloading } = useGames();
  const skelotns = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text> error </Text>}
      <SimpleGrid
        padding="10px"
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing="10px"
      >
        {isloading &&
          skelotns.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
