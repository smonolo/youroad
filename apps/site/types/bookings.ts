import type { Travel } from '~/types/travels'

export type BookingCustomerGender = 'male' | 'female' | 'other'

export type BookingPaymentMethod =
  | 'creditCard'
  | 'paypal'
  | 'revolut'
  | 'bankTransfer'
  | 'other'

export type Booking = {
  id: string
  created_at: string
  travel_id: string
  customer_first_name: string
  customer_last_name: string
  customer_email: string
  customer_phone: string
  customer_age: number
  customer_gender: BookingCustomerGender
  payment_method: BookingPaymentMethod
  internal_notes: string
  travel: Travel
}

export type FormattedBooking = Omit<
  Booking,
  'customer_gender' | 'payment_method'
> & {
  customer_gender: string
  payment_method: string
}
