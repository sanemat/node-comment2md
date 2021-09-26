import { defineConfig } from 'rollup';

export default defineConfig([
  {
    input: "src/comment2ndjson-lib.ts",
    output: {
      dir: "dist/es6",
      sourcemap: true,
      format: "es",
    }
  }
]);
