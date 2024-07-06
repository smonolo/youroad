<template>
  <div class="relative flex h-screen w-screen overflow-hidden bg-neutral-100">
    <Sidebar />
    <div class="h-screen w-full p-3 lg:p-5">
      <div
        class="min-h-full w-full overflow-hidden rounded-xl border border-neutral-200 bg-white"
      >
        <Navbar />
        <main
          class="flex h-[calc(100vh-94px)] flex-col justify-between gap-y-4 overflow-y-auto lg:h-[calc(100vh-40px)]"
        >
          <slot />
          <Footer />
          <Modals />
        </main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue'
import Navbar from '~/components/layout/Navbar.vue'
import Sidebar from '~/components/layout/sidebar/Sidebar.vue'
import Modals from '~/components/shared/Modals.vue'

defineComponent({ name: 'Layout' })
</script>
