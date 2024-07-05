<template>
  <nav
    class="flex h-[54px] w-full items-center justify-between bg-neutral-100 px-4 py-3 lg:hidden"
  >
    <div class="flex w-fit items-center gap-x-4">
      <button
        class="flex flex-col gap-y-1"
        @click="$emit('update:showSidebar', !showSidebar)"
      >
        <div
          v-for="(_, index) in 3"
          :key="index"
          class="h-[2px] w-5 bg-neutral-800"
        />
      </button>
      <span class="block font-semibold">YouRoad</span>
    </div>
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
