<template>
  <footer class="w-full border-t border-neutral-200 px-5 py-3">
    <div class="flex items-center justify-center gap-x-5 text-sm font-medium">
      YouRoad Travels Manager v{{ info.version }}
    </div>
  </footer>
</template>

<script setup lang="ts">
import info from '~/package.json'

defineComponent({ name: 'Footer' })
</script>
