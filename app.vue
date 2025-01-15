<template>
  <div data-theme="light">
   <NuxtLayout> 
    <NuxtPage />
   </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'REPELS A 17',
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://repels-a.vercel.app/' },
    { property: 'og:title', content: 'REPELS A 17' },
    { property: 'og:description', content: 'REPELS A 17' },
    { property: 'og:image', content: 'https://repels-a.vercel.app/_nuxt/img/logo.B8mhwcg1.png' },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:url', content: 'https://repels-a.vercel.app/' },
    { property: 'twitter:title', content: 'REPELS A 17' },
    { property: 'twitter:description', content: 'REPELS A 17' },
    { property: 'twitter:image', content: 'https://repels-a.vercel.app/_nuxt/img/logo.B8mhwcg1.png' },
    { name: 'keywords', content: 'Politeknik Negeri Indramayu, POLINDRA, website rpl polindra, RPL A 17' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
});
</script> 