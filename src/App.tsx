import { Button, ButtonGroup, HStack } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
      <ButtonGroup colorPalette="teal">
        <Button loading loadingText="Loading" spinnerPlacement="start">
          Submit
        </Button>
        <Button loading loadingText="Loading" spinnerPlacement="end">
          Continue
        </Button>
      </ButtonGroup>
    </>
  );
}

export default App;
