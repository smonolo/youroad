import bookings from './bookings'
import travels from './travels'

const routes = [
  {
    route: '/bookings',
    handler: bookings
  },
  {
    route: '/travels',
    handler: travels
  }
]

export default routes
