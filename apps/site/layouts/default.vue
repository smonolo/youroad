<template>
  <div class="flex min-h-screen flex-col justify-between gap-y-10">
    <div>
      <Navbar />
      <main class="p-5 md:px-10 md:py-8">
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
