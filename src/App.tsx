import { Grid, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"navbar"
               "main"`,
        lg: `"navbar navbar"
             "sidebar main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      gap={4}
      p={4}
    >
      {/* Navbar */}
      <Box gridArea="navbar">
        <Navbar />
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
