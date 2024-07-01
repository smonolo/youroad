<template>
  <div>
    <select
      v-model="clonedState.payment_method"
      class="input"
      required
      :disabled="isLoading"
    >
      <option value="creditCard">Credit Card</option>
      <option value="paypal">PayPal</option>
      <option value="revolut">Revolut</option>
      <option value="bankTransfer">Bank Transfer</option>
      <option value="other">Revolut</option>
    </select>
    <div class="mt-3">
      <textarea
        v-model="clonedState.internal_notes"
        class="input"
        placeholder="Internal notes"
        :disabled="isLoading"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Booking } from '~/types/bookings'

type Props = {
  state: Partial<Booking>
  isLoading: boolean
}

type Emits = {
  'update:state': [value: Partial<Booking>]
}

defineComponent({ name: 'BookingFormPaymentStep' })

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const clonedState = ref<Partial<Booking>>({ ...props.state })

watch(
  clonedState,
  state => {
    emit('update:state', state)
  },
  { deep: true }
)
</script>
