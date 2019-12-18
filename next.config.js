const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const optimizedImages = require('next-optimized-images')

const nextConfig = {
  exportPathMap () {
    // Let Next.js know where to find the entry page
    // when it's exporting the static bundle for the use
    // in the production version of your app
    const slugs = [
      'mary-church-terrell',
      'florynce-kennedy',
      'emma-gonzalez',
      'jeannette-rankin',
      'shirley-chisholm',
      'women-in-the-116th-us-congress',
      'alva-belmont',
      'indra-nooyi',
      'arlan-hamilton',
      'grace-hopper',
      'reshma-saujani',
      'sabrina-gonzalez-pasterski',
      'ida-b-wells',
      'gloria-steinem',
      'brittney-c-cooper',
      'bernice-sandler',
      'dawn-staley',
      'mone-davis'
    ]

    const paths = {
      // Home page
      '/': { page: '/' },

      // Convenience attract-loop URLs
      '/attract/1': { page: '/', query: { kioskId: 0 } },
      '/attract/2': { page: '/', query: { kioskId: 1 } },
      '/attract/3': { page: '/', query: { kioskId: 2 } },
      '/attract/4': { page: '/', query: { kioskId: 3 } },
      '/attract/5': { page: '/', query: { kioskId: 4 } },
      '/attract/6': { page: '/', query: { kioskId: 5 } },

      // Other pages
      '/credits': { page: '/credits' },
      '/pioneers': { page: '/pioneers' },
      '/vote': { page: '/vote' }
    }

    // Define individual pioneer pages
    slugs.forEach((slug) => {
      paths[`/pioneers/${slug}`] = {
        page: '/pioneers/[id]',
        query: { id: slug, noTransition: false }
      }
    })

    return paths
  },
  devIndicators: {
    autoPrerender: false
  },
  target: 'server'
}

const optimizedImagesConfig = {
  optimizeImagesInDev: false,
  imageTrace: {
    color: '#888888'
  }
  // We don't use `sharp` because there's issues with Electron
  // responsive: {
  //   adapter: require('responsive-loader/sharp')
  // }
}

module.exports = withPlugins(
  [withCSS, [optimizedImages, optimizedImagesConfig]],
  nextConfig
)
