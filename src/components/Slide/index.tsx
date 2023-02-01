import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import imageEurope from "../../../public/images_project/slide_continents/europe.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export function Slide() {
  return (
    <Box pt={7} pl={10} pr={10} pb={10}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={imageEurope} alt="europe" />
          <Flex
            flexDirection="column"
            position="absolute"
            top="175px"
            right="460px"
            textAlign="center"
          >
            <Heading color="light.900" fontSize="40">
              Europa
            </Heading>
            <Text color="light.900" fontSize="20" >
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </Box>
  );
}
