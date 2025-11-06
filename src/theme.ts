import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        gray: {
          50: { value: "#fafafa" },
          100: { value: "#f5f5f5" },
          200: { value: "#e5e5e5" },
          300: { value: "#d4d4d4" },
          400: { value: "#a3a3a3" },
          500: { value: "#737373" },
          600: { value: "#525252" },
          700: { value: "#404040" },
          800: { value: "#262626" },
          900: { value: "#171717" },
        },
        teal: {
          50: { value: "#d8fff9" },
          100: { value: "#abffee" },
          200: { value: "#7bffe3" },
          300: { value: "#49ffd8" },
          400: { value: "#1affcd" },
          500: { value: "#00e6b4" },
          600: { value: "#00b38c" },
          700: { value: "#008064" },
          800: { value: "#004e3b" },
          900: { value: "#001c13" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
