import Types from './types';
import nightLife from "../../../public/images_project/types/Nightlife.png"
import beach from "../../../public/images_project/types/Beach.png"
import modern from "../../../public/images_project/types/Modern.png"
import classic from "../../../public/images_project/types/Classic.png"
import more from "../../../public/images_project/types/More.png"
import { Box } from '@chakra-ui/react';

export function TravelTypes() {
  return (
    <Box display="flex" w="100%" p="20" alignItems="center" justifyContent="space-between">
      <Types src={nightLife} alt="Night life" />
      <Types src={beach} alt="Beach" />
      <Types src={modern} alt="Modern" />
      <Types src={classic} alt="Classic" />
      <Types src={more} alt="More" />
    </Box>
  )
}