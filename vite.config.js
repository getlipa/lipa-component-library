import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";
import react from '@vitejs/plugin-react';
import { peerDependencies } from "./package.json";
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            exclude: ['**/*.stories.ts', '**/*.test.ts'],
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'ui',
            fileName: function (format) { return "ui.".concat(format, ".js"); },
            formats: ['es', 'cjs', 'umd']
        },
        rollupOptions: {
            external: Object.keys(peerDependencies),
            output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } }
        }
    }
});
