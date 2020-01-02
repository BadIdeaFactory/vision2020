require('dotenv').config()
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images')

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
        query: { id: slug, animated: true }
      }
    })

    return paths
  },
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    KIOSK_ID: process.env.KIOSK_ID,
    DEV_ADA_WIREFRAME: process.env.DEV_ADA_WIREFRAME
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
  },
  // Turn off inlining images as data-uri
  inlineImageLimit: -1,
  responsive: {
    // We don't use `sharp` because there's issues with Electron
    adapter: require('responsive-loader/jimp')
  }
}

module.exports = withPlugins(
  [withCSS, [withOptimizedImages, optimizedImagesConfig]],
  nextConfig
)
