import moment from 'moment'
import type { FormattedTravel, Travel } from '~/types/travels'

/**
 * Parse an API travel to an internal object
 *
 * @param {Travel} travel The API travel to parse
 * @returns {Travel} The parsed travel to use internally
 */
export const parseTravel = (travel: Travel): Travel => ({
  ...travel,
  start_date: moment(travel.start_date).format('YYYY-MM-DD'),
  end_date: moment(travel.end_date).format('YYYY-MM-DD')
})

/**
 * Parse an internal travel to an API object
 *
 * @param {Travel} travel The internal travel to parse
 * @returns {Travel} The parsed travel to send to the API
 */
export const writeTravel = (travel: Partial<Travel>): Partial<Travel> => {
  const { bookings: _, ...rest } = travel

  return {
    ...rest,
    start_date: moment(rest.start_date).toISOString(),
    end_date: moment(rest.end_date).toISOString()
  }
}

/**
 * Format an API or internal travel to a human-friendly object
 *
 * @param {Travel} travel The API or internal travel to format
 * @returns {FormattedTravel} The formatted travel to display
 */
export const formatTravel = (travel: Travel): FormattedTravel => ({
  ...travel,
  start_date: moment(travel.start_date).format('MMMM DD, YYYY'),
  end_date: moment(travel.end_date).format('MMMM DD, YYYY'),
  price_per_person: Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR'
  }).format(travel.price_per_person)
})
