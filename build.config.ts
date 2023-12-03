import { defineBuildConfig } from 'unbuild';
export default defineBuildConfig({
  entries: [
    "src/index.ts"
  ],
  externals: [
    "nanoid"
  ],
  declaration: true,
  rollup: {
    esbuild: {
    }
  }
})