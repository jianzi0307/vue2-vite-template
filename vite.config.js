import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig, loadEnv } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default ({ command, mode }) => {
  const env = loadEnv(mode, "./");

  const plugins = [];

  if (env.VITE_NODE_ENV === "production") {
    plugins.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      })
    );
  }

  return defineConfig({
    plugins: [createVuePlugin(), ...plugins],
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
      open: true,
      https: false,
      ssr: false,
      base: env.VITE_BASE_URL,
      outDir: env.VITE_OUTPUT_DIR,
      define: {
        "process.env": {},
      },
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  });
};
