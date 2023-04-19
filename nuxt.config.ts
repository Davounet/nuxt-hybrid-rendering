// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-full-static'],

  nitro: {
    prerender: {
      routes: ['/', '/about']
    }
  },

  routeRules: {
    '/': { static: true },
    '/about': { static: true },
    '/cart': { ssr: false }
  }
})
