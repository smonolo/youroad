<template>
  <div
    class="absolute left-0 top-0 z-20 h-screen w-screen bg-neutral-800/80 lg:relative lg:w-fit lg:bg-transparent"
    :class="showSidebar ? 'block lg:block' : 'hidden lg:block'"
    @click="$emit('update:showSidebar', false)"
  >
    <aside
      class="flex h-screen min-w-fit max-w-fit flex-col justify-between bg-neutral-800"
      @click.stop
    >
      <div>
        <NuxtLink to="/" class="block p-5">
          <h1 class="whitespace-nowrap text-lg font-semibold text-white">
            YouRoad
            <span class="whitespace-nowrap text-base font-medium">
              Travels Manager
            </span>
          </h1>
        </NuxtLink>
        <ul class="flex flex-col gap-y-1 p-5">
          <li v-for="(item, key) in data.items" :key>
            <NuxtLink
              :to="item.url"
              class="flex items-baseline gap-x-3 rounded-lg px-3 py-1.5 font-medium text-white"
              :class="
                route.path === item.url ? 'bg-yr-brand' : 'hover:bg-yr-brand/20'
              "
              @click="$emit('update:showSidebar', false)"
            >
              <i class="bi" :class="`bi-${item.icon}`" />
              <span>{{ item.title }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="p-5">
        <Account />
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import data from '~/data/sidebar.json'
import Account from '~/components/shared/Account.vue'

type Props = {
  showSidebar: boolean
}

type Emits = {
  'update:showSidebar': [value: boolean]
}

defineComponent({ name: 'Sidebar' })

defineProps<Props>()

defineEmits<Emits>()

const route = useRoute()
</script>
