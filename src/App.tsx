import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GamesGrid from "./components/GamesGrid";
import GenresList from "./components/GenresList";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}
export default App;
