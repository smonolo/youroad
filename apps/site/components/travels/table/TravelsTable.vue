<template>
  <Table :headers>
    <TravelsTableRow
      v-for="(travel, key) in travels"
      :key
      :travel
      @update:selected-travel="$emit('update:selectedTravel', $event)"
    />
  </Table>
</template>

<script setup lang="ts">
import type { Travel } from '~/types/travels'
import TravelsTableRow from '~/components/travels/table/TravelsTableRow.vue'
import type { SelectedTravelPayload } from '~/pages/travels.vue'
import Table from '~/components/ui/Table.vue'

type Props = {
  travels: Travel[]
}

type Emits = {
  'update:selectedTravel': [payload: SelectedTravelPayload]
}

defineComponent({ name: 'TravelsTable' })

defineProps<Props>()

defineEmits<Emits>()

const headers = [
  'Name',
  'Departure',
  'Return',
  'Price per person',
  'Average rating'
]
</script>
