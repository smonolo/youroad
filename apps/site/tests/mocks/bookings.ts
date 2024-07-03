import type { Booking } from '~/types/bookings'
import { createTravelMock } from './travels'

/**
 * Create a mock booking object that accepts overrides and can be used in tests.
 *
 * @param {Partial<Booking>} overrides The optional overrides.
 * @returns {Booking} The mock booking object.
 */
export const createBookingMock = (overrides?: Partial<Booking>): Booking => ({
  id: 'booking-id',
  created_at: '2024-01-01T00:00:00Z',
  travel_id: 'test-travel-id',
  customer_first_name: 'John',
  customer_last_name: 'Doe',
  customer_email: 'john.doe@example.com',
  customer_phone: '+1234567890',
  customer_age: 30,
  customer_gender: 'male',
  payment_method: 'creditCard',
  internal_notes: 'Test notes',
  travel: createTravelMock(),
  ...overrides
})
