import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        // Build a library for distribution
        lib: {
            entry: resolve(__dirname, 'src/expanding-textarea.ts'),
            name: 'expanding-textarea',
            // the proper extensions will be added
            fileName: (format) => `expanding-textarea.${format}.js`,
            formats: ['es']
        },

        // While also building the demo page
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
            external: [],
            output: {
                
                globals: {},
            },
        },
    },
})