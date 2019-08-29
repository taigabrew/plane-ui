import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './tailwind.config'
import pkg from './package'

const colors = resolveConfig(tailwindConfig).theme.colors
const siteTitle = 'danil.dev | Dashboad demo'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: siteTitle
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: pkg.description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${pkg.homepage}/icon.png`
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: siteTitle
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: pkg.description
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: `${pkg.homepage}/icon.png`
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/icon.png' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600&display=swap&subset=cyrillic'
      }
    ]
  },
  manifest: {
    background_color: colors.blue['500'],
    theme_color: colors.blue['500'],
    lang: 'ru'
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: colors.blue['500'] },

  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/test-directive.js', '~/plugins/vue-composition-api.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-compress',
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 2560
        }
      }
    ],
    ['@nuxtjs/pwa', { meta: false }],
    'nuxt-purgecss'
  ],

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js',
        'postcss-nested': {},
        'postcss-import': {},
        autoprefixer: {}
      }
    },
    filenames: {
      css: ({ isDev }) => (isDev ? '[name].css' : '[hash:7].[contenthash].css')
      // isDev ? '[name].css' : '[contenthash].css'
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
