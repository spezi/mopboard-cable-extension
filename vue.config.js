// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
 module.exports = {
    // options...
    outputDir: "dist",
    publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/'
  }