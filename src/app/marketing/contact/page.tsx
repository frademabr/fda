import { CONFIG } from "src/global-config";

import { FiliaisContactView } from "@/sections/_filiais/view/Filiais-contact-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Contact us | Filiais - ${CONFIG.appName}` };

export default function Page() {
  return <FiliaisContactView />;
}
