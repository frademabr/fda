import type { BoxProps } from "@mui/material/Box";

import AutoScroll from "embla-carousel-auto-scroll";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { SvgColor } from "src/components/svg-color";
import { Carousel, useCarousel } from "src/components/carousel";

// ----------------------------------------------------------------------

type Props = BoxProps & {
  brands: {
    id: string;
    name: string;
    image: string;
  }[];
};

export function ElearningOurClients({ brands, sx, ...other }: Props) {
  const carousel = useCarousel(
    { loop: true, slidesToShow: "auto", slideSpacing: "80px" },
    [AutoScroll({ playOnInit: true, speed: 0.5 })],
  );

  return (
    <Box
      component="section"
      sx={[{ pt: 10, pb: { xs: 5, md: 10 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 10 } }}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Sobre a Empresa
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>
            A Fradema Consultores Tributários está há <strong>36 anos no mercado</strong>,
            possuindo vasta <strong>experiência e qualificação</strong> para pensar nas{" "}
            <strong>melhores soluções</strong> em <strong>consultoria tributária</strong>{" "}
            para o seu negócio. Com atuação <strong>desde 1988</strong>, a{" "}
            <strong>Fradema Consultores Tributários </strong>
            possui{" "}
            <strong>
              forte atuação em estratégias empresariais e procedimento administrativos
            </strong>{" "}
            nas esferas federal, estadual e municipal, com{" "}
            <strong>filiais em todo o território nacional.</strong>
            Nossos escritórios estão localizados no{" "}
            <strong>
              Distrito Federal, Bahia, Pernambuco, Espírito Santo, Minas Gerais, Rio de
              Janeiro, Santa Catarina, São Paulo, Paraná e Amazonas
            </strong>
            .
          </Typography>
        </Box>

        <Carousel carousel={carousel}>
          {brands.map((brand) => (
            <SvgColor
              key={brand.id}
              src={brand.image}
              sx={{ width: 106, height: 32, color: "text.primary" }}
            />
          ))}
        </Carousel>
      </Container>
    </Box>
  );
}
