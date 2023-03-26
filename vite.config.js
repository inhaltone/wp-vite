// Inspired from https://github.com/blonestar/wp-theme-vite-tailwind

import {defineConfig} from 'vite'
import liveReload from 'vite-plugin-live-reload'
import {resolve} from 'path';


export default defineConfig({
    plugins: [
        liveReload(__dirname + '/**/*.php')
        // liveReload('../site/(templates|snippets|controllers|models)/**/*.php'),
    ],
    // config
    root: '',
    base: process.env.NODE_ENV === 'development'
        ? '/'
        : '/dist/',

    build: {
        outDir: resolve(__dirname, './dist'),
        emptyOutDir: true,
        manifest: true,
        target: 'es2018',
        rollupOptions: {
            input: {
                main: resolve(__dirname + '/src/main.js')
            },
        },
        minify: true,
        write: true
    },

    server: {
        cors: true,
        strictPort: true,
        port: 3000,
        https: false,

        hmr: {
            host: 'localhost',
        },

    },
})
