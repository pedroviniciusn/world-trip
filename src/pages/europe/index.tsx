import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Cities } from './Cities';
import { Info } from './Info';

import europe from "../../../public/images_project/pages_cities/europe/europe.png";

export default function Europe() {
  return (
    <Box maxWidth={1480}>
      <Header />
      <Box width="100%">
        <Image src={europe.src} width="100%" alt="Europe"/>
      </Box>
      <Flex align="center" justify="space-around" py={20} pr="45px" width="100%">
        <Box w={500}>
          <Text fontSize="20px" color="highlight.500">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
            rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Flex alignItems="center" justify="space-between" width={350} >
          <Info text_one='50' text_two='países' />
          <Info text_one='60' text_two='línguas' />
          <Info text_one='27' text_two='cidades +100' />
        </Flex>
      </Flex>
      <Cities />
    </Box>
  );
}
