<template>
  <Table :headers>
    <TravelsTableRow v-for="(travel, key) in travels" :key :travel />
  </Table>
</template>

<script setup lang="ts">
import type { Travel } from '~/types/travels'
import TravelsTableRow from '~/components/travels/table/TravelsTableRow.vue'
import Table from '~/components/ui/Table.vue'

type Props = {
  travels: Travel[]
}

defineComponent({ name: 'TravelsTable' })

defineProps<Props>()

const headers = [
  'Name',
  'Departure',
  'Return',
  'Price Per Person',
  'Average Rating',
  'Bookings'
]
</script>
