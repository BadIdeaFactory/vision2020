require('dotenv').config()
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images')

/**
 * Environment variables are passed in as strings. This means falsy values are
 * implicitly converted to strings, which become truthy as a result.
 *
 * This function parses incoming variables and unconverts them, if necessary.
 *
 * @param {string} value
 * @return mixed types
 */
function parse (value) {
  switch (value) {
    case 'null':
      return null
    case 'undefined':
      return undefined
    case 'false':
      return false
    case 'true':
      return true
    default: {
      if (isNumeric(value)) {
        return +value
      } else {
        return value
      }
    }
  }
}

/* Tests if a string can be parsed as a number */
function isNumeric (num) {
  return !Number.isNaN(num)
}

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.module.rules.push({
      test: /\.mp4$/i,
      loader: 'file-loader',
      options: {
        outputPath: 'static/',
        publicPath: '/_next/'
      }
    })
    return config
  },
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
    KIOSK_ID: parse(process.env.KIOSK_ID),
    DEV_ADA_WIREFRAME: parse(process.env.DEV_ADA_WIREFRAME),
    // Firebase
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
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
