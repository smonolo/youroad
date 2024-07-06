<template>
  <tr>
    <td v-for="(cell, key) in cells" :key>{{ cell }}</td>
    <td>
      <TravelRating :rating="formatted.average_rating" />
    </td>
    <td>
      <TravelsTableBookings :travel />
    </td>
    <td>
      <TableActions :="actions" />
    </td>
  </tr>
</template>

<script setup lang="ts">
import { useTravelsStore } from '~/pinia/travels'
import type { Travel } from '~/types/travels'
import { formatTravel } from '~/utils/travels'
import TravelRating from '~/components/travels/rating/TravelRating.vue'
import TableActions from '~/components/shared/table/TableActions.vue'
import { useUiStore } from '~/pinia/ui'
import TravelsTableBookings from '~/components/travels/table/TravelsTableBookings.vue'
import { useShowTravel } from '~/composables/travels/useShowTravel'

type Props = {
  travel: Travel
}

defineComponent({ name: 'TravelsTableRow' })

const props = defineProps<Props>()

const travelsStore = useTravelsStore()
const uiStore = useUiStore()
const { showTravel } = useShowTravel()

const formatted = computed(() => formatTravel(props.travel))

const cells = computed(() => [
  formatted.value.name,
  formatted.value.start_date,
  formatted.value.end_date,
  formatted.value.price_per_person
])

const actions = {
  show: () => showTravel(props.travel.id),
  edit: () => {
    travelsStore.selectTravel(props.travel.id)
    uiStore.openModal('travel-form')
  },
  remove: () => travelsStore.deleteTravel(props.travel.id)
}
</script>
