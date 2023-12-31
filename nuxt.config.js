let baseUrl = "http://api.sgn.colibri.tj/api";
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  layout:'default',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SGN-Dashboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/axios",
    "~/plugins/vee-validate",

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth-next',
    '@nuxtjs/axios',
    'vue2-editor/nuxt'
  ],

  auth: {
    watchLoggedIn: true,
    resetOnError: true,
    strategies: {
      local: {
        url: "http://api.sgn.colibri.tj/api",
        token: {
          property: "token",
          maxAge:86400,
          global: true,
        },
        user: {
          property: "user",
        },
        endpoints: {
          login: {
            url: "http://api.sgn.colibri.tj/api/login",
          },
          logout: {
            url: "http://api.sgn.colibri.tj/api/logout",
          },
          user: {
            url: "http://api.sgn.colibri.tj/api/me",
          },
        },
      },
    },
    redirect: {
      login: "/login",
      logout: "/login",
      home: "/admin/",
      show: "/show/tj/"
    },
  },
  router: {
    middleware: ["auth"],
  },

axios:{
  baseUrl:baseUrl
},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
