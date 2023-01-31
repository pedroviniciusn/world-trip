import { Flex } from '@chakra-ui/react';
import Logo from './Logo';

import logo from "../../../public/images_project/Logo.png"

export function Header() {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="50" mx="auto" alignItems="center">
      <Logo src={logo}/>
    </Flex>
  )
}