import { defineConfig } from 'vitest/config';
// "https://vitest.dev/guide/#configuring-vitest"
export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}']
  }
})