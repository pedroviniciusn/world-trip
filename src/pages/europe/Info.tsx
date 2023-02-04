import { Box, Text } from "@chakra-ui/react";

interface IInfoProps {
  text_one: string;
  text_two: string;
}

export function Info({ text_one, text_two }: IInfoProps) {
  return (
    <Box>
      <Text
        align="center"
        fontWeight="semibold"
        fontSize="40px"
        color="highlight.100"
      >
        {text_one}
      </Text>
      <Text align="center" fontSize="20px" fontWeight="semibold">
        {text_two}
      </Text>
    </Box>
  );
}
