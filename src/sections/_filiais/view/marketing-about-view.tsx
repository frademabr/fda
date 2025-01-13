"use client";

import { _brands, _members, _testimonials } from "src/_mock";

import { FiliaisAbout } from "../about/Filiais-about";
import { FiliaisTeamAbout } from "../Filiais-team-about";
import { FiliaisNewsletter } from "../Filiais-newsletter";
import { FiliaisTestimonial } from "../Filiais-testimonial";
import { FiliaisAboutStory } from "../about/Filiais-about-story";
import { FiliaisLandingFaqs } from "../landing/Filiais-landing-faqs";
import { FiliaisAboutOurClients } from "../Filiais-about-our-clients";
import { FiliaisAboutOurVision } from "../about/Filiais-about-our-vision";
import { FiliaisLandingFreeSEO } from "../landing/Filiais-landing-free-seo";
import { FiliaisAboutCoreValues } from "../about/Filiais-about-core-values";

// ----------------------------------------------------------------------

export function FiliaisAboutView() {
  return (
    <>
      <FiliaisAbout />

      <FiliaisAboutOurVision />

      <FiliaisAboutCoreValues />

      <FiliaisAboutStory />

      <FiliaisTeamAbout members={_members} />

      <FiliaisAboutOurClients brands={_brands.slice(0, 8)} />

      <FiliaisTestimonial testimonials={_testimonials} />

      <FiliaisLandingFaqs />

      <FiliaisLandingFreeSEO />

      <FiliaisNewsletter />
    </>
  );
}
