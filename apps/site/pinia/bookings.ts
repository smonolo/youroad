import { defineStore } from 'pinia'
import type { Booking } from '~/types/bookings'

export const useBookingsStore = defineStore('bookings', () => {
  const { $api } = useNuxtApp()

  const isLoading = ref(false)
  const bookings = ref<Booking[]>([])

  const fetchBookings = async () => {
    isLoading.value = true
    bookings.value = await $api.getBookings()
    isLoading.value = false
  }

  return { isLoading, bookings, fetchBookings }
})
