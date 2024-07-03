<template>
  <div>
    <div class="flex flex-col gap-3 md:flex-row">
      <input
        v-model="clonedState.customer_first_name"
        type="text"
        class="input"
        placeholder="First name"
        required
        :disabled="isLoading"
      />
      <input
        v-model="clonedState.customer_last_name"
        type="text"
        class="input"
        placeholder="Last name"
        required
        :disabled="isLoading"
      />
    </div>
    <div class="mt-3 flex flex-col gap-3 md:flex-row">
      <input
        v-model="clonedState.customer_email"
        type="email"
        class="input"
        placeholder="Email address"
        required
        :disabled="isLoading"
      />
      <input
        v-model="clonedState.customer_phone"
        type="text"
        class="input"
        placeholder="Phone number"
        required
        :disabled="isLoading"
      />
    </div>
    <div class="mt-3 flex flex-col gap-3 md:flex-row">
      <input
        v-model="clonedState.customer_age"
        type="number"
        class="input"
        placeholder="Age"
        required
        :disabled="isLoading"
      />
      <select
        v-model="clonedState.customer_gender"
        class="input"
        required
        :disabled="isLoading"
      >
        <option :value="undefined" disabled selected>Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
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

defineComponent({ name: 'BookingFormCustomerStep' })

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const clonedState = ref<Partial<Booking>>({ ...props.state })

watch(
  clonedState,
  state => {
    emit('update:state', state)
  },
  {
    deep: true
  }
)
</script>
