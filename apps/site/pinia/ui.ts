import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const isSidebarOpen = ref<boolean>(false)
  const activeModal = ref<string | undefined>(undefined)

  const toggleSidebar = (open: boolean) => {
    isSidebarOpen.value = open
  }

  const openModal = (name: string) => {
    activeModal.value = name
  }

  const closeModal = () => {
    activeModal.value = undefined
  }

  return {
    isSidebarOpen,
    activeModal,
    toggleSidebar,
    openModal,
    closeModal
  }
})
