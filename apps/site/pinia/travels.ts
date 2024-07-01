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

  const addTravel = (travel: Travel) => {
    travels.value.push(travel)
  }

  const updateTravel = (travel: Travel) => {
    const index = travels.value.findIndex(t => t.id === travel.id)
    travels.value[index] = travel
  }

  const removeTravel = (id: string) => {
    travels.value = travels.value.filter(t => t.id !== id)
  }

  return {
    isLoading,
    travels,
    fetchTravels,
    addTravel,
    updateTravel,
    removeTravel
  }
})
