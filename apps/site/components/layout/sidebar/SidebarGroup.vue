<template>
  <section class="flex w-full flex-col gap-y-1">
    <span class="block text-xs font-medium uppercase text-neutral-600">
      {{ title }}
    </span>
    <ul class="flex flex-col gap-y-1">
      <li v-for="(item, key) in items" :key>
        <NuxtLink
          :to="item.url"
          class="flex items-baseline gap-x-3 rounded-lg px-3 py-1.5 font-medium"
          :class="
            route.path === item.url
              ? 'bg-yr-brand text-white'
              : 'hover:bg-neutral-800/10'
          "
          @click="$emit('update:showSidebar', false)"
        >
          <i class="bi" :class="`bi-${item.icon}`" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
type SidebarItem = {
  icon: string
  title: string
  url: string
}

type Props = {
  title: string
  items: SidebarItem[]
}

type Emits = {
  'update:showSidebar': [value: boolean]
}

defineComponent({ name: 'SidebarGroup' })

defineProps<Props>()

defineEmits<Emits>()

const route = useRoute()
</script>
