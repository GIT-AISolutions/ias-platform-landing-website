import path from "node:path";
import type { NextConfig } from "next";

const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  webpack: (config, { dir }) => {
    config.resolve ??= {};
    const existingModules = config.resolve.modules ?? [];
    const projectNodeModules = path.join(dir, "node_modules");

    if (!existingModules.includes(projectNodeModules)) {
      config.resolve.modules = [projectNodeModules, ...existingModules];
    }

    return config;
  },
};

export default nextConfig;
