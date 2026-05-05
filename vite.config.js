import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolveConfig(__dirname, "index.html"),
        about: resolveConfig(__dirname, "about.html"),
        portafolio: resolveConfig(__dirname, "portafolio.html"),
      },
    },
  },
});
