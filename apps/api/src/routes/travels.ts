import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const router = Router()
const prisma = new PrismaClient()

router.get('/', async (_, res) => {
  const travels = await prisma.travel.findMany({
    orderBy: { created_at: 'desc' },
    include: { bookings: true }
  })

  if (!travels) {
    return res.status(404).json({ error: 'No travels found' })
  }

  return res.status(200).json(travels)
})

router.post('/', async (req, res) => {
  try {
    const travel = await prisma.travel.create({
      data: req.body,
      include: { bookings: true }
    })

    return res.status(201).json(travel)
  } catch {
    return res.status(500).json({ error: 'Error creating travel' })
  }
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const travel = await prisma.travel.update({
      where: { id },
      data: req.body,
      include: { bookings: true }
    })

    return res.status(200).json(travel)
  } catch {
    return res.status(500).json({ error: 'Error updating travel' })
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    await prisma.travel.delete({ where: { id }, include: { bookings: true } })

    return res.status(204).send()
  } catch {
    return res.status(500).json({ error: 'Error deleting travel' })
  }
})

export default router
