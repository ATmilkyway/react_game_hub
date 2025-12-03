import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="side" bg="gold" hideBelow="lg">
        Side
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        main
      </GridItem>
    </Grid>
  );
};

export default App;
