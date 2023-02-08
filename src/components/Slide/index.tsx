import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import imageEurope from "../../../public/images_project/slide_continents/europe.png";
import imageEuropeMobile from "../../../public/images_project/slide_continents/europe_mobile.png";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Flex, Heading, Text, Image, useMediaQuery } from "@chakra-ui/react";

import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Slide() {
  const [isMobileVersion, setIsMobileVersion] = useState<boolean | undefined>(
    false
  );

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMobileVersion(isMobile);
  }, [isMobile]);

  if (isMobileVersion) {
    return (
      <Box pt={3} pl={3} pr={3} pb={4}>
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
          <Link href="/europe">
            <Image src={imageEuropeMobile.src} alt="Europe" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </Box>
    )
  }
  
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
          <Link href="/europe">
            <Image src={imageEurope.src} alt="Europe" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
    </Box>
  );
}
