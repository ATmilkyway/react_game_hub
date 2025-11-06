import { FaMoon, FaSun } from "react-icons/fa";
import { ColorModeButton, useColorMode } from "./ui/color-mode";
import { Icon, Switch } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch.Root colorPalette="teal" size="lg" onChange={toggleColorMode}>
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
        <Switch.Indicator fallback={<Icon as={FaMoon} color="gray.400" />}>
          <Icon as={FaSun} color="yellow.400" />
        </Switch.Indicator>
      </Switch.Control>
      <Switch.Label>
        {colorMode === "light" ? "Light Mode" : "Dark Mode"}
      </Switch.Label>
    </Switch.Root>
  );
};

export default ColorModeSwitch;
