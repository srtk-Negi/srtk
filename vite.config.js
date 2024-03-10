import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [react()],
        define: {
            "process.env": env, // Make environment variables available as process.env
        },
        build: {
            assetsDir: "src/assets/images",
        },
    };
});
