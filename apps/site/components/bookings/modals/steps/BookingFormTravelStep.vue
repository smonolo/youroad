<template>
  <div>
    <BookingFormTravelSelector
      :state
      :isLoading
      @update:selected-travel-id="updateSelectedTravelId"
    />
  </div>
</template>

<script setup lang="ts">
import type { Booking } from '~/types/bookings'
import BookingFormTravelSelector from './BookingFormTravelSelector.vue'

type Props = {
  state: Partial<Booking>
  isLoading: boolean
}

type Emits = {
  'update:state': [value: Partial<Booking>]
}

defineComponent({ name: 'BookingFormTravelStep' })

defineProps<Props>()

const emit = defineEmits<Emits>()

const updateSelectedTravelId = (value: string) => {
  emit('update:state', { travel_id: value })
}
</script>
