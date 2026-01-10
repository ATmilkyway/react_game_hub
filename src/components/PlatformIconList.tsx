import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { SiAtari, SiNintendo, SiSega } from "react-icons/si";
import { BsGlobe, BsQuestionCircle } from "react-icons/bs";
import type { IconType } from "react-icons";
import type { Platform } from "@/entities/Platform";

const PlatformIconList = ({ platforms }: { platforms: Platform[] }) => {
  const iconMap: { [key: string]: IconType } = {
    // PC / Desktop
    pc: FaWindows,
    linux: FaLinux,
    mac: FaApple,

    // Consoles
    playstation: FaPlaystation,
    ps: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    sega: SiSega,
    atari: SiAtari,
    switch: SiNintendo,

    // Mobile
    ios: FaApple,
    android: FaAndroid,
    phone: MdPhone,
    tablet: MdPhone,

    // Web / Other
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.slug}
          as={iconMap[platform.slug.toLowerCase()] || BsQuestionCircle} // default icon
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
