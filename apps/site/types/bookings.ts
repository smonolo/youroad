import type { Travel } from '~/types/travels'

export type Booking = {
  id: string
  created_at: string
  travel_id: string
  customer_first_name: string
  customer_last_name: string
  customer_email: string
  customer_phone: string
  customer_age: number
  customer_gender: string
  payment_method: string
  internal_notes: string
  travel: Travel
}
