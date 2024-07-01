import type { Booking } from '~/types/bookings'

const genders: Record<string, string> = {
  male: 'Male',
  female: 'Female',
  other: 'Other'
}

const paymentMethods: Record<string, string> = {
  creditCard: 'Credit Card',
  paypal: 'PayPal',
  revolut: 'Revolut',
  bankTransfer: 'Bank Transfer',
  other: 'Other'
}

export const parseBooking = (booking: Booking): Booking => booking

export const writeBooking = (booking: Partial<Booking>): Partial<Booking> =>
  booking

export const formatBooking = (booking: Booking): Booking => ({
  ...booking,
  customer_gender: genders[booking.customer_gender],
  payment_method: paymentMethods[booking.payment_method]
})
