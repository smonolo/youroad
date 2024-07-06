<template>
  <ul class="[&>li:first-child]:rounded-t-lg">
    <li
      v-for="(item, key) in items"
      :key
      class="flex cursor-pointer flex-col justify-between gap-x-5 border-b border-neutral-200 px-2 py-2 transition-colors hover:bg-neutral-100 md:flex-row md:items-center lg:gap-x-10"
      @click="item.action"
    >
      <span class="block font-medium">{{ item.primaryText }}</span>
      <span class="block">{{ item.secondaryText }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
type QuickListItem = {
  primaryText: string
  secondaryText: string
  action: () => void
}

type Props = {
  items: QuickListItem[]
}

defineComponent({ name: 'QuickList' })

defineProps<Props>()
</script>
