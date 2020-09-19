const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/MAC OS OLD/Users/majid/projects/Typescript/attlasian-cl/.cache/dev-404-page.js"))),
  "component---src-pages-404-tsx": hot(preferDefault(require("/Volumes/MAC OS OLD/Users/majid/projects/Typescript/attlasian-cl/src/pages/404.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("/Volumes/MAC OS OLD/Users/majid/projects/Typescript/attlasian-cl/src/pages/index.tsx")))
}

