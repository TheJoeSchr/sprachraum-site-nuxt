// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN, devtools: true }],
    '@nuxt/image'
  ]
})