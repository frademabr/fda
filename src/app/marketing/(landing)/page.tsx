import { CONFIG } from "src/global-config";

import { FiliaisLandingView } from "@/sections/_filiais/view/Filiais-landing-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Home | Filiais - ${CONFIG.appName}` };

export default function Page() {
  return <FiliaisLandingView />;
}
