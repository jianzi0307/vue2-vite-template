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
    root: process.cwd(),
    base: env.VITE_BASE_URL,
    define: {
      "process.env": {},
    },
    build: {
      outDir: env.VITE_OUTPUT_DIR,
      assetsDir: "assets",
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      sourcemap: false,
      chunkSizeWarningLimit: 500,
    },
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT,
      open: true,
      https: false,
      ssr: false,
      cors: true,
      hmr: true,
      proxy: {},
    },
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    plugins: [createVuePlugin(), ...plugins],
  });
};
