// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        
      ]
    }   
  },
  devtools: { enabled: true },
  css: [],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@pinia/nuxt']
})
