import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Divider,
  Flex,
  Text,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Slide } from "@/components/Slide";
import { TravelTypes } from "@/components/TravelTypes";
import banner from "../../public/images_project/Banner.png";
import banner_mobile from "../../public/images_project/Banner_mobile.png";

export default function Home() {
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
      <Box>
        {isMobileVersion ? (
          <Image src={banner_mobile.src} alt="Banner" width="100%" />
        ) : (
          <Image src={banner.src} alt="Banner" width="100%" />
        )}
      </Box>
      <TravelTypes />
      <Center height="30px">
        {isMobileVersion ? (
          <Divider orientation="horizontal" h="2px" w={20} bg="dark.500" />
        ) : (
          <Divider orientation="horizontal" h={1} w={20} bg="dark.500" />
        )}
      </Center>
      {isMobileVersion ? (
        <Flex flexDirection="column" align="center" p={15}>
          <Text fontSize={20}>Vamos nessa?</Text>
          <Text fontSize={20}>Então escolha o seu continente</Text>
        </Flex>
      ) : (
        <Flex flexDirection="column" align="center" p={15}>
          <Text fontSize={30}>Vamos nessa?</Text>
          <Text fontSize={30}>Então escolha o seu continente</Text>
        </Flex>
      )}
      <Slide />
    </Box>
  );
}
