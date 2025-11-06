import { Grid, Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"navbar"
               "main"`,
        lg: `"navbar navbar"
             "sidebar main"`,
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      gridTemplateRows={{
        base: "60px 1fr",
      }}
      gap={4}
      minH="100vh"
      p={4}
      bg="gray.900"
      color="white"
    >
      {/* Navbar */}
      <Box
        gridArea="navbar"
        bg="purple.600"
        borderRadius="lg"
        p={4}
        boxShadow="lg"
      >
        Navbar
      </Box>

      {/* Sidebar */}
      <Box
        gridArea="sidebar"
        bg="blue.700"
        borderRadius="lg"
        p={4}
        boxShadow="lg"
        display={{ base: "none", lg: "block" }}
      >
        Sidebar
      </Box>

      {/* Main Content */}
      <Box gridArea="main" bg="gray.800" borderRadius="lg" p={4} boxShadow="lg">
        Main Content
      </Box>
    </Grid>
  );
};

export default App;
