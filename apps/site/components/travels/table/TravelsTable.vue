<template>
  <Table :headers>
    <TravelsTableRow
      v-for="(travel, key) in travels"
      :key
      :travel
      @update:open-modal="$emit('update:openModal', $event)"
    />
  </Table>
</template>

<script setup lang="ts">
import type { Travel } from '~/types/travels'
import TravelsTableRow from '~/components/travels/table/TravelsTableRow.vue'
import type { TravelModalType } from '~/pages/travels.vue'
import Table from '~/components/ui/Table.vue'

type Props = {
  travels: Travel[]
}

type Emits = {
  'update:openModal': [modalType: TravelModalType]
}

defineComponent({ name: 'TravelsTable' })

defineProps<Props>()

defineEmits<Emits>()

const headers = [
  'Name',
  'Departure',
  'Return',
  'Price Per Person',
  'Average Rating'
]
</script>
