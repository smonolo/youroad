import type { Booking } from '~/types/bookings'

export type Travel = {
  id: string
  created_at: string
  name: string
  start_date: string
  end_date: string
  picture: string
  description: string
  price_per_person: number
  average_rating: number
  bookings: Booking[]
}

export type FormattedTravel = Omit<Travel, 'price_per_person'> & {
  price_per_person: string
}
