"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { FiliaisNewsletter } from "../Filiais-newsletter";
import { FiliaisContactForm } from "../contact/Filiais-contact-form";
import { FiliaisContactInfo } from "../contact/Filiais-contact-info";
import { FiliaisLandingFreeSEO } from "../landing/Filiais-landing-free-seo";

// ----------------------------------------------------------------------

export function FiliaisContactView() {
  return (
    <>
      <Box component="section" sx={{ pt: { xs: 3, md: 10 }, pb: { xs: 10, md: 15 } }}>
        <Container>
          <Grid
            container
            spacing={{ xs: 5, md: 3 }}
            direction={{ xs: "column-reverse", md: "row" }}
            sx={{ justifyContent: { md: "space-between" } }}
          >
            <Grid size={{ xs: 12, md: 6, lg: 5 }}>
              <FiliaisContactInfo />
            </Grid>

            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <Typography variant="h3" sx={{ mb: 5 }}>
                Ready to get started?
              </Typography>

              <FiliaisContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <FiliaisLandingFreeSEO />
      <FiliaisNewsletter />
    </>
  );
}
