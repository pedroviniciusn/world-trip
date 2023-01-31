import { Header } from "@/components/Header";
import { TravelTypes } from '@/components/TravelTypes';
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import banner from "../../public/images_project/Banner.png";

export default function Home() {
  return (
    <Box>
      <Header />
      <Box width="100%">
        <Image src={banner} alt="banner" width="1480" />
      </Box>
      <TravelTypes />
    </Box>
  );
}
