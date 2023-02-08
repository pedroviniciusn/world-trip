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
    <Box
      px={{
        base: "10px",
        sm: "20px",
        md: "110px",
        lg: "130px",
        xl: "140px",
        xl2: "140px",
      }}
    >
      <Heading
        fontSize={{ sm: "20px", md: "25px", lg: "30px", xl: "36px" }}
        fontWeight="medium"
        pb={{ sm: "20px", md: "25px", lg: "35px", xl: "40px" }}
        color="dark.500"
      >
        Cidades +100
      </Heading>
      <SimpleGrid
        columns={{ md: 2, lg: 2, xl: 4, xl2: 4 }}
        spacing={10}
        w={{ base: "70%", sm: "73%", md: "90%", lg: "90%", xl: "100%", xl2: "100%" }}
        margin="0 auto"
        pb={10}
      >
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
