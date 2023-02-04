import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import imageEurope from "../../../public/images_project/slide_continents/europe.png";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
          <Image src={imageEurope.src} alt="Europe"/>
          <Flex
            flexDirection="column"
            position="absolute"
            top="40%"
            right="41%"
            textAlign="center"
          >
            <Heading color="light.900" fontSize="40">
              Europa
            </Heading>
            <Text color="light.900" fontSize="20">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </Box>
  );
}
