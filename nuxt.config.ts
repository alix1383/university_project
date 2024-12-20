// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  app: {

    head: {
      title: "University Project",

      htmlAttrs: {
        lang: "en"
      },

      meta: [
        {
          name: 'description',
          content: 'simple web site to listen music (University Project)'
        }
      ],
    }
  },


  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/fonts']
})
