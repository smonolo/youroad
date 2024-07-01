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
        <tr v-for="(travel, key) in travels" :key>
          <td class="px-4 py-2">{{ travel.name }}</td>
          <td class="px-4 py-2">
            {{ moment(travel.start_date).format('MMMM DD, YYYY') }} -
            {{ moment(travel.end_date).format('MMMM DD, YYYY') }}
          </td>
          <td class="px-4 py-2">{{ travel.price_per_person }}</td>
          <td class="px-4 py-2">{{ travel.average_rating }}</td>
          <td class="flex items-center gap-x-5 px-4 py-2">
            <button @click="$emit('update:selectedTravel', travel)">
              <i class="bi bi-pencil text-blue-500" />
            </button>
            <button @click="deleteTravel(travel.id)">
              <i class="bi bi-trash text-red-500" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { useTravelsStore } from '~/pinia/travels'
import type { Travel } from '~/types/travels'

type Props = {
  travels: Travel[]
}

type Emits = {
  'update:selectedTravel': [value: Travel]
}

defineComponent({ name: 'TravelsTable' })

defineProps<Props>()

defineEmits<Emits>()

const { $api } = useNuxtApp()
const travelsStore = useTravelsStore()

const deleteTravel = (id: string) => {
  $api.deleteTravel(id)
  travelsStore.fetchTravels()
}
</script>
