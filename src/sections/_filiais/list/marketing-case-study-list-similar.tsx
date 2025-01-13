import type { BoxProps } from "@mui/material/Box";
import type { ICaseStudyProps } from "src/types/case-study";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { paths } from "src/routes/paths";
import { RouterLink } from "src/routes/components";

import { Iconify } from "src/components/iconify";

import { FiliaisCaseStudyItem } from "./Filiais-case-study-item";

// ----------------------------------------------------------------------

type Props = BoxProps & {
  caseStudies: ICaseStudyProps[];
};

export function FiliaisCaseStudyListSimilar({ caseStudies, sx, ...other }: Props) {
  return (
    <Box
      component="section"
      sx={[{ py: { xs: 10, md: 15 } }, ...(Array.isArray(sx) ? sx : [sx])]}
      {...other}
    >
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", mb: { xs: 5, md: 10 } }}>
          <Typography component="h6" variant="h3" sx={{ flexGrow: 1 }}>
            You might like
          </Typography>

          <Button
            component={RouterLink}
            href={paths.Filiais.caseStudies}
            color="inherit"
            endIcon={<Iconify icon="solar:alt-arrow-right-outline" />}
          >
            View all
          </Button>
        </Box>

        <Box
          sx={{
            gap: 4,
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {caseStudies.map((project) => (
            <FiliaisCaseStudyItem key={project.id} project={project} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}