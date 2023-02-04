import { Box, Button, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import { BiChevronLeft } from "react-icons/bi";

import logo from "../../../public/images_project/Logo.png";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
  const { asPath } = useRouter();

  const [button, setButton] = useState(false);

  useEffect(() => {
    console.log(asPath);
    if (asPath !== "/") {
      setButton(true);
    } else {
      setButton(false);
    }
  }, [button, asPath]);

  if (button) {
    return (
      <Flex
        as="header"
        w="100%"
        maxWidth={1480}
        h="50"
        mx="auto"
        alignItems="center"
      >
        <Box position="absolute" pl="135px">
          <Link href="/">
            <Button
              iconSpacing={0}
              rightIcon={<BiChevronLeft size="30px" />}
              bg="none"
              border="none"
              p={0}
            />
          </Link>
        </Box>

        <Logo src={logo.src} alt='Logo'/>
      </Flex>
    );
  }

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="50"
      mx="auto"
      alignItems="center"
    >
      <Logo src={logo.src} alt='Logo'/>
    </Flex>
  );
}
