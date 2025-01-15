// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'REPELS A 17',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://repels-a.vercel.app/' },
        { property: 'og:title', content: 'REPELS A 17' },
        { property: 'og:description', content: 'REPELS A 17' },
        { property: 'og:image', content: 'https://repels-a.vercel.app/_nuxt/img/bgawal.f2374ae.jpg' },
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://repels-a.vercel.app/' },
        { property: 'twitter:title', content: 'REPELS A 17' },
        { property: 'twitter:description', content: 'REPELS A 17' },
        { property: 'twitter:image', content: 'https://repels-a.vercel.app/_nuxt/img/bgawal.f2374ae.jpg' },
        { property: 'linkedin:url', content: 'https://repels-a.vercel.app/' },
        { property: 'linkedin:title', content: 'REPELS A 17' },
        { property: 'linkedin:description', content: 'REPELS A 17' },
        { property: 'linkedin:image', content: 'https://repels-a.vercel.app/_nuxt/img/bgawal.f2374ae.jpg' },
        {
          hid: "description",
          name: "description",
          content: "RPL A Angkatan 17",
        },
        { hid: "description", name: "author", content: "REPELS A 17" },
        {
          name: "keywords",
          content:"RPL A 17, Politeknik Negeri Indramayu, POLINDRA, Rekayasa Perangkat Lunak, RPL A, mahasiswa RPL, kelas RPL A 17, website RPL, jurusan RPL, Polindra RPL, RPL Polindra, teknologi informasi Polindra, RPL A Polindra",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "REPELS A 17",
            url: "https://web.whatsapp.com/",
            sameAs: [
              "https://github.com/izanagi05",
              "https://www.instagram.com/z.frs_slm05",
            ],
            jobTitle: "Web Developer, Videographer, Photographer",
            worksFor: {
              "@type": "Organization",
              name: "REPELS A 17",
            },
          }),
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css:['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss']
})