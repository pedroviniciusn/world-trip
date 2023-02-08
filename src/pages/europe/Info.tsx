import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Tooltip } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface IInfoProps {
  text_one: string;
  text_two: string;
  info?: boolean;
  label_info?: string;
}

export function Info({
  text_one,
  text_two,
  info = false,
  label_info,
}: IInfoProps) {
  return (
    <Box w={{ base: 115, xl: 300, xl2: 320 }} display="grid">
      <Text
        align={{
          base: "start",
          sm: "start",
          md: "start",
          lg: "start",
          xl: "start",
          xl2: "start",
        }}
        fontWeight="semibold"
        fontSize={{ base: "24px", sm: "30px", xl: "40px", xl2: "40px" }}
        color="highlight.100"
      >
        {text_one}
      </Text>
      <Flex alignItems="center">
        <Text
          align={{
            base: "start",
            sm: "start",
            md: "start",
            lg: "start",
            xl: "start",
            xl2: "start",
          }}
          fontSize={{ base: "14px", sm: "14px", xl: "20px", xl2: "20px" }}
          fontWeight={{
            base: "normal",
            sm: "base",
            lg: "semibold",
            xl: "semibold",
            xl2: "semibold",
          }}
          pr={{ base: 1, sm: 1, xl: 3, xl2: 3 }}
        >
          {text_two}
        </Text>
        {info ? (
          <Tooltip label={label_info} fontSize="md">
            <InfoOutlineIcon color="dark.300"/>
          </Tooltip>
        ) : (
          ""
        )}
      </Flex>
    </Box>
  );
}
