import { defineStore } from 'pinia'
import type { Travel } from '~/types/travels'

type FetchTravelsOptions = {
  refresh?: boolean
}

export const useTravelsStore = defineStore('travels', () => {
  const { $api } = useNuxtApp()

  const isLoading = ref<boolean>(false)
  const travels = ref<Travel[]>([])
  const selectedTravel = ref<string | undefined>(undefined)
  const hasRequested = ref<boolean>(false)

  const fetchTravels = async (options?: FetchTravelsOptions) => {
    if (!hasRequested.value || options?.refresh) {
      isLoading.value = true
      travels.value = await $api.getTravels()
      isLoading.value = false
      hasRequested.value = true
    }
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

  const selectTravel = (id?: string) => {
    selectedTravel.value = id
  }

  const getSelectedTravel = computed((): Travel | undefined => {
    const selected = travels.value.find(t => t.id === selectedTravel.value)

    if (!selected) {
      selectedTravel.value = undefined
      return undefined
    }

    return selected
  })

  return {
    isLoading,
    hasRequested,
    travels,
    selectedTravel,
    fetchTravels,
    createTravel,
    updateTravel,
    deleteTravel,
    selectTravel,
    getSelectedTravel
  }
})
