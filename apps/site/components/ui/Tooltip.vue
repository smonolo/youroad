<template>
  <div class="group relative w-fit">
    <slot />
    <div
      class="absolute bottom-[calc(100%+5px)] left-1/2 hidden w-fit -translate-x-1/2 rounded-md bg-neutral-800 px-2.5 py-1 font-medium text-white group-hover:block"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  text: string
}

defineComponent({ name: 'Tooltip' })

defineProps<Props>()
</script>
