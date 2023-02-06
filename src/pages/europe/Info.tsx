import { Box, Text } from "@chakra-ui/react";

interface IInfoProps {
  text_one: string;
  text_two: string;
}

export function Info({ text_one, text_two }: IInfoProps) {
  return (
    <Box w={{ base: 100, xl: 300, xl2: 300 }}>
      <Text
        align={{
          base: "start",
          sm: "start",
          md: "center",
          lg: "center",
          xl: "center",
          xl2: "center",
        }}
        fontWeight="semibold"
        fontSize={{ base: "24px", sm: "30px", xl: "40px", xl2: "40px" }}
        color="highlight.100"
      >
        {text_one}
      </Text>
      <Text
        align={{
          base: "start",
          sm: "start",
          md: "center",
          lg: "center",
          xl: "center",
          xl2: "center",
        }}
        fontSize={{ base: "14px", sm: "14px", xl: "20px", xl2: "20px" }}
        fontWeight={{
          base: "normal",
          sm: "base",
          lg: "semibold",
          xl: "semibold",
          xl2: "semibold",
        }}
      >
        {text_two}
      </Text>
    </Box>
  );
}
