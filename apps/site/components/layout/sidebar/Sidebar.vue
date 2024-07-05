<template>
  <div
    class="absolute left-0 top-0 z-20 h-screen w-screen bg-neutral-800/80 lg:relative lg:w-fit lg:bg-transparent"
    :class="showSidebar ? 'block lg:block' : 'hidden lg:block'"
    @click="$emit('update:showSidebar', false)"
  >
    <aside
      class="flex h-screen min-w-[240px] max-w-[240px] flex-col justify-between bg-neutral-100 p-7 lg:pr-0"
      @click.stop
    >
      <div>
        <NuxtLink to="/" class="block">
          <img
            :src="logo"
            alt="YouRoad logo"
            class="h-fit w-[80px]"
            :draggable="false"
          />
        </NuxtLink>
        <ul class="mt-8 flex flex-col gap-y-6">
          <li v-for="(group, key) in data.groups" :key>
            <SidebarGroup
              :="group"
              @update:show-sidebar="$emit('update:showSidebar', $event)"
            />
          </li>
        </ul>
      </div>
      <div class="">
        <Account />
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import data from '~/data/sidebar.json'
import Account from '~/components/shared/Account.vue'
import logo from '~/assets/img/logo.svg'
import SidebarGroup from '~/components/layout/sidebar/SidebarGroup.vue'

type Props = {
  showSidebar: boolean
}

type Emits = {
  'update:showSidebar': [value: boolean]
}

defineComponent({ name: 'Sidebar' })

defineProps<Props>()

defineEmits<Emits>()
</script>
