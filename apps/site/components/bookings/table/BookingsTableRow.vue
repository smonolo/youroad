<template>
  <tr>
    <td v-for="(cell, key) in cells" :key>{{ cell }}</td>
    <td>
      <button
        class="text-yr-brand hover:text-yr-brand/80 font-medium underline-offset-2 transition-colors hover:underline"
        @click="showTravel"
      >
        {{ formatted.travel.name }}
      </button>
    </td>
    <td>
      <TableActions :="actions" />
    </td>
  </tr>
</template>

<script setup lang="ts">
import TableActions from '~/components/shared/table/TableActions.vue'
import { useBookingsStore } from '~/pinia/bookings'
import { useTravelsStore } from '~/pinia/travels'
import { useUiStore } from '~/pinia/ui'
import type { Booking } from '~/types/bookings'
import { formatBooking } from '~/utils/bookings'

type Props = {
  booking: Booking
}

defineComponent({ name: 'BookingsTableRow' })

const props = defineProps<Props>()

const bookingsStore = useBookingsStore()
const travelsStore = useTravelsStore()
const uiStore = useUiStore()

const formatted = computed(() => formatBooking(props.booking))

const cells = computed(() => [
  `${formatted.value.customer_first_name} ${formatted.value.customer_last_name}`,
  formatted.value.customer_email,
  formatted.value.customer_phone,
  formatted.value.customer_age,
  formatted.value.customer_gender,
  formatted.value.payment_method
])

const actions = {
  show: () => {
    bookingsStore.selectBooking(props.booking.id)
    uiStore.openModal('booking-show')
  },
  edit: () => {
    bookingsStore.selectBooking(props.booking.id)
    uiStore.openModal('booking-form')
  },
  remove: () => bookingsStore.deleteBooking(props.booking.id)
}

const showTravel = () => {
  travelsStore.selectTravel(props.booking.travel_id)
  uiStore.openModal('travel-show')
}
</script>
