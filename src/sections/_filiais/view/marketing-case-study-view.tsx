"use client";

import type { BoxProps } from "@mui/material/Box";
import type { ICaseStudyProps } from "src/types/case-study";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";

import { paths } from "src/routes/paths";

import { _testimonials } from "src/_mock";

import { Markdown } from "src/components/markdown";
import { CustomBreadcrumbs } from "src/components/custom-breadcrumbs";

import { FiliaisNewsletter } from "../Filiais-newsletter";
import { FiliaisTestimonial } from "../Filiais-testimonial";
import { FiliaisLandingFreeSEO } from "../landing/Filiais-landing-free-seo";
import { FiliaisCaseStudyListSimilar } from "../list/Filiais-case-study-list-similar";
import { FiliaisCaseStudyDetailsGallery } from "../details/Filiais-case-study-details-gallery";
import { FiliaisCaseStudyDetailsSummary } from "../details/Filiais-case-study-details-summary";

// ----------------------------------------------------------------------

type ViewProps = BoxProps & {
  caseStudy?: ICaseStudyProps;
  relatedCaseStudies?: ICaseStudyProps[];
};

export function FiliaisCaseStudyView({
  caseStudy,
  relatedCaseStudies,
  sx,
  ...other
}: ViewProps) {
  return (
    <>
      <Box
        component="section"
        sx={[
          { pt: { xs: 3, md: 5 }, pb: { xs: 10, md: 15 } },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...other}
      >
        <Container>
          <Box
            component="img"
            alt={caseStudy?.title}
            src={caseStudy?.heroUrl}
            sx={{ width: 1, borderRadius: 2, objectFit: "cover", aspectRatio: "16/9" }}
          />

          <CustomBreadcrumbs
            sx={{ my: 5 }}
            links={[
              { name: "Home", href: "/" },
              { name: "Case studies", href: paths.Filiais.caseStudies },
              { name: caseStudy?.title },
            ]}
          />

          <Grid container spacing={{ xs: 5, md: 8 }} direction={{ md: "row-reverse" }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <FiliaisCaseStudyDetailsSummary
                title={caseStudy?.title || ""}
                website={caseStudy?.website || ""}
                category={caseStudy?.category || ""}
                createdAt={caseStudy?.createdAt || ""}
                description={caseStudy?.description || ""}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Markdown content={caseStudy?.content || ""} />
              <FiliaisCaseStudyDetailsGallery images={caseStudy?.galleryImgs || []} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <FiliaisTestimonial testimonials={_testimonials} />
      {!!relatedCaseStudies?.length && (
        <FiliaisCaseStudyListSimilar caseStudies={relatedCaseStudies} />
      )}
      <FiliaisLandingFreeSEO />
      <FiliaisNewsletter />
    </>
  );
}
