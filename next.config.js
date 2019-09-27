const withSass = require('@zeit/next-sass')

module.exports = withSass({
  exportPathMap () {
    // Let Next.js know where to find the entry page
    // when it's exporting the static bundle for the use
    // in the production version of your app
    return {
      '/': { page: '/' }
    }
  }
})
