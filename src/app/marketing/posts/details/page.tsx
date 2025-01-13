import { CONFIG } from "src/global-config";

import { FiliaisPostView } from "@/sections/_filiais/view/Filiais-post-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Post details | Filiais - ${CONFIG.appName}` };

export default function Page() {
  return <FiliaisPostView />;
}
