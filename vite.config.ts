import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Base path is configurable so the same repo deploys to multiple hosts:
//   - Cloudflare Pages / custom domain (served at root)  -> default "/"
//   - GitHub Pages project site (served at a subpath)     -> VITE_BASE=/gulmet-finance/
export default defineConfig({
  base: process.env.VITE_BASE ?? "/",
  plugins: [react()],
});
