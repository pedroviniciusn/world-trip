import {
  Box,
  Flex,
  Text,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Cities } from "./Cities";
import { Info } from "./Info";

import europe from "../../../public/images_project/pages_countries/europe/europe.png";
import europe_mobile from "../../../public/images_project/pages_countries/europe/europe_mobile.png";
import { useEffect, useState } from "react";

export default function Europe() {
  const [isMobileVersion, setIsMobileVersion] = useState<boolean | undefined>(
    false
  );

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMobileVersion(isMobile);
  }, [isMobile]);

  return (
    <Box maxWidth={1480}>
      <Header />
      <Box width="100%">
        {isMobileVersion ? (
          <Image src={europe_mobile.src} width="100%" alt="Europe" />
        ) : (
          <Image src={europe.src} width="100%" alt="Europe" />
        )}
      </Box>
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "inherit",
          xl: "inherit",
          xl2: "inherit",
        }}
        align={{
          base: "flex-start",
          sm: "flex-start",
          md: "center",
          lg: "center",
          xl: "center",
          xl2: "center",
        }}
        justify="space-around"
        p={{ base: 5, sm: 5, md: 10, lg: 10, xl: 10, xl2: 10 }}
        pb={{base: 10, sm: 10}}
        width="100%"
      >
        <Box maxWidth={500}>
          <Text
            fontSize={{ base: "14px", sm: "14px", xl: "20px", xl2: "20px" }}
            color="highlight.500"
            align="start"
            letterSpacing={1}
            pb={{ base: 5, sm: 5, md: 5 }}
          >
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Flex alignItems="center" justify="space-between" maxW={400}>
          <Info text_one="50" text_two="países" />
          <Info text_one="60" text_two="línguas" />
          <Info text_one="27" text_two="cidades +100" />
        </Flex>
      </Flex>
      <Cities />
    </Box>
  );
}
