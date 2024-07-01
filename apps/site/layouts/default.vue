<template>
  <div class="flex min-h-screen flex-col justify-between">
    <div>
      <Navbar />
      <main class="px-10 py-8">
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue'
import Navbar from '~/components/layout/Navbar.vue'

defineComponent({ name: 'Layout' })
</script>
