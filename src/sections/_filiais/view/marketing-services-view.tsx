"use client";

import { _testimonials, _FiliaisPosts } from "src/_mock";

import { FiliaisNewsletter } from "../Filiais-newsletter";
import { FiliaisTestimonial } from "../Filiais-testimonial";
import { FiliaisServices } from "../services/Filiais-services";
import { FiliaisLatestPosts } from "../posts/Filiais-latest-posts";
import { FiliaisServicesHero } from "../services/Filiais-services-hero";
import { FiliaisLandingFreeSEO } from "../landing/Filiais-landing-free-seo";
import { FiliaisServicesInclude } from "../services/Filiais-services-include";
import { FiliaisServicesBenefits } from "../services/Filiais-services-benefits";
import { FiliaisServicesHowItWork } from "../services/Filiais-services-how-it-work";

// ----------------------------------------------------------------------

const latestPosts = _FiliaisPosts.slice(0, 4);

export function FiliaisServicesView() {
  return (
    <>
      <FiliaisServicesHero />

      <FiliaisServices />

      <FiliaisServicesInclude />

      <FiliaisServicesBenefits />

      <FiliaisServicesHowItWork />

      <FiliaisTestimonial testimonials={_testimonials} />

      <FiliaisLatestPosts posts={latestPosts} />

      <FiliaisLandingFreeSEO />

      <FiliaisNewsletter />
    </>
  );
}
