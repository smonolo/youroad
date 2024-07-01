<template>
  <Modal :open @update:open="updateOpen">
    <div class="p-6">
      <h1 class="text-2xl font-semibold">{{ modeText }}</h1>
      <div class="mt-3">
        <BookingFormStepper :currentStep />
      </div>
      <div class="mt-4">
        <form @submit.prevent="submit">
          <component
            :is="components[currentStep - 1]"
            :state
            :isLoading
            @update:state="updateState($event as Partial<Booking>)"
          />
        </form>
      </div>
      <div class="mt-4 flex items-center justify-between">
        <button
          class="button"
          @click="updateStep(-1)"
          :disabled="isLoading || currentStep === 1"
        >
          Previous
        </button>
        <button class="button" @click="updateStep(1)" :disabled="isLoading">
          {{ currentStep === 3 ? modeText : 'Next' }}
        </button>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '~/components/ui/Modal.vue'
import type { Booking } from '~/types/bookings'
import BookingFormStepper from '~/components/bookings/modals/steps/BookingFormStepper.vue'
import { useBookingsStore } from '~/pinia/bookings'
import BookingFormTravelStep from '~/components/bookings/modals/steps/BookingFormTravelStep.vue'
import BookingFormCustomerStep from '~/components/bookings/modals/steps/BookingFormCustomerStep.vue'
import BookingFormPaymentStep from '~/components/bookings/modals/steps/BookingFormPaymentStep.vue'

type Props = {
  open: boolean
  booking?: Booking
}

type Emits = {
  'update:open': [value: boolean]
}

defineComponent({ name: 'BookingFormModal' })

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const { $api } = useNuxtApp()
const bookingsStore = useBookingsStore()

const state = ref<Partial<Booking>>({ ...props.booking } ?? {})
const isLoading = ref<boolean>(false)
const currentStep = ref<number>(1)

const modeText = computed(() => (!!props.booking ? 'Edit' : 'Create'))

const components = [
  BookingFormTravelStep,
  BookingFormCustomerStep,
  BookingFormPaymentStep
]

watch(
  () => props.booking,
  booking => {
    state.value = { ...booking } ?? {}
  }
)

const updateStep = (step: number) => {
  const newStep = currentStep.value + step

  if (newStep > 3) {
    submit()
  } else {
    currentStep.value = newStep
  }
}

const updateState = (value: Partial<Booking>) => {
  state.value = { ...state.value, ...value }
}

const submit = async () => {
  isLoading.value = true

  const written = writeBooking(state.value)

  if (!!props.booking) {
    const response = await $api.updateBooking(props.booking.id, written)

    bookingsStore.updateBooking(response)
  } else {
    const response = await $api.createBooking(written)

    bookingsStore.addBooking(response)
  }

  isLoading.value = false
  state.value = {}
  currentStep.value = 1

  emit('update:open', false)
}

const updateOpen = (value: boolean) => {
  state.value = {}
  currentStep.value = 1

  emit('update:open', value)
}
</script>
