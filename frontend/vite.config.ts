import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react(
        {include: ['src/**/*.tsx', 'src/**/*.ts']}
    )],
    server: {
        watch: {
            usePolling: true, // Esto ayuda en algunos entornos

        },
        port: 5173, // Asegúrate de que el puerto esté disponible
    },
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/core/components'),
            '@layout': path.resolve(__dirname, './src/core/layout'),
            '@page': path.resolve(__dirname, './src/core/page'),
            '@utils': path.resolve(__dirname, './src/core/utils'),
            '@css': path.resolve(__dirname, './src/core/css'),

        },
    },
});
