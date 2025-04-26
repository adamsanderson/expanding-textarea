// @ts-ignore
import { dirname, resolve } from 'node:path'
// @ts-ignore
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    base: '/expanding-textarea/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
    // This allows us to resolve the library file as TypeScript during development.
    resolve: {
        alias: {
          'expanding-textarea': fileURLToPath(new URL('../lib/src/expanding-textarea', import.meta.url))
        }
      }
})
