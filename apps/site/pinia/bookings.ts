import { defineStore } from 'pinia'
import type { Booking } from '~/types/bookings'

type FetchBookingsOptions = {
  refresh?: boolean
}

export const useBookingsStore = defineStore('bookings', () => {
  const { $api } = useNuxtApp()

  const isLoading = ref<boolean>(false)
  const bookings = ref<Booking[]>([])
  const selectedBooking = ref<string | undefined>(undefined)
  const hasRequested = ref<boolean>(false)

  const fetchBookings = async (options?: FetchBookingsOptions) => {
    if (!hasRequested.value || options?.refresh) {
      isLoading.value = true
      bookings.value = await $api.getBookings()
      isLoading.value = false
      hasRequested.value = true
    }
  }

  const createBooking = async (booking: Partial<Booking>) => {
    const response = await $api.createBooking(booking)

    bookings.value.push(response)
  }

  const updateBooking = async (id: string, booking: Partial<Booking>) => {
    const response = await $api.updateBooking(id, booking)
    const index = bookings.value.findIndex(t => t.id === response.id)
    bookings.value[index] = response
  }

  const deleteBooking = async (id: string) => {
    await $api.deleteBooking(id)
    bookings.value = bookings.value.filter(t => t.id !== id)
  }

  const selectBooking = (id?: string) => {
    selectedBooking.value = id
  }

  const getSelectedBooking = computed((): Booking | undefined => {
    const selected = bookings.value.find(t => t.id === selectedBooking.value)

    if (!selected) {
      selectedBooking.value = undefined
      return undefined
    }

    return selected
  })

  return {
    isLoading,
    hasRequested,
    bookings,
    fetchBookings,
    createBooking,
    updateBooking,
    deleteBooking,
    selectBooking,
    getSelectedBooking
  }
})
