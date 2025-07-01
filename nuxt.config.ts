// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['./assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      link: [
        // Gunakan import manual agar tidak bentrok
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap',
        },
      ],
    },
  },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    // Hapus nuxt-google-fonts jika kamu tidak butuh dynamic import font
    // '@nuxtjs/google-fonts'
  ],

  // Jika tetap ingin menggunakan nuxt-google-fonts (opsional), gunakan cara aman:
  /*
  googleFonts: {
    families: {
      Orbitron: [400, 700],
      // Hindari Inter jika sering menimpa font
      // Inter: false
    },
    display: 'swap',
    download: false, // true jika ingin generate lokal
    inject: false // Jangan inject otomatis ke <head>
  },
  */
})
