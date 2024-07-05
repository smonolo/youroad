<template>
  <div class="input flex w-fit items-center justify-between gap-x-3">
    <span class="block font-medium text-neutral-500/80">Rating</span>
    <div class="flex w-fit items-center gap-x-1">
      <i
        v-for="(_, key) in 5"
        :key
        class="bi bi-star-fill cursor-pointer text-lg"
        :class="
          key < modelValue
            ? 'text-yr-brand'
            : 'text-neutral-300 transition-colors hover:text-neutral-400'
        "
        @click="$emit('update:model-value', key + 1)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  modelValue: number
}

type Emits = {
  'update:model-value': [value: number]
}

defineComponent({ name: 'TravelRatingInput' })

defineProps<Props>()

defineEmits<Emits>()
</script>
