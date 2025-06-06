import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://auriza-10.github.io/auroraaa",
  base: "/auroraaa",
  trailingSlash: "never",
  outDir: "docs",
  vite: {
    plugins: [tailwindcss()]
  },
  typescript: {
    strict: false,
    check: false
  }
});