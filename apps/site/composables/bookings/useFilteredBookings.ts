import { useBookingsStore } from '~/pinia/bookings'
import type { Booking } from '~/types/bookings'

/**
 * Filter bookings by customer email given a search query.
 *
 * @param {Ref<string>} search The search term provided by the parent component.
 * @returns {ComputedRef<Booking[]>} The filtered bookings.
 */
export const useFilteredBookings = (
  search: Ref<string>
): ComputedRef<Booking[]> => {
  const bookingsStore = useBookingsStore()

  return computed(() =>
    bookingsStore.bookings.filter(b =>
      b.customer_email.toLowerCase().includes(search.value.toLowerCase())
    )
  )
}
