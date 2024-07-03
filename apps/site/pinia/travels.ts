import { defineStore } from 'pinia'
import type { Travel } from '~/types/travels'

export const useTravelsStore = defineStore('travels', () => {
  const { $api } = useNuxtApp()

  const isLoading = ref(false)
  const travels = ref<Travel[]>([])

  const fetchTravels = async () => {
    isLoading.value = true
    travels.value = await $api.getTravels()
    isLoading.value = false
  }

  const createTravel = async (travel: Partial<Travel>) => {
    const response = await $api.createTravel(travel)

    travels.value.push(response)
  }

  const updateTravel = async (id: string, travel: Partial<Travel>) => {
    const response = await $api.updateTravel(id, travel)
    const index = travels.value.findIndex(t => t.id === response.id)
    travels.value[index] = response
  }

  const deleteTravel = async (id: string) => {
    await $api.deleteTravel(id)
    travels.value = travels.value.filter(t => t.id !== id)
  }

  return {
    isLoading,
    travels,
    fetchTravels,
    createTravel,
    updateTravel,
    deleteTravel
  }
})
