const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-tsx": hot(preferDefault(require("/Volumes/MAC OS OLD/Users/majid/projects/Typescript/quora-cl/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Volumes/MAC OS OLD/Users/majid/projects/Typescript/quora-cl/src/pages/index.tsx")))
}

