import { number, object, string } from 'yup'

export const travelSchema = object({
  name: string().required(),
  start_date: string().required(),
  end_date: string().required(),
  picture: string().url().required(),
  description: string().required(),
  price_per_person: number().required().positive().integer(),
  average_rating: number().required().positive().integer().max(5)
})
