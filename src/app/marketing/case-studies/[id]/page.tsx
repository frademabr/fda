import type { Metadata } from "next";

import { _caseStudies } from "src/_mock";
import { CONFIG } from "src/global-config";

import { FiliaisCaseStudyView } from "@/sections/_filiais/view/Filiais-case-study-view";

// ----------------------------------------------------------------------

export default async function Page({ params }: Params) {
  const data = await fetchCaseStudy(params.id);

  return (
    <FiliaisCaseStudyView
      caseStudy={data}
      relatedCaseStudies={_caseStudies.slice(0, 3)}
    />
  );
}

// ----------------------------------------------------------------------

async function fetchCaseStudy(paramId: string) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return _caseStudies.find((caseStudy) => caseStudy.id === paramId);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

type Params = {
  params: { id: string };
};

/**
 * Docs:
 * https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params
 */
export async function generateStaticParams() {
  return _caseStudies.map((caseStudy) => ({
    id: caseStudy.id,
  }));
}

/**
 * Docs:
 * https://nextjs.org/docs/app/building-your-application/optimizing/metadata#dynamic-metadata
 */

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const data = await fetchCaseStudy(params?.id);

  return {
    title: `${data?.title} | Filiais - ${CONFIG.appName}`,
  };
}
