const withPlugins = require('next-compose-plugins')
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
      '/': { page: '/' },
      '/credits': { page: '/credits' },
      '/pioneers': { page: '/pioneers' },
      '/vote': { page: '/vote' }
    }

    slugs.forEach((slug) => {
      paths[`/pioneers/${slug}`] = {
        page: '/pioneers/[id]',
        query: { id: slug }
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
  },
  responsive: {
    adapter: require('responsive-loader/sharp')
  }
}

module.exports = withPlugins(
  [[optimizedImages, optimizedImagesConfig]],
  nextConfig
)
