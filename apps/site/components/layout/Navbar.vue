<template>
  <nav class="bg-yr-brand w-full px-5 py-3">
    <div class="grid w-full grid-cols-3">
      <div class="flex items-center">
        <NuxtLink to="/" class="flex items-baseline gap-x-1 text-white">
          <span class="text-lg font-semibold">YouRoad</span>
          <span className="hidden md:block">Travels Manager</span>
        </NuxtLink>
      </div>
      <div class="flex items-center justify-center gap-x-1.5 md:gap-x-3">
        <NuxtLink
          v-for="(item, key) in data.items"
          :key
          :to="item.url"
          :class="
            route.path === item.url
              ? 'bg-neutral-800/20'
              : 'hover:bg-neutral-800/10'
          "
          class="rounded-lg px-2.5 py-1 font-medium text-white transition-colors"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
      <div class="flex items-center justify-end">
        <div class="flex w-fit items-center gap-x-2">
          <div
            class="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-neutral-800 text-sm font-semibold uppercase text-white"
          >
            {{ initials }}
          </div>
          <p class="hidden font-medium text-white md:block">
            {{ user.fullName }}
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import data from '~/data/navbar.json'
import user from '~/data/user.json'

defineComponent({ name: 'Navbar' })

const route = useRoute()

const initials = user.fullName
  .split(' ')
  .map(name => name[0])
  .join('')
</script>
