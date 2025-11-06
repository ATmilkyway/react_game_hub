import { HStack, Image } from "@chakra-ui/react";
import SiteLogo from "/favicon.ico";
import ColorModeSwitch from "./ColorModeSwitch";
const Navbar = () => {
  return (
    <HStack justifyContent='space-between'>
      <Image src={SiteLogo} alt={SiteLogo} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
