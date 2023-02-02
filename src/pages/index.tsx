import { Header } from "@/components/Header";
import { Slide } from '@/components/Slide';
import { TravelTypes } from '@/components/TravelTypes';
import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import banner from "../../public/images_project/Banner.png";

export default function Home() {
  return (
    <Box width={1480}>
      <Header />
      <Box>
        <Image src={banner} alt="banner" style={{width: "100%"}} />
      </Box>
      <TravelTypes />
      <Center height='50px'>
        <Divider orientation='horizontal' h={1} w={20} bg="dark.500"/>
      </Center>
      <Flex flexDirection="column" align="center" p={15}>
        <Text fontSize={30}>Vamos nessa?</Text>
        <Text fontSize={30}>Então escolha o seu continente</Text>
      </Flex>
      <Slide />
    </Box>
  );
}
