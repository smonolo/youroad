<template>
  <div class="flex items-center gap-x-1">
    <i
      v-for="(_, key) in Array.from({ length: rating })"
      :key
      class="bi bi-star-fill text-yr-brand"
    />
    <i
      v-for="(_, key) in Array.from({ length: 5 - rating })"
      :key
      class="bi bi-star-fill text-neutral-300"
    />
  </div>
</template>

<script setup lang="ts">
type Props = {
  rating: number
}

defineComponent({ name: 'TravelRating' })

defineProps<Props>()
</script>
