import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default [
  defineConfig({
    input: "src/comment2ndjson-lib.ts",
    output: {
      dir: "dist/es6",
      sourcemap: true,
      format: "es",
    },
    plugins: [
      typescript({
        declaration: true,
        declarationDir: "dist/es6",
      }),
    ],
  }),
];
