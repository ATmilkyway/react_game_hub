import { useColorMode } from "./ui/color-mode";
import { HStack, Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack whiteSpace={'nowrap'}>
      <Switch.Root
        checked={colorMode == "dark"}
        onChange={toggleColorMode}
        colorPalette="green"
      >
        <Switch.HiddenInput />
        <Switch.Control />
        <Switch.Label>
          {colorMode === "light" ? "Light Mode" : "Dark Mode"}
        </Switch.Label>
      </Switch.Root>
    </HStack>
  );
};

export default ColorModeSwitch;
