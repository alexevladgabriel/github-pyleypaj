import type { Config } from "@react-router/dev/config";
import { gamesData } from "./app/routes/game";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  async prerender() {
    return ["/", ...gamesData];
  },
} satisfies Config;
