import esbuild from "esbuild";
import { node } from "./env.js";

async function build({ env, isDev }: typeof node) {
  const context = await esbuild.context({
    entryPoints: ["./src/index.ts"],
    outfile: "./build/bundle.js",
    bundle: true,
    format: "esm",
    minify: !isDev(),
    sourcemap: isDev(),
  });

  if (env === "development") {
    await context.watch();
    console.log("Watching for changes...");
    console.log(`In ${env} mode.`);
  } else {
    await context.rebuild();
    context.dispose();
    console.log("Build complete!");
    console.log(`Built in ${env} mode.`);
  }
}

build(node).catch((error) => {
  console.error("Error during build:", error);
  console.log(node);
  process.exit(1);
});
