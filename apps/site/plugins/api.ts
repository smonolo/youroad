import type { Travel } from '~/types/travels'
import type { Booking } from '~/types/bookings'
import { parseTravel } from '~/api/travels'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  const api = {
    async getTravels(): Promise<Travel[]> {
      const response = await fetch(`${runtimeConfig.public.apiUrl}/travels`)
      const travels = await response.json()

      return travels.map(parseTravel)
    },
    async createTravel(data: Partial<Travel>): Promise<Travel> {
      const response = await fetch(`${runtimeConfig.public.apiUrl}/travels`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const travel = await response.json()

      return parseTravel(travel)
    },
    async updateTravel(id: string, data: Partial<Travel>): Promise<Travel> {
      const response = await fetch(
        `${runtimeConfig.public.apiUrl}/travels/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )
      const travel = await response.json()

      return parseTravel(travel)
    },
    async deleteTravel(id: string): Promise<void> {
      await fetch(`${runtimeConfig.public.apiUrl}/travels/${id}`, {
        method: 'DELETE'
      })
    },
    async getBookings(): Promise<Booking[]> {
      const response = await fetch(`${runtimeConfig.public.apiUrl}/bookings`)

      return response.json()
    },
    async createBooking(data: Partial<Booking>): Promise<Booking> {
      const response = await fetch(`${runtimeConfig.public.apiUrl}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      return response.json()
    },
    async updateBooking(id: string, data: Partial<Booking>): Promise<Booking> {
      const response = await fetch(
        `${runtimeConfig.public.apiUrl}/bookings/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }
      )

      return response.json()
    },
    async deleteBooking(id: string): Promise<void> {
      await fetch(`${runtimeConfig.public.apiUrl}/bookings/${id}`, {
        method: 'DELETE'
      })
    }
  }

  return {
    provide: { api }
  }
})
