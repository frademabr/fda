"use client";

import {
  _brands,
  _members,
  _caseStudies,
  _testimonials,
  _FiliaisPosts,
  _pricingFiliais,
} from "src/_mock";

import { FiliaisTeam } from "../Filiais-team";
import { FiliaisPricing } from "./Filiais-pricing";
import { FiliaisNewsletter } from "../Filiais-newsletter";
import { FiliaisOurClients } from "../Filiais-our-clients";
import { FiliaisTestimonial } from "../Filiais-testimonial";
import { FiliaisLatestPosts } from "../posts/Filiais-latest-posts";
import { FiliaisLandingHero } from "../landing/Filiais-landing-hero";
import { FiliaisLandingFaqs } from "../landing/Filiais-landing-faqs";
import { FiliaisLandingAbout } from "../landing/Filiais-landing-about";
import { FiliaisLandingProcess } from "../landing/Filiais-landing-process";
import { FiliaisLandingFreeSEO } from "../landing/Filiais-landing-free-seo";
import { FiliaisLandingServices } from "../landing/Filiais-landing-services";
import { FiliaisLandingCaseStudies } from "../landing/Filiais-landing-case-studies";

// ----------------------------------------------------------------------

const caseStudies = _caseStudies.slice(0, 6);
const latestPosts = _FiliaisPosts.slice(0, 4);

export function FiliaisLandingView() {
  return (
    <>
      <FiliaisLandingHero />

      <FiliaisOurClients brands={_brands} />

      <FiliaisLandingAbout />

      <FiliaisLandingServices />

      <FiliaisLandingProcess />

      <FiliaisLandingCaseStudies caseStudies={caseStudies} />

      <FiliaisTeam members={_members} />

      <FiliaisPricing plans={_pricingFiliais} />

      <FiliaisLandingFaqs />

      <FiliaisTestimonial testimonials={_testimonials} />

      <FiliaisLatestPosts posts={latestPosts} />

      <FiliaisLandingFreeSEO />

      <FiliaisNewsletter />
    </>
  );
}
