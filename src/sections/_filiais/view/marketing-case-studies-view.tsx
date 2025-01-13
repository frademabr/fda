"use client";

import type { ICaseStudyProps } from "src/types/case-study";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { _testimonials, _FiliaisPosts } from "src/_mock";

import { FiliaisNewsletter } from "../Filiais-newsletter";
import { FiliaisTestimonial } from "../Filiais-testimonial";
import { FiliaisLatestPosts } from "../posts/Filiais-latest-posts";
import { FiliaisCaseStudyList } from "../list/Filiais-case-study-list";
import { FiliaisLandingFreeSEO } from "../landing/Filiais-landing-free-seo";

// ----------------------------------------------------------------------

type Props = {
  caseStudies: ICaseStudyProps[];
};

const latestPosts = _FiliaisPosts.slice(0, 4);

export function FiliaisCaseStudiesView({ caseStudies }: Props) {
  const renderTexts = () => (
    <Box
      sx={{
        py: { xs: 3, md: 5 },
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Typography variant="h2"> Case studies</Typography>
      <Typography sx={{ mt: 3, color: "text.secondary" }}>
        Nullam tincidunt adipiscing enim.
        <br /> Mauris sollicitudin fermentum libero.
      </Typography>
    </Box>
  );

  return (
    <>
      <Box component="section">
        <Container>
          {renderTexts()}
          <FiliaisCaseStudyList caseStudies={caseStudies} />
        </Container>
      </Box>

      <FiliaisTestimonial testimonials={_testimonials} />

      <FiliaisLatestPosts posts={latestPosts} />

      <FiliaisLandingFreeSEO />

      <FiliaisNewsletter />
    </>
  );
}
