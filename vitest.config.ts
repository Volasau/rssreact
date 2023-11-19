import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    watch: false,
    coverage: {
      exclude: ['src/main.tsx', 'src/types.ts'],
    },
  },
});
