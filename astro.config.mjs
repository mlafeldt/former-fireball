import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [clerk()],
  adapter: cloudflare({
    imageService: "passthrough",
  }),
});
