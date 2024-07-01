<template>
  <div>
    <input
      v-model="travelSearch"
      type="text"
      class="input"
      placeholder="Search travels..."
      :disabled="travelsStore.isLoading || isLoading"
    />
    <div class="mt-4">
      <p v-if="!filteredTravels.length" class="font-medium">
        No travels found, or search for one.
      </p>
      <template v-else>
        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="(travel, key) in filteredTravels.map(formatTravel)"
            :key
            class="flex cursor-pointer items-center gap-x-2 rounded-md px-3 py-1.5 transition-colors"
            :class="
              state.travel_id === travel.id
                ? 'bg-yr-brand text-white'
                : 'bg-neutral-200 hover:bg-neutral-300'
            "
            @click="$emit('update:selectedTravelId', travel.id)"
          >
            <i
              class="bi"
              :class="
                state.travel_id === travel.id
                  ? 'bi-check-circle'
                  : 'bi-plus-circle'
              "
            />
            <div>
              <p class="font-medium">{{ travel.name }}</p>
              <p class="text-sm">
                {{ travel.start_date }} - {{ travel.end_date }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTravelsStore } from '~/pinia/travels'
import type { Booking } from '~/types/bookings'
import { formatTravel } from '~/utils/travels'

type Props = {
  state: Partial<Booking>
  isLoading: boolean
}

type Emits = {
  'update:selectedTravelId': [value: string]
}

defineComponent({ name: 'BookingFormTravelSelector' })

const props = defineProps<Props>()

defineEmits<Emits>()

const travelsStore = useTravelsStore()

const travelSearch = ref<string>('')

const filteredTravels = computed(() => {
  const selectedTravel = travelsStore.travels.find(
    t => t.id === props.state.travel_id
  )

  if (!travelSearch.value) {
    return selectedTravel ? [selectedTravel] : []
  }

  return [
    ...(selectedTravel ? [selectedTravel] : []),
    ...travelsStore.travels.filter(
      travel =>
        travel.name.toLowerCase().includes(travelSearch.value.toLowerCase()) &&
        travel.id !== selectedTravel?.id
    )
  ]
})
</script>
