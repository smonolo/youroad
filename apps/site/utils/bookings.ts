import type {
  Booking,
  BookingCustomerGender,
  BookingPaymentMethod,
  FormattedBooking
} from '~/types/bookings'

const genders: Record<BookingCustomerGender, string> = {
  male: 'Male',
  female: 'Female',
  other: 'Other'
}

const paymentMethods: Record<BookingPaymentMethod, string> = {
  creditCard: 'Credit Card',
  paypal: 'PayPal',
  revolut: 'Revolut',
  bankTransfer: 'Bank Transfer',
  other: 'Other'
}

/**
 * Parse an API booking to an internal object
 *
 * @param {Booking} booking The API booking to parse
 * @returns {Booking} The parsed booking to use internally
 */
export const parseBooking = (booking: Booking): Booking => booking

/**
 * Parse an internal booking to an API object
 *
 * @param {Booking} booking The internal booking to parse
 * @returns {Booking} The parsed booking to send to the API
 */
export const writeBooking = (booking: Partial<Booking>): Partial<Booking> => {
  const { travel: _, ...rest } = booking

  return rest
}

/**
 * Format an API or internal booking to a human-friendly object
 *
 * @param {Booking} booking The API or internal booking to format
 * @returns {FormattedBooking} The formatted booking to display
 */
export const formatBooking = (booking: Booking): FormattedBooking => ({
  ...booking,
  customer_gender: genders[booking.customer_gender],
  payment_method: paymentMethods[booking.payment_method]
})
