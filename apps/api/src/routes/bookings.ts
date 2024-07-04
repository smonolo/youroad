import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient()

router.get('/', async (_, res) => {
  const bookings = await prisma.booking.findMany({
    include: { travel: true },
    orderBy: { created_at: 'desc' }
  })

  if (!bookings) {
    return res.status(404).json({ error: 'No bookings found' })
  }

  return res.status(200).json(bookings)
})

router.post('/', async (req, res) => {
  try {
    const booking = await prisma.booking.create({
      data: req.body,
      include: { travel: true }
    })

    return res.status(201).json(booking)
  } catch {
    return res.status(500).json({ error: 'Error creating booking' })
  }
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const booking = await prisma.booking.update({
      where: { id },
      data: req.body,
      include: { travel: true }
    })

    return res.status(200).json(booking)
  } catch {
    return res.status(500).json({ error: 'Error updating booking' })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    await prisma.booking.delete({ where: { id }, include: { travel: true } })

    return res.status(204).send()
  } catch {
    return res.status(500).json({ error: 'Error deleting booking' })
  }
})

export default router
