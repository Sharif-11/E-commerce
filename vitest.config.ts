import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // for React projects
    setupFiles: ["./src/setupTests.ts"], // optional: for test setup
    include: ["src/__Tests__/*.{test,spec}.{js,jsx,ts,tsx}"],
    exclude: ["**/node_modules/**", "**/dist/**"],
  },
});
