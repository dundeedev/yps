// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  modules: ['@nuxt/eslint', 'nuxt-svgo', '@nuxt/image'],
  eslint: {
    config: {
      standalone: false,
    },
  },
  postcss: {
    plugins: {
      '@csstools/postcss-global-data': {
        files: [
          'assets/css/config/media-queries.css',
        ],
      },
      'postcss-preset-env': {
        stage: 2,
        features: {
          'nesting-rules': false,
          'custom-media-queries': true,
        },
      },
      'postcss-nested': {},
    },
  },
  css: ['~/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://6141b2f5357db50017b3dc1a.mockapi.io/api/v1',
    },
  },
})
