import { CONFIG } from "src/global-config";

import { FiliaisAboutView } from "@/sections/_filiais/view/Filiais-about-view";

// ----------------------------------------------------------------------

export const metadata = { title: `About us | Filiais - ${CONFIG.appName}` };

export default function Page() {
  return <FiliaisAboutView />;
}
