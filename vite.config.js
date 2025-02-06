import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@contexts": "/src/contexts",
    },
  },
  plugins: [react()],
});
