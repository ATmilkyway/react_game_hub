import {
  createSystem,
  defaultConfig,
  defineConfig,
  type SystemConfig,
} from "@chakra-ui/react";

const config: SystemConfig = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
