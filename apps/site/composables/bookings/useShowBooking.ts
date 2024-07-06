import { useBookingsStore } from '~/pinia/bookings'
import { useUiStore } from '~/pinia/ui'

export const useShowBooking = () => {
  const bookingsStore = useBookingsStore()
  const uiStore = useUiStore()

  const showBooking = (id: string) => {
    bookingsStore.selectBooking(id)
    uiStore.openModal('booking-show')
  }

  return { showBooking }
}
