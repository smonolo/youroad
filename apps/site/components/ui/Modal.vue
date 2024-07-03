<template>
  <div
    class="absolute left-0 top-0 h-screen w-screen items-center justify-center bg-neutral-950/80"
    :class="open ? 'flex' : 'hidden'"
    @click="closeModal"
  >
    <div class="relative w-[600px] max-w-[90%] rounded-xl bg-white" @click.stop>
      <div
        class="absolute right-4 top-4 flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full bg-neutral-800 text-white transition-colors hover:bg-neutral-700"
        @click="closeModal"
      >
        <i class="bi bi-x text-xl" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  open: boolean
}

type Emits = {
  'update:open': [value: boolean]
}

defineComponent({ name: 'Modal' })

defineProps<Props>()

const emit = defineEmits<Emits>()

const closeModal = () => {
  emit('update:open', false)
}
</script>
