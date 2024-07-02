<template>
  <div
    class="absolute left-0 top-0 h-screen w-screen items-center justify-center bg-neutral-950/80"
    :class="open ? 'flex' : 'hidden'"
    @click="closeModal"
  >
    <div class="relative w-[600px] max-w-[90%] rounded-xl bg-white" @click.stop>
      <div
        class="absolute right-4 top-4 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-white shadow transition-colors hover:bg-neutral-100"
        @click="closeModal"
      >
        <i class="bi bi-x text-2xl" />
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
