import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
//import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // --- CORRECTED PLUGINS ARRAY ---
  plugins: [
    react(), 
    // If you intended to conditionally include a plugin based on development mode,
    // you'd put the plugin call here, potentially wrapped in a condition:
    // mode === "development" && someDevOnlyPlugin(),
  ].filter(Boolean),
  // -------------------------------
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));