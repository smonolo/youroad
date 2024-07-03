import { describe, expect, it } from 'vitest'
import { createBookingMock } from '../mocks/bookings'
import { parseBooking, writeBooking, formatBooking } from '../../utils/bookings'

describe('utils/bookings', () => {
  describe('parseBooking', () => {
    it('should parse a booking correctly', () => {
      const result = createBookingMock()

      expect(parseBooking(createBookingMock())).toEqual(result)
    })
  })

  describe('writeBooking', () => {
    it('should write a booking correctly', () => {
      const { travel: _, ...result } = createBookingMock()

      expect(writeBooking(createBookingMock())).toEqual(result)
    })
  })

  describe('formatBooking', () => {
    it('should format a booking correctly', () => {
      const result = {
        ...createBookingMock(),
        customer_gender: 'Male',
        payment_method: 'Credit Card'
      }

      expect(formatBooking(createBookingMock())).toEqual(result)
    })
  })
})
