import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote1",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./App": "./src/pages/About",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
    }),
  ],

  server: {
    port: 3009, // Ensure this matches the Webpack dev server port
  },
});
