<template>
  <Modal name="travel-form" @update:close="onModalClose">
    <div class="p-8">
      <h1 class="text-2xl font-semibold">{{ modeText }} Travel</h1>
      <div class="mt-4">
        <form @submit.prevent="submit">
          <input
            v-model="state.name"
            type="text"
            class="input"
            placeholder="Name"
            required
            :disabled="isLoading"
          />
          <div class="mt-3 flex flex-col gap-3 md:flex-row">
            <input
              v-model="state.start_date"
              type="date"
              class="input"
              placeholder="Start date"
              required
              :disabled="isLoading"
            />
            <input
              v-model="state.end_date"
              type="date"
              class="input"
              placeholder="End date"
              required
              :disabled="isLoading"
            />
          </div>
          <div class="mt-3">
            <input
              v-model="state.picture"
              type="text"
              class="input"
              placeholder="Picture URL"
              required
              :disabled="isLoading"
            />
          </div>
          <div class="mt-3">
            <textarea
              v-model="state.description"
              class="input"
              placeholder="Description"
              :rows="3"
              required
              :disabled="isLoading"
            />
          </div>
          <div class="mt-3 flex flex-col gap-3 md:flex-row">
            <input
              v-model="state.price_per_person"
              type="number"
              class="input"
              placeholder="Price per person"
              required
              :disabled="isLoading"
              :min="0"
            />
            <TravelRatingInput v-model="state.average_rating" />
          </div>
          <div class="mt-5 flex items-center justify-end gap-x-3">
            <p v-if="!!error" class="text-sm font-medium text-red-500">
              {{ error }}
            </p>
            <button class="button" :disabled="isLoading">{{ modeText }}</button>
          </div>
        </form>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import type { Travel } from '~/types/travels'
import Modal from '~/components/ui/Modal.vue'
import { useTravelsStore } from '~/pinia/travels'
import { writeTravel } from '~/utils/travels'
import { travelSchema } from '~/validations/travels'
import { ValidationError } from 'yup'
import TravelRatingInput from '~/components/travels/rating/TravelRatingInput.vue'
import { useUiStore } from '~/pinia/ui'

defineComponent({ name: 'TravelFormModal' })

const travelsStore = useTravelsStore()
const uiStore = useUiStore()

const travel = computed(() => travelsStore.getSelectedTravel)

const state = ref<Partial<Travel>>({ ...travel.value })
const isLoading = ref<boolean>(false)
const error = ref<string>('')

const modeText = computed(() => (!!travel.value ? 'Edit' : 'Create'))

watch(
  () => travel.value,
  travel => {
    state.value = { ...travel }
  }
)

const submit = async () => {
  error.value = ''
  isLoading.value = true

  try {
    await travelSchema.validate(state.value)
  } catch (err) {
    // Catch validation errors, format and display them to the user
    if (err instanceof ValidationError) {
      error.value = formatValidationError(err.message, 'travel')
      isLoading.value = false
      return
    }
  }

  const written = writeTravel(state.value)

  if (!!travel.value) {
    travelsStore.updateTravel(travel.value.id, written)
  } else {
    travelsStore.createTravel(written)
  }

  isLoading.value = false
  state.value = {}

  uiStore.closeModal()
  travelsStore.selectTravel()
}

const onModalClose = () => {
  state.value = {}

  travelsStore.selectTravel()
}
</script>
