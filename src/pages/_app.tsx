import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "src/styles/theme";

import "../components/Slide/styles.css"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
