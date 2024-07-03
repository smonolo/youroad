import { useTravelsStore } from '~/pinia/travels'
import type { Travel } from '~/types/travels'

/**
 * Filter travels by name given a search query, and return a list of up to 4 travels
 * including the already selected one if it exists.
 *
 * @param {Ref<string>} search The search term provided by the parent component.
 * @param {string} id The ID of the selected travel.
 * @returns {ComputedRef<Travel[]>} The filtered travels.
 */
export const useSearchFilteredTravels = (
  search: Ref<string>,
  id?: string
): ComputedRef<Travel[]> => {
  const travelsStore = useTravelsStore()

  return computed(() => {
    const selectedTravel = travelsStore.travels.find(t => t.id === id)

    if (!search.value) {
      return selectedTravel
        ? [
            selectedTravel,
            ...travelsStore.travels
              .filter(t => t.id !== selectedTravel.id)
              .slice(0, 3)
          ]
        : travelsStore.travels.slice(0, 4)
    }

    return [
      ...(selectedTravel ? [selectedTravel] : []),
      ...travelsStore.travels.filter(
        travel =>
          travel.name.toLowerCase().includes(search.value.toLowerCase()) &&
          travel.id !== selectedTravel?.id
      )
    ]
  })
}
