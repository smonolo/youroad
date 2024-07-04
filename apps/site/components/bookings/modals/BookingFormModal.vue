<template>
  <Modal :open @update:open="updateOpen">
    <div class="p-6">
      <h1 class="text-2xl font-semibold">{{ modeText }} Booking</h1>
      <div class="mt-4">
        <BookingFormStepper :currentStep />
      </div>
      <div class="mt-5">
        <form @submit.prevent="submit">
          <component
            :is="components[currentStep - 1]"
            :state
            :isLoading
            @update:state="updateState($event as Partial<Booking>)"
          />
        </form>
      </div>
      <div class="mt-5 flex items-center justify-between">
        <button
          class="button"
          @click="updateStep(-1)"
          :disabled="isLoading || currentStep === 1"
        >
          Previous
        </button>
        <p v-if="!!error" class="text-sm font-medium text-red-500">
          {{ error }}
        </p>
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
import { bookingSchema } from '~/validations/bookings'
import { ValidationError } from 'yup'

type Props = {
  open: boolean
}

type Emits = {
  'update:open': [value: boolean]
}

defineComponent({ name: 'BookingFormModal' })

defineProps<Props>()

const emit = defineEmits<Emits>()

const bookingsStore = useBookingsStore()

const booking = computed(() => bookingsStore.getSelectedBooking)

const state = ref<Partial<Booking>>({ ...booking.value })
const isLoading = ref<boolean>(false)
const currentStep = ref<number>(1)
const error = ref<string>('')

const modeText = computed(() => (!!booking.value ? 'Edit' : 'Create'))

// Define a list of step components that will be rendered
// conditionally in the modal using the <component :is> element
const components = [
  BookingFormTravelStep,
  BookingFormCustomerStep,
  BookingFormPaymentStep
]

watch(
  () => booking.value,
  booking => {
    state.value = { ...booking }
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
  error.value = ''
  isLoading.value = true

  try {
    await bookingSchema.validate(state.value)
  } catch (err) {
    // Catch validation errors, format and display them to the user
    if (err instanceof ValidationError) {
      error.value = formatValidationError(err.message, 'booking')
      isLoading.value = false
      return
    }
  }

  const writtenBooking = writeBooking(state.value)

  if (!!booking.value) {
    bookingsStore.updateBooking(booking.value.id, writtenBooking)
  } else {
    bookingsStore.createBooking(writtenBooking)
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
