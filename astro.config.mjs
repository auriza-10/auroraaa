import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Determinar si estamos en producción (deploy)
const isDeploy = process.env.DEPLOY === 'true';

export default defineConfig({
  site: "https://auriza-10.github.io/auroraaa",
  // Usar base path solo en deploy
  base: isDeploy ? "/auroraaa" : "/",
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