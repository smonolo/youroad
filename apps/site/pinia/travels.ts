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

  return { isLoading, travels, fetchTravels }
})
