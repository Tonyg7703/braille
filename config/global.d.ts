namespace NodeJS {
  interface Process {
    env: {
      NODE_ENV: "development" | "production";
      NODE_TARGET: "ESNext" | "ES2015" | "ES2016" | "ES5" | "ES6";
      NODE_TYPE: "module" | "commonjs";
      NODE_MODULE: "esm" | "cjs";
      CONFIG_TYPE: string;
    };
  }
}

namespace Config {
  type Type = "esbuild" | "typescript";
}
