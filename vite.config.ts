import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import wasm from "vite-plugin-wasm";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [vue(), wasm()],
  // 配置alias
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
