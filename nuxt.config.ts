// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'http://127.0.0.1:8000/api/',
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  css: [],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt']
})