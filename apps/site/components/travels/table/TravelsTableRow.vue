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
import type { TravelModalType } from '~/pages/travels.vue'
import { useTravelsStore } from '~/pinia/travels'
import type { Travel } from '~/types/travels'
import { formatTravel } from '~/utils/travels'
import TravelRating from '~/components/travels/rating/TravelRating.vue'
import TableActions from '~/components/shared/table/TableActions.vue'

type Props = {
  travel: Travel
}

type Emits = {
  'update:openModal': [modalType: TravelModalType]
}

defineComponent({ name: 'TravelsTableRow' })

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const travelsStore = useTravelsStore()

const formatted = computed(() => formatTravel(props.travel))

const cells = computed(() => [
  formatted.value.name,
  formatted.value.start_date,
  formatted.value.end_date,
  formatted.value.price_per_person
])

const actions = {
  show: () => {
    travelsStore.selectTravel(props.travel.id)
    emit('update:openModal', 'show')
  },
  edit: () => {
    travelsStore.selectTravel(props.travel.id)
    emit('update:openModal', 'form')
  },
  remove: () => travelsStore.deleteTravel(props.travel.id)
}
</script>
