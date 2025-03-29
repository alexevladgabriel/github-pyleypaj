import type { Config } from "@react-router/dev/config";
import gamesData from "data/games";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  async prerender() {
    return ["/", ...gamesData.map((game) => `/${game}`)];
  },
} satisfies Config;
