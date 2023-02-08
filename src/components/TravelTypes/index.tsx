import Types from "./types";
import nightLife from "../../../public/images_project/types/Nightlife.png";
import beach from "../../../public/images_project/types/Beach.png";
import modern from "../../../public/images_project/types/Modern.png";
import classic from "../../../public/images_project/types/Classic.png";
import more from "../../../public/images_project/types/More.png";
import {
  Box,
  Flex,
  List,
  ListIcon,
  ListItem,
  UnorderedList,
  useMediaQuery,
  Wrap,
  WrapItem,
  Icon,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { FaCircle } from "react-icons/fa";

export function TravelTypes() {
  const [isMobileVersion, setIsMobileVersion] = useState<boolean | undefined>(
    false
  );

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsMobileVersion(isMobile);
  }, [isMobile]);

  if (isMobileVersion) {
    return (
      <Box>
        <List display="flex" flexWrap="wrap" justifyContent="center">
          <ListItem
            w={170}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            padding={3}
            fontSize={18}
          >
            <FaCircle size={8} color="#FFBA08" />
            vida noturna
          </ListItem>
          <ListItem
            w={120}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            padding={3}
            fontSize={18}
          >
            <FaCircle size={8} color="#FFBA08" />
            praia
          </ListItem>
          <ListItem
            w={140}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            padding={3}
            fontSize={18}
          >
            <FaCircle size={8} color="#FFBA08" />
            moderno
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem
            w={140}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            padding={3}
            fontSize={18}
          >
            <FaCircle size={8} color="#FFBA08" />
            clássico
          </ListItem>
          <ListItem
            w={140}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
            padding={3}
            fontSize={18}
          >
            <FaCircle size={8} color="#FFBA08" />e mais...
          </ListItem>
        </List>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      w="100%"
      pt="20"
      pr="20"
      pl="20"
      pb="10"
      alignItems="center"
      justifyContent="space-between"
    >
      <Types src={nightLife.src} alt="Night life" />
      <Types src={beach.src} alt="Beach" />
      <Types src={modern.src} alt="Modern" />
      <Types src={classic.src} alt="Classic" />
      <Types src={more.src} alt="More" />
    </Box>
  );
}
