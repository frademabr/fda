"use client";

import type { FabProps } from "@mui/material/Fab";
import type { UseBackToTopReturn } from "minimal-shared/hooks";

import { _brands } from "src/_mock";

import Fab from "@mui/material/Fab";
import SvgIcon from "@mui/material/SvgIcon";

import { _pricingHome } from "src/_mock";

import {
  ScrollProgress,
  useScrollProgress,
} from "src/components/animate/scroll-progress";

import { HomeFAQs } from "../home-faqs";
import { HomeNewStart } from "../home-new-start";
import { HomeAdvertisement } from "../home-advertisement";
import { HomeFeatureHighlights } from "../home-feature-highlights";
import { HomeFlexibleComponents } from "../home-flexible-components";

import { ElearningOurClients } from "src/sections/_elearning/elearning-our-clients";
import { EcommerceLandingHero } from "@/sections/_ecommerce/landing/ecommerce-landing-hero";
import { MarketingServicesHowItWork } from "@/sections/_marketing/services/marketing-services-how-it-work";
import { MarketingContact } from "@/sections/_marketing/contact/marketing-contact";

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: "fixed" }}
      />

      <MarketingServicesHowItWork />

      <ElearningOurClients brands={_brands} />

      <HomeFlexibleComponents />

      <EcommerceLandingHero />

      <MarketingContact />

      <HomeFeatureHighlights />

      <HomeFAQs />

      <HomeAdvertisement />
    </>
  );
}

// ----------------------------------------------------------------------

type BackToTopProps = FabProps & {
  isVisible: UseBackToTopReturn["isVisible"];
};

function BackToTopButton({ isVisible, sx, ...other }: BackToTopProps) {
  return (
    <Fab
      aria-label="Back to top"
      sx={[
        (theme) => ({
          width: 48,
          height: 48,
          position: "fixed",
          transform: "scale(0)",
          right: { xs: 24, md: 32 },
          bottom: { xs: 24, md: 32 },
          zIndex: theme.zIndex.speedDial,
          transition: theme.transitions.create(["transform"]),
          ...(isVisible && { transform: "scale(1)" }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <SvgIcon>
        {/* https://icon-sets.iconify.design/solar/double-alt-arrow-up-bold-duotone/ */}
        <path
          fill="currentColor"
          d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z"
          opacity="0.5"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057"
          clipRule="evenodd"
        />
      </SvgIcon>
    </Fab>
  );
}
