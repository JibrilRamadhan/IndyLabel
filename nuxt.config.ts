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
        { rel: 'icon', type: 'image/x-icon', href: '/logo/1favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo/favicon-16x16.png' },

        // Apple
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/logo/apple-touch-icon.png' },

        // Android
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/logo/android-chrome-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/logo/android-chrome-512x512.png' },

        // Manifest
        { rel: 'manifest', href: '/logo/site.webmanifest' },
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
