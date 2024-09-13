import dotenv from "dotenv";

dotenv.config();

const { NODE_ENV, NODE_TARGET, NODE_MODULE } = process.env;

export const node = {
  env: NODE_ENV || "development",
  target: NODE_TARGET || "ESNext",
  module: NODE_MODULE || "esm",
  isDev: function () {
    return NODE_ENV === "development";
  },
};
