// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {

    head: {
      title: "university Project",

      htmlAttrs: {
        lang: "en"
      },

      meta: [
        {
          name: 'description',
          content: 'simple web site to listen music (University project)'
        }
      ],
    }
  },


  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ]
})
