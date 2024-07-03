import type { Travel } from '~/types/travels'

export const createTravelMock = (overrides?: Partial<Travel>): Travel => ({
  id: 'travel-id',
  created_at: '2024-01-01T00:00:00Z',
  name: 'Test travel',
  start_date: '2024-01-01',
  end_date: '2024-01-08',
  picture: 'test.jpg',
  description: 'Test description',
  price_per_person: 100,
  average_rating: 4,
  ...overrides
})
