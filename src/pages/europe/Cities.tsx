import { CardCities } from "@/components/CardCities";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import london from "../../../public/images_project/pages_cities/europe/london.png";
import UK from "../../../public/images_project/pages_cities/europe/uk.png";

export function Cities() {
  return (
    <Box px="140px">
      <Heading fontSize="36px" fontWeight="medium" pb="50px" color="dark.500">Cidades +100</Heading>
      <SimpleGrid columns={4} spacing={10}>
        <CardCities
          city="Londres"
          country="Reino Unido"
          srcCity={london.src}
          altCity="Londres"
          srcCountry={UK.src}
          altCountry="UK"
        />
        <CardCities
          city="Londres"
          country="Reino Unido"
          srcCity={london.src}
          altCity="Londres"
          srcCountry={UK.src}
          altCountry="UK"
        />
        <CardCities
          city="Londres"
          country="Reino Unido"
          srcCity={london.src}
          altCity="Londres"
          srcCountry={UK.src}
          altCountry="UK"
        />
        <CardCities
          city="Londres"
          country="Reino Unido"
          srcCity={london.src}
          altCity="Londres"
          srcCountry={UK.src}
          altCountry="UK"
        />
        <CardCities
          city="Londres"
          country="Reino Unido"
          srcCity={london.src}
          altCity="Londres"
          srcCountry={UK.src}
          altCountry="UK"
        />
      </SimpleGrid>
    </Box>
  );
}
