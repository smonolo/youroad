<template>
  <div>
    <Popover v-if="!!travel.bookings.length">
      <template #trigger="trigger">
        <button
          :="trigger.props"
          class="hover:text-yr-brand/80 text-yr-brand font-medium underline-offset-2 transition-colors hover:underline"
        >
          {{ travel.bookings.length }}
          booking{{ travel.bookings.length > 1 ? 's' : '' }}
        </button>
      </template>
      <div>
        <ul class="[&>li:first-child]:rounded-t-lg">
          <li
            v-for="(booking, key) in travel.bookings
              .slice(0, 4)
              .map(formatBooking)"
            :key
            class="flex cursor-pointer flex-col justify-between gap-x-10 border-b border-neutral-200 px-2 py-2 transition-colors hover:bg-neutral-100 md:flex-row md:items-center"
            @click="showBooking(booking.id)"
          >
            <span class="block font-medium">
              {{ booking.customer_first_name }}
              {{ booking.customer_last_name }}
            </span>
            <span class="block">
              {{ booking.customer_email }}
            </span>
          </li>
        </ul>
        <NuxtLink
          to="/bookings"
          class="text-yr-brand hover:text-yr-brand/80 m-2 mt-4 block w-fit font-medium underline-offset-2 transition-colors hover:underline"
        >
          See all bookings
        </NuxtLink>
      </div>
    </Popover>
    <p v-else>No bookings</p>
  </div>
</template>

<script setup lang="ts">
import Popover from '~/components/ui/Popover.vue'
import { useBookingsStore } from '~/pinia/bookings'
import { useUiStore } from '~/pinia/ui'
import type { Travel } from '~/types/travels'
import { formatBooking } from '~/utils/bookings'

type Props = {
  travel: Travel
}

defineComponent({ name: 'TravelsTableBookings' })

defineProps<Props>()

const bookingsStore = useBookingsStore()
const uiStore = useUiStore()

const showBooking = (id: string) => {
  bookingsStore.selectBooking(id)
  uiStore.openModal('booking-show')
}
</script>
