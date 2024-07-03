import { useTravelsStore } from '~/pinia/travels'
import type { Travel } from '~/types/travels'

/**
 * Filter travels by name given a search query.
 *
 * @param {Ref<string>} search The search term provided by the parent component.
 * @returns {ComputedRef<Travel[]>} The filtered travels.
 */
export const useFilteredTravels = (
  search: Ref<string>
): ComputedRef<Travel[]> => {
  const travelsStore = useTravelsStore()

  return computed(() =>
    travelsStore.travels.filter(t =>
      t.name.toLowerCase().includes(search.value.toLowerCase())
    )
  )
}
