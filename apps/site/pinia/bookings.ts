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

  const addBooking = (booking: Booking) => {
    bookings.value.push(booking)
  }

  const updateBooking = (booking: Booking) => {
    const index = bookings.value.findIndex(t => t.id === booking.id)
    bookings.value[index] = booking
  }

  const removeBooking = (id: string) => {
    bookings.value = bookings.value.filter(t => t.id !== id)
  }

  return {
    isLoading,
    bookings,
    fetchBookings,
    addBooking,
    updateBooking,
    removeBooking
  }
})
