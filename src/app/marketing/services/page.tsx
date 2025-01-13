import { CONFIG } from "src/global-config";

import { FiliaisServicesView } from "@/sections/_filiais/view/Filiais-services-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Services | Filiais - ${CONFIG.appName}` };

export default function Page() {
  return <FiliaisServicesView />;
}
