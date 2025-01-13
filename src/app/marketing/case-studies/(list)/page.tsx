import { _caseStudies } from "src/_mock";
import { CONFIG } from "src/global-config";

import { FiliaisCaseStudiesView } from "@/sections/_filiais/view/Filiais-case-studies-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Case studies | Filiais - ${CONFIG.appName}` };

export default function Page() {
  return <FiliaisCaseStudiesView caseStudies={_caseStudies} />;
}
