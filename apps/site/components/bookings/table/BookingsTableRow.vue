<template>
  <tr>
    <td v-for="(cell, key) in cells" :key>{{ cell }}</td>
    <td>
      <button class="cta-text" @click.stop="showTravel(booking.travel_id)">
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
import { useShowBooking } from '~/composables/bookings/useShowBooking'
import { useShowTravel } from '~/composables/travels/useShowTravel'
import { useBookingsStore } from '~/pinia/bookings'
import { useUiStore } from '~/pinia/ui'
import type { Booking } from '~/types/bookings'
import { formatBooking } from '~/utils/bookings'

type Props = {
  booking: Booking
}

defineComponent({ name: 'BookingsTableRow' })

const props = defineProps<Props>()

const bookingsStore = useBookingsStore()
const uiStore = useUiStore()
const { showBooking } = useShowBooking()
const { showTravel } = useShowTravel()

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
  show: () => showBooking(props.booking.id),
  edit: () => {
    bookingsStore.selectBooking(props.booking.id)
    uiStore.openModal('booking-form')
  },
  remove: () => bookingsStore.deleteBooking(props.booking.id)
}
</script>
