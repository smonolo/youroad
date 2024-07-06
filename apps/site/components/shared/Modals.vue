<template>
  <BookingFormModal />
  <BookingShowModal />
  <TravelFormModal />
  <TravelShowModal />
</template>

<script setup lang="ts">
import BookingFormModal from '~/components/bookings/modals/BookingFormModal.vue'
import BookingShowModal from '~/components/bookings/modals/show/BookingShowModal.vue'
import TravelFormModal from '~/components/travels/modals/TravelFormModal.vue'
import TravelShowModal from '~/components/travels/modals/TravelShowModal.vue'

defineComponent({ name: 'Modals' })
</script>
