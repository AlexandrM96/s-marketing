import { fileURLToPath, URL } from "node:url";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/f/dist/",
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]",
      customDomId: "__svg__icons__dom__",
    }),
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "tailwind.config.cjs": path.resolve(__dirname, "tailwind.config.cjs"),
    },
  },
  optimizeDeps: {
    include: ["tailwind.config.cjs"],
  },
  build: {
    commonjsOptions: {
      include: ["tailwind.config.cjs", "node_modules/**"],
    },
    rollupOptions: {
      external: ["src/plugins/Bodyscroll.js", "src/plugins/scroll-trigger.js"],
    },
  },
});
