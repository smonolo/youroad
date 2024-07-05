<template>
  <Modal :open @update:open="$emit('update:open', $event)">
    <div class="p-6">
      <p v-if="!formatted">Loading travel...</p>
      <div v-else-if="!!formatted">
        <NuxtImg
          :src="formatted.picture"
          :alt="formatted.name"
          :draggable="false"
          class="h-[200px] w-full rounded-lg object-cover"
        />
        <div class="mt-3 px-2">
          <div class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold">{{ formatted.name }}</h1>
            <TravelRating :rating="formatted.average_rating" />
          </div>
          <div class="flex items-center gap-x-1 text-sm font-medium">
            <span>{{ formatted.price_per_person }}/person</span>
            ·
            <span> {{ formatted.start_date }} - {{ formatted.end_date }} </span>
          </div>
          <p class="mt-4">{{ formatted.description }}</p>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '~/components/ui/Modal.vue'
import { formatTravel } from '~/utils/travels'
import TravelRating from '~/components/travels/rating/TravelRating.vue'
import { useTravelsStore } from '~/pinia/travels'

type Props = {
  open: boolean
}

type Emits = {
  'update:open': [value: boolean]
}

defineComponent({ name: 'TravelShowModal' })

defineProps<Props>()

defineEmits<Emits>()

const travelsStore = useTravelsStore()

const travel = computed(() => travelsStore.getSelectedTravel)

const formatted = computed(() => {
  if (travel.value) {
    return formatTravel(travel.value)
  }
})
</script>
