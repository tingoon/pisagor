import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.STORYBOOK_BASE_PATH ?? "/",
  plugins: [vue(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
});
