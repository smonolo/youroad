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

const { $api } = useNuxtApp()
const travelsStore = useTravelsStore()

const formattedTravel = computed(() => formatTravel(props.travel))

const actions = {
  show: () =>
    emit('update:selectedTravel', { travel: props.travel, action: 'show' }),
  edit: () =>
    emit('update:selectedTravel', { travel: props.travel, action: 'form' }),
  remove: () => deleteTravel(props.travel.id)
}

const deleteTravel = (id: string) => {
  $api.deleteTravel(id)
  travelsStore.removeTravel(id)
}
</script>
