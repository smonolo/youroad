<template>
  <tr>
    <td class="px-4 py-2">{{ formattedTravel.name }}</td>
    <td class="px-4 py-2">
      {{ formattedTravel.start_date }} -
      {{ formattedTravel.end_date }}
    </td>
    <td class="px-4 py-2">{{ formattedTravel.price_per_person }}</td>
    <td class="px-4 py-2">
      <TravelRating :rating="formattedTravel.average_rating" />
    </td>
    <td class="px-4 py-2">
      <div class="flex items-center gap-x-3">
        <button
          @click="$emit('update:selectedTravel', { travel, action: 'show' })"
        >
          <i class="bi bi-eye-fill text-neutral-800" />
        </button>
        <button
          @click="$emit('update:selectedTravel', { travel, action: 'form' })"
        >
          <i class="bi bi-pencil-fill text-blue-500" />
        </button>
        <button @click="deleteTravel(travel.id)">
          <i class="bi bi-trash-fill text-red-500" />
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { SelectedTravelPayload } from '~/pages/travels.vue'
import { useTravelsStore } from '~/pinia/travels'
import type { Travel } from '~/types/travels'
import { formatTravel } from '~/utils/travels'
import TravelRating from '~/components/travels/TravelRating.vue'

type Props = {
  travel: Travel
}

type Emits = {
  'update:selectedTravel': [payload: SelectedTravelPayload]
}

defineComponent({ name: 'TravelsTableRow' })

const props = defineProps<Props>()

defineEmits<Emits>()

const { $api } = useNuxtApp()
const travelsStore = useTravelsStore()

const formattedTravel = computed(() => formatTravel(props.travel))

const deleteTravel = (id: string) => {
  $api.deleteTravel(id)
  travelsStore.removeTravel(id)
}
</script>
