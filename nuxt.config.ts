// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      baseURL: '',
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