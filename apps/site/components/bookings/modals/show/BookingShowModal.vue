<template>
  <Modal :open @update:open="$emit('update:open', $event)">
    <div class="p-6">
      <p v-if="!formattedBooking">Loading booking...</p>
      <div v-else-if="!!formattedBooking && !!formattedTravel">
        <h1 class="text-2xl font-semibold">
          Booking for {{ formattedTravel.name }}
        </h1>
        <div class="mt-4">
          <h3 class="text-xl font-semibold">Travel</h3>
          <div class="mt-2 rounded-lg bg-neutral-100 p-4">
            <h5 class="text-lg font-semibold">{{ formattedTravel.name }}</h5>
            <p class="text-sm font-medium">
              {{ formattedTravel.start_date }} - {{ formattedTravel.end_date }}
            </p>
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-semibold">Customer</h3>
          <div class="mt-2 flex flex-col gap-y-1 rounded-lg bg-neutral-100 p-4">
            <div class="flex flex-col gap-x-10 gap-y-2 md:flex-row">
              <BookingShowModalField label="Full name">
                {{ formattedBooking.customer_first_name }}
                {{ formattedBooking.customer_last_name }}
              </BookingShowModalField>
              <BookingShowModalField label="Email address">
                {{ formattedBooking.customer_email }}
              </BookingShowModalField>
            </div>
            <div class="mt-2 flex flex-col gap-x-10 gap-y-2 md:flex-row">
              <BookingShowModalField label="Phone number">
                {{ formattedBooking.customer_phone }}
              </BookingShowModalField>
              <BookingShowModalField label="Age">
                {{ formattedBooking.customer_age }}
              </BookingShowModalField>
              <BookingShowModalField label="Gender">
                {{ formattedBooking.customer_gender }}
              </BookingShowModalField>
            </div>
          </div>
        </div>
        <div class="mt-4">
          <h3 class="text-xl font-semibold">Payment</h3>
          <div class="mt-2 flex flex-col gap-y-1 rounded-lg bg-neutral-100 p-4">
            <BookingShowModalField label="Payment method">
              {{ formattedBooking.payment_method }}
            </BookingShowModalField>
            <BookingShowModalField
              v-if="!!formattedBooking.internal_notes"
              label="Internal notes"
            >
              {{ formattedBooking.internal_notes }}
            </BookingShowModalField>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '~/components/ui/Modal.vue'
import { formatBooking } from '~/utils/bookings'
import { formatTravel } from '~/utils/travels'
import BookingShowModalField from '~/components/bookings/modals/show/BookingShowModalField.vue'
import { useBookingsStore } from '~/pinia/bookings'

type Props = {
  open: boolean
}

type Emits = {
  'update:open': [value: boolean]
}

defineComponent({ name: 'BookingShowModal' })

defineProps<Props>()

defineEmits<Emits>()

const bookingsStore = useBookingsStore()

const booking = computed(() => bookingsStore.getSelectedBooking)

const formattedBooking = computed(() => {
  if (booking.value) {
    return formatBooking(booking.value)
  }
})

const formattedTravel = computed(() => {
  if (booking.value) {
    return formatTravel(booking.value.travel)
  }
})
</script>
