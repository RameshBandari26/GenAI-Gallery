import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            keyframes: {
              "fade-in-down": {
                "0%": { opacity: "0", transform: "translateY(-20px)" },
                "100%": { opacity: "1", transform: "translateY(0)" },
              },
            },
            animation: {
              "fade-in-down": "fade-in-down 0.5s ease-out",
            },
          },
        },
      },
    }),
  ],
});
