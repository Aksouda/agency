export default {
  components: true,
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    title: 'platforma de recrutare',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Recruto face legătura între candidați și companii, găsiți locuri de muncă care sunt cele mai potrivite pentru dvs' },
      { hid: 'keywords', name: 'keywords', content: 'găsiți locuri de muncă care vi se potrivesc cel mai bine, candidați pentru compania dvs., recrutați cei mai buni candidați, angajați-vă într-o companie de renume' },
      { hid: 'og:title', name: 'og:title', content: 'Recruto face legătura între candidați și companii' },
      { hid: 'og:description', name: 'og:description', content: 'începeți procesul de angajare, aplicați cu ușurință pentru joburile pe care le doriți, găsiți candidații potriviți' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://recruto.ro' },
      { hid: 'og:image', name: 'og:image', content: 'https://recruto.ro/icon.png' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@maccyber' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Recruto oferă consiliere gratuită în carieră' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'angajați-vă rapid și ușor și asigurați-vă locul de muncă visat' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://recruto.ro/icon.png' },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Recruto logo' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      // { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: true }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  optimizeCSS: true,
  pwa: {
    manifest: {
      name: 'Recruto',
      short_name: 'Recruto'
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~/plugins/apexcharts', mode: 'client' },
    { src: '~/plugins/confetti', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
    ['@nuxtjs/google-analytics', {
      id: 'UA-92177881-2'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  optimizedImages: {
    optimizeImages: true
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/pwa',
    '@aceforth/nuxt-optimized-images',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            name: 'Norsk',
            code: 'no',
            iso: 'nb-NO',
            file: 'nb-NO.js',
            dir: 'ltr'
          },
          {
            name: 'Dansk',
            code: 'da',
            iso: 'da',
            file: 'da.js',
            dir: 'ltr'
          },
          {
            name: 'Svenska',
            code: 'sv',
            iso: 'sv',
            file: 'sv.js',
            dir: 'ltr'
          },
          {
            name: 'Arabic',
            code: 'ar',
            iso: 'ar',
            file: 'ar.js',
            dir: 'rtl'
          },
          {
            name: 'Deutsch',
            code: 'de',
            iso: 'de',
            file: 'de.js',
            dir: 'ltr'
          },
          {
            name: 'Finnish',
            code: 'fi',
            iso: 'fi',
            file: 'fi.js',
            dir: 'ltr'
          },
          {
            name: 'Spanish',
            code: 'es',
            iso: 'es',
            file: 'es.js',
            dir: 'ltr'
          },
          {
            name: 'Română',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js',
            dir: 'ltr'
          },
          {
            name: 'Hind',
            code: 'hi',
            iso: 'hi',
            file: 'hi.js',
            dir: 'ltr'
          },
          {
            name: 'French',
            code: 'fr',
            iso: 'fr',
            file: 'fr.js',
            dir: 'ltr'
          },
          {
            name: 'Russian',
            code: 'ru',
            iso: 'ru',
            file: 'ru.js',
            dir: 'ltr'
          },
          {
            name: 'Chinese',
            code: 'zh-Hans',
            iso: 'zh-Hans',
            file: 'zh-Hans.js',
            dir: 'ltr'
          },
          {
            name: 'Bahasa Indonesia',
            code: 'id',
            iso: 'id',
            file: 'id.js',
            dir: 'ltr'
          },
          {
            name: 'Ukrainian',
            code: 'uk',
            iso: 'uk',
            file: 'uk.js',
            dir: 'ltr'
          },
          {
            name: 'Japanese',
            code: 'ja',
            iso: 'ja',
            file: 'ja.js',
            dir: 'ltr'
          },
          {
            name: 'Polish',
            code: 'pl',
            iso: 'pl',
            file: 'pl.js',
            dir: 'ltr'
          },
          {
            name: 'Brazilian Portuguese',
            code: 'pt',
            iso: 'pt-br',
            file: 'pt-BR.js',
            dir: 'ltr'
          },
          {
            name: 'Italian',
            code: 'it',
            iso: 'it',
            file: 'it.js',
            dir: 'ltr'
          },
          {
            name: 'English',
            code: 'is',
            iso: 'is',
            file: 'is.js',
            dir: 'ltr'
          },
          {
            name: 'Thai',
            code: 'th',
            iso: 'th',
            file: 'th.js',
            dir: 'ltr'
          }
        ],
        seo: true,
        baseUrl: 'https://recruto.ro',
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        lazy: true,
        langDir: 'translations/',
        detectBrowserLanguage: {
          onlyOnRoot: true,
          useCookie: true,
          fallbackLocale: 'en'
        }
      }
    ],
    '@nuxtjs/sitemap',
    [
      'nuxt-amplitude', {
        apiKey: '2ceb7de83dc2b9a3f73bbece2eaf0d94',
        config: {
          saveEvents: true,
          includeUtm: true,
          includeReferrer: true,
          trackingOptions: {
            country: true,
            city: true,
            ip_address: false
          }
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  sitemap: {
    hostname: 'https://recruto.ro'
  },
  webfontloader: {
    google: {
      families: ['Passion One']
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Krub',
        size: '1.125rem'
      },
      icons: false
    },
    lang: {
      current: 'en'
    },
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#000000',
          secondary: '#39b3ed',
          accent: '#607d8b',
          error: '#f44336',
          warning: '#ff9800',
          info: '#03a9f4',
          success: '#7dde76',
          anchor: '#ecb855'
        }
      }
    }
  },
  env: {
    API_URL: 'https://recruto.ro/api/',
    MONGODB_URI: 'mongodb+srv://hamid:hamid12345@cluster0.maldw.mongodb.net/big5?retryWrites=true&w=majority',
    MONGODB_COLLECTION: 'results',
    BASE_URL: 'https://recruto.ro' // TODO: Fix for dev environment
  },
  build: {
    extractCSS: true,
    extend (config, ctx) {
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
