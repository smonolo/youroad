import moment from 'moment'
import type { FormattedTravel, Travel } from '~/types/travels'

export const parseTravel = (travel: Travel): Travel => ({
  ...travel,
  start_date: moment(travel.start_date).format('YYYY-MM-DD'),
  end_date: moment(travel.end_date).format('YYYY-MM-DD')
})

export const writeTravel = (travel: Partial<Travel>): Partial<Travel> => ({
  ...travel,
  start_date: moment(travel.start_date).toISOString(),
  end_date: moment(travel.end_date).toISOString()
})

export const formatTravel = (travel: Travel): FormattedTravel => ({
  ...travel,
  start_date: moment(travel.start_date).format('MMMM DD, YYYY'),
  end_date: moment(travel.end_date).format('MMMM DD, YYYY'),
  price_per_person: Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR'
  }).format(travel.price_per_person)
})
