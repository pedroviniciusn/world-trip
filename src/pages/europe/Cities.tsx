import { CardCities } from "@/components/CardCities";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";

import london from "../../../public/images_project/pages_countries/europe/london.png";
import UK from "../../../public/images_project/pages_countries/europe/uk.png";
import paris from "../../../public/images_project/pages_countries/europe/paris.png";
import france from "../../../public/images_project/pages_countries/europe/france.png";
import rome from "../../../public/images_project/pages_countries/europe/roma.png";
import italy from "../../../public/images_project/pages_countries/europe/italy.png";
import praga from "../../../public/images_project/pages_countries/europe/praga.png";
import czech_republic from "../../../public/images_project/pages_countries/europe/czech_republic.png";
import amsterda from "../../../public/images_project/pages_countries/europe/amsterdã.png";
import holanda from "../../../public/images_project/pages_countries/europe/holanda.png";

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
          city="Paris"
          country="França"
          srcCity={paris.src}
          altCity="Paris"
          srcCountry={france.src}
          altCountry="França"
        />
        <CardCities
          city="Roma"
          country="Itália"
          srcCity={rome.src}
          altCity="Roma"
          srcCountry={italy.src}
          altCountry="Itália"
        />
        <CardCities
          city="Praga"
          country="Repúplica Tcheca"
          srcCity={praga.src}
          altCity="Praga"
          srcCountry={czech_republic.src}
          altCountry="República Tcheca"
        />
        <CardCities
          city="Amsterdã"
          country="Holanda"
          srcCity={amsterda.src}
          altCity="Amsterdã"
          srcCountry={holanda.src}
          altCountry="Holanda"
        />
      </SimpleGrid>
    </Box>
  );
}
