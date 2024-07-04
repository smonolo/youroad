<template>
  <nav
    class="flex w-full items-center justify-between bg-neutral-800 px-4 py-3 lg:hidden"
  >
    <button
      class="flex flex-col gap-y-1"
      @click="$emit('update:showSidebar', !showSidebar)"
    >
      <div v-for="(_, index) in 3" :key="index" class="h-[1px] w-5 bg-white" />
    </button>
    <Account reduced />
  </nav>
</template>

<script setup lang="ts">
import Account from '~/components/shared/Account.vue'

type Props = {
  showSidebar: boolean
}

type Emits = {
  'update:showSidebar': [value: boolean]
}

defineComponent({ name: 'Navbar' })

defineProps<Props>()

defineEmits<Emits>()
</script>
