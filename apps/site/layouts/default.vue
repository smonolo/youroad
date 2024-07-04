<template>
  <div class="relative flex h-screen w-screen overflow-hidden">
    <Sidebar :showSidebar @update:show-sidebar="showSidebar = $event" />
    <div class="flex min-h-screen w-full flex-col justify-between">
      <div>
        <Navbar :showSidebar @update:show-sidebar="showSidebar = $event" />
        <main>
          <slot />
        </main>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/layout/Footer.vue'
import Navbar from '~/components/layout/Navbar.vue'
import Sidebar from '~/components/layout/Sidebar.vue'

defineComponent({ name: 'Layout' })

const showSidebar = ref<boolean>(false)
</script>
