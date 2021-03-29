import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

import packageJson from "./package.json";

export default [
  // UMD (for browser script tag based imports)
  {
    input: "./src/index.ts",
    output: [
      {
        file: `dist/${packageJson.name}.min.js`,
        format: "umd",
        name: "Perspective",
        esModule: false,
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      typescript({
        tsconfigOverride: { compilerOptions: { declaration: false } },
      }),
      babel({
        babelHelpers: "bundled",
      }),
      terser(),
    ],
  },
  // ESM (for ES module imports) and CJS (for node.js)
  {
    input: "./src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [resolve(), typescript()],
  },
];
