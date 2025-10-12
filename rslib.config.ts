import { defineConfig } from '@rslib/core'

export default defineConfig({
  source: {
    entry: {
      index: ['src/**'],
    },
    tsconfigPath: './tsconfig.build.json',
  },
  lib: [
    {
      bundle: false,
      format: 'cjs',
      dts: {
        distPath: 'dist/cjs',
      },
      output: {
        distPath: {
          root: 'dist/cjs',
        },
      },
    },
    {
      bundle: false,
      format: 'esm',
      dts: {
        distPath: 'dist/esm',
      },
      output: {
        distPath: {
          root: 'dist/esm',
        },
      },
    },
  ],
  output: {
    cleanDistPath: true,
  },
})
