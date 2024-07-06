import { useTravelsStore } from '~/pinia/travels'
import { useUiStore } from '~/pinia/ui'

export const useShowTravel = () => {
  const travelsStore = useTravelsStore()
  const uiStore = useUiStore()

  const showTravel = (id: string) => {
    travelsStore.selectTravel(id)
    uiStore.openModal('travel-show')
  }

  return { showTravel }
}
