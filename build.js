import mri from "mri";
import { build } from "esbuild";
import fs from "fs";

const pkg = JSON.parse(fs.readFileSync("package.json", "utf-8"));

const prog = mri(process.argv.slice(2), {
  boolean: ["minify", "serve"],
});

await build({
  entryPoints: ["index.ts"],
  bundle: true,
  platform: "node",
  outfile: "dist/index.js",
  format: "esm",
  minify: prog.minify,
  external: Object.keys(pkg.dependencies),
});
