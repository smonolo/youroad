<template>
  <div class="overflow-hidden rounded-lg">
    <table class="w-full">
      <thead>
        <tr class="bg-neutral-800 text-left text-white">
          <th class="px-4 py-2 font-semibold">Name</th>
          <th class="px-4 py-2 font-semibold">Dates</th>
          <th class="px-4 py-2 font-semibold">Price per person</th>
          <th class="px-4 py-2 font-semibold">Average rating</th>
          <th />
        </tr>
      </thead>
      <tbody
        class="[&>tr:nth-child(even)]:bg-neutral-100 [&>tr:nth-child(odd)]:bg-neutral-50"
      >
        <TravelsTableRow
          v-for="(travel, key) in travels"
          :key
          :travel
          @update:selected-travel="$emit('update:selectedTravel', $event)"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { Travel } from '~/types/travels'
import TravelsTableRow from '~/components/travels/table/TravelsTableRow.vue'
import type { SelectedTravelPayload } from '~/pages/travels.vue'

type Props = {
  travels: Travel[]
}

type Emits = {
  'update:selectedTravel': [payload: SelectedTravelPayload]
}

defineComponent({ name: 'TravelsTable' })

defineProps<Props>()

defineEmits<Emits>()
</script>
