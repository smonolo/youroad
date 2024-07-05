<template>
  <div class="relative flex h-screen w-screen overflow-hidden bg-neutral-100">
    <Sidebar :showSidebar @update:show-sidebar="showSidebar = $event" />
    <div class="h-screen w-full p-5">
      <div
        class="flex min-h-full w-full flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white"
      >
        <div class="flex h-full flex-col overflow-auto">
          <Navbar :showSidebar @update:show-sidebar="showSidebar = $event" />
          <main>
            <slot />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue'
import Navbar from '~/components/layout/Navbar.vue'
import Sidebar from '~/components/layout/sidebar/Sidebar.vue'

defineComponent({ name: 'Layout' })

const showSidebar = ref<boolean>(false)
</script>
