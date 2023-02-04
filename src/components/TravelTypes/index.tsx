import Types from "./types";
import nightLife from "../../../public/images_project/types/Nightlife.png";
import beach from "../../../public/images_project/types/Beach.png";
import modern from "../../../public/images_project/types/Modern.png";
import classic from "../../../public/images_project/types/Classic.png";
import more from "../../../public/images_project/types/More.png";
import { Box } from "@chakra-ui/react";

export function TravelTypes() {
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
