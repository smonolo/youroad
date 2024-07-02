<template>
  <div class="flex items-center gap-x-2">
    <div
      v-for="step in 3"
      :key="step"
      class="flex items-center gap-x-2"
      :class="step === 3 ? 'w-fit' : 'w-full'"
    >
      <div
        class="flex min-h-[24px] min-w-[24px] items-center justify-center rounded-full font-medium"
        :class="
          currentStep >= step ? 'bg-yr-brand text-white' : 'bg-neutral-200'
        "
      >
        {{ step }}
      </div>
      <div
        v-if="step !== 3"
        class="h-1 w-full rounded"
        :class="currentStep > step ? 'bg-yr-brand' : 'bg-neutral-200'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  currentStep: number
}

defineComponent({ name: 'BookingFormStepper' })

defineProps<Props>()
</script>
