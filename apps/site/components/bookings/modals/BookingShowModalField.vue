<template>
  <div>
    <span class="text-xs font-medium uppercase text-neutral-800">{{
      label
    }}</span>
    <p class="font-medium">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
type Props = {
  label: string
}

defineComponent({ name: 'BookingShowModalField' })

defineProps<Props>()
</script>
