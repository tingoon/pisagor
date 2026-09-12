import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.STORYBOOK_BASE_PATH ?? "/",
  plugins: [tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
});
