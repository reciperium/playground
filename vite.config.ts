import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [tailwindcss(), react(), wasm()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("@uiw/react-codemirror")) {
            return "codeMirror";
          }
        },
      },
    },
  },
});
