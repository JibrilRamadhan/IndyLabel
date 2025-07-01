<template>
  <div>
    <Navbar />
    <main class="min-h-screen">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>


<script setup>
import Navbar from '../component/Navbar.vue'
import Footer from '../component/Footer.vue'
</script>
