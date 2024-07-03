<template>
  <tr>
    <td v-for="(cell, key) in cells" :key>{{ cell }}</td>
    <td>
      <TravelRating :rating="formatted.average_rating" />
    </td>
    <td>
      <TableActions :="actions" />
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { SelectedTravelPayload } from '~/pages/travels.vue'
import { useTravelsStore } from '~/pinia/travels'
import type { Travel } from '~/types/travels'
import { formatTravel } from '~/utils/travels'
import TravelRating from '~/components/travels/TravelRating.vue'
import TableActions from '~/components/shared/tables/TableActions.vue'

type Props = {
  travel: Travel
}

type Emits = {
  'update:selectedTravel': [payload: SelectedTravelPayload]
}

defineComponent({ name: 'TravelsTableRow' })

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const travelsStore = useTravelsStore()

const formatted = computed(() => formatTravel(props.travel))

const actions = {
  show: () =>
    emit('update:selectedTravel', { travel: props.travel, action: 'show' }),
  edit: () =>
    emit('update:selectedTravel', { travel: props.travel, action: 'form' }),
  remove: () => travelsStore.deleteTravel(props.travel.id)
}

const cells = [
  formatted.value.name,
  formatted.value.start_date,
  formatted.value.end_date,
  formatted.value.price_per_person
]
</script>
