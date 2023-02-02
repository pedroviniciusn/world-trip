import { Header } from "@/components/Header";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

import europe from "../../../public/images_project/pages_cities/europe/europe.png";

export default function Europe() {
  return (
    <Box maxWidth={1480}>
      <Header />
      <Box width="100%">
        <Image src={europe} alt="europe" style={{ width: "100%" }} />
      </Box>
      <Flex align="center" justify="space-around" py={20} width="100%">
        <Box w={500}>
          <Text fontSize="20px" color="highlight.500">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
            rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Flex alignItems="center" justify="space-between" width={350} >
          <Box>
            <Text align="center" fontWeight="semibold" fontSize="40px" color="highlight.100">
              50
            </Text>
            <Text align="center" fontSize="20px" fontWeight="semibold">
              países
            </Text>
          </Box>
          <Box>
            <Text align="center" fontWeight="semibold" fontSize="40px" color={"highlight.100"}>
              60
            </Text>
            <Text align="center" fontSize="20px" fontWeight="semibold">
              línguas
            </Text>
          </Box>
          <Box>
            <Text align="center" fontWeight="semibold" fontSize="40px" color="highlight.100">
              27
            </Text>
            <Text align="center" fontSize="20px" fontWeight="semibold">
              cidades +100
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}
