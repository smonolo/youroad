<template>
  <nav class="bg-yr-brand w-full px-5 py-3">
    <div class="grid w-full grid-cols-3">
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-baseline gap-x-1 text-white">
          <span class="text-lg font-semibold">YouRoad</span>
          <span>Travels Manager</span>
        </NuxtLink>
      </div>
      <div class="flex items-center justify-center gap-x-5">
        <NuxtLink
          v-for="(item, key) in data.items"
          :key
          :to="item.url"
          :class="route.path === item.url ? 'text-neutral-200' : 'text-white'"
          class="font-medium"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
      <div class="flex items-center justify-end">
        <div class="flex w-fit items-center gap-x-2">
          <div
            class="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-neutral-800 text-sm font-semibold uppercase text-white"
          >
            YC
          </div>
          <p class="font-medium text-white">YouRoad Coordinator</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import data from '~/data/navbar.json'

defineComponent({ name: 'Navbar' })

const route = useRoute()
</script>
