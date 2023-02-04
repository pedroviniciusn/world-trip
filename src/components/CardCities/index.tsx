import { Flex, Box, Text, Image } from '@chakra-ui/react';

interface ICardCitiesProps {
  city: string;
  country: string;
  srcCity: string;
  srcCountry: string;
  altCity: string;
  altCountry: string;
}

export function CardCities({city, country, srcCity, srcCountry, altCity, altCountry}: ICardCitiesProps) {
  return (
    <Box width={256} height={279} border="1px" borderColor="highlight.50" borderRadius="5px">
    <Image src={srcCity} alt={altCity} />
    <Flex align="center" justify="space-between" p={5} pt={6}>
      <Box>
        <Text pb={3} fontWeight="semibold" fontSize="17px" color="dark.500">
          {city}
        </Text>
        <Text fontWeight="medium" fontSize="15px" color="dark.300">
          {country}
        </Text>
      </Box>
      <Image src={srcCountry} alt={altCountry} width="35px"/>
    </Flex>
  </Box>
  )
}