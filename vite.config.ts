import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Served from a GitHub Pages project subpath: https://<user>.github.io/gulmet-finance/
export default defineConfig({
  base: "/gulmet-finance/",
  plugins: [react()],
});
