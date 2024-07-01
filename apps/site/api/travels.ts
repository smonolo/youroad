import moment from 'moment'
import type { Travel } from '~/types/travels'

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
