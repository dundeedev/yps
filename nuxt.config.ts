// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    'nuxt-svgo',
  ],
  eslint: {
    // options here
  },
  postcss: {
    plugins: {
      'postcss-preset-env': {},
      'postcss-nested': {},
    }
  },
  css: ['~/assets/css/main.css']
})
