import { CONFIG } from "src/global-config";

import { FiliaisPostsView } from "@/sections/_filiais/view/Filiais-posts-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Post list | Filiais - ${CONFIG.appName}` };

export default function Page() {
  return <FiliaisPostsView />;
}
