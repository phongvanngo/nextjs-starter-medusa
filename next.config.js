const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: ["medusa-public-images.s3.eu-west-1.amazonaws.com", "localhost", "file.uat.matkinh53.com", "www.file.uat.matkinh53.com"],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
