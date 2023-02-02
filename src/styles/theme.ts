import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    highlight: {
      "100": "#FFBA08",
      "50": "#C09D43",
    },
    dark: {
      "900": "#000000",
      "500": "#47585B",
      "300": "#999999",
      "50": "#7F7F7F",
    },
    light: {
      "900": "#FFFFFF",
      "500": "#F5F8FA",
      "100": "#DADADA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins"
  },
  styles: {
    global: {
      body: {
        bg: "light.900",
        color: "dark.900"
      },
    },
  },
});