// @ts-ignore
import { dirname, resolve } from 'node:path'
// @ts-ignore
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/expanding-textarea.ts'),
            name: 'expanding-textarea',
            fileName: (format) => `expanding-textarea.${format}.js`,
            formats: ['es']
        }
    },
})
