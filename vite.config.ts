import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), crx({ manifest })],
    build: {
      emptyOutDir: mode == "production",
    },
  };
});
