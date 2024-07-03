import { describe, expect, it } from 'vitest'
import { createTravelMock } from '../mocks/travels'
import { parseTravel, writeTravel, formatTravel } from '../../utils/travels'
import moment from 'moment'

describe('utils/travels', () => {
  describe('parseTravel', () => {
    it('should parse a travel correctly', () => {
      const result = createTravelMock()

      expect(
        parseTravel(
          createTravelMock({
            start_date: '2024-01-01T00:00:00Z',
            end_date: '2024-01-08T00:00:00Z'
          })
        )
      ).toEqual(result)
    })
  })

  describe('writeTravel', () => {
    it('should write a travel correctly', () => {
      const result = createTravelMock({
        start_date: moment('2024-01-01').toISOString(),
        end_date: moment('2024-01-08').toISOString()
      })

      expect(writeTravel(createTravelMock())).toEqual(result)
    })
  })

  describe('formatTravel', () => {
    it('should format a travel correctly', () => {
      const result = {
        ...createTravelMock(),
        start_date: 'January 01, 2024',
        end_date: 'January 08, 2024',
        price_per_person: Intl.NumberFormat('it-IT', {
          style: 'currency',
          currency: 'EUR'
        }).format(1000)
      }

      expect(
        formatTravel(
          createTravelMock({
            start_date: '2024-01-01T00:00:00Z',
            end_date: '2024-01-08T00:00:00Z',
            price_per_person: 1000
          })
        )
      ).toMatchObject(result)
    })
  })
})
