import { number, object, string } from 'yup'
import type {
  BookingCustomerGender,
  BookingPaymentMethod
} from '~/types/bookings'

export const bookingSchema = object({
  travel_id: string().required(),
  customer_first_name: string().required(),
  customer_last_name: string().required(),
  customer_email: string().required().email(),
  customer_phone: string().required(),
  customer_age: number().required().positive().integer(),
  customer_gender: string<BookingCustomerGender>().required(),
  payment_method: string<BookingPaymentMethod>().required(),
  internal_notes: string().nullable()
})
