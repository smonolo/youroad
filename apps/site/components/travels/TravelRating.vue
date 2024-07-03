<template>
  <Tooltip :text="`Rating: ${rating}`">
    <div class="flex items-center gap-x-1">
      <i
        v-for="(_, key) in rating"
        :key
        class="bi bi-star-fill text-yr-brand"
      />
      <i
        v-for="(_, key) in 5 - rating"
        :key
        class="bi bi-star-fill text-neutral-300"
      />
    </div>
  </Tooltip>
</template>

<script setup lang="ts">
import Tooltip from '~/components/ui/Tooltip.vue'

type Props = {
  rating: number
}

defineComponent({ name: 'TravelRating' })

defineProps<Props>()
</script>
