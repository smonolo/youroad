<template>
  <div class="overflow-hidden rounded-lg">
    <table class="w-full">
      <thead>
        <tr class="bg-neutral-800 text-left text-white">
          <th class="px-4 py-2 font-semibold">Full Name</th>
          <th class="px-4 py-2 font-semibold">Email</th>
          <th class="px-4 py-2 font-semibold">Phone</th>
          <th class="px-4 py-2 font-semibold">Age and gender</th>
          <th class="px-4 py-2 font-semibold">Payment method</th>
          <th />
        </tr>
      </thead>
      <tbody
        class="[&>tr:nth-child(even)]:bg-neutral-100 [&>tr:nth-child(odd)]:bg-neutral-50"
      >
        <BookingsTableRow
          v-for="(booking, key) in bookings"
          :key
          :booking
          @update:selected-booking="$emit('update:selectedBooking', $event)"
        />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import type { SelectedTravelPayload } from '~/pages/travels.vue'
import type { Booking } from '~/types/bookings'
import BookingsTableRow from '~/components/bookings/table/BookingsTableRow.vue'

type Props = {
  bookings: Booking[]
}

type Emits = {
  'update:selectedBooking': [payload: SelectedTravelPayload]
}

defineComponent({ name: 'BookingsTable' })

defineProps<Props>()

defineEmits<Emits>()
</script>
