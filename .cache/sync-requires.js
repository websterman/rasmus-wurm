const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/barongas/Documents/React/rasmus-wurm/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/barongas/Documents/React/rasmus-wurm/src/pages/404.js"))),
  "component---src-pages-for-vuxna-js": hot(preferDefault(require("/home/barongas/Documents/React/rasmus-wurm/src/pages/for-vuxna.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/barongas/Documents/React/rasmus-wurm/src/pages/index.js")))
}

