<template>
  <div
    class="absolute left-0 top-0 h-screen w-screen items-center justify-center bg-neutral-950/80"
    :class="open ? 'flex' : 'hidden'"
    @click="$emit('update:open', false)"
  >
    <div class="w-[600px] rounded-xl bg-white" @click.stop>
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

defineEmits<Emits>()
</script>
