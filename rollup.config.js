import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.ts",
  output: {
    file: production ? "build/index.js" : "public/build/index.js",
    format: "cjs",
    sourcemap: !production,
  },
  plugins: [
    resolve({
      extensions: [".ts", ".js", ".css"],
    }),
    commonjs(),

    !production &&
    serve({
      open: true,
      contentBase: "public",
    }),

    !production && livereload(),

    production &&
    terser({
      compress: {
        reduce_vars: false,
        sequences: false,
      },
    }),
  ],
};
