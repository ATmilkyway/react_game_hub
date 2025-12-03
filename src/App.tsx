import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "side main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
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
