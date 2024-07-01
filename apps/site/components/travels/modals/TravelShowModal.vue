<template>
  <Modal :open @update:open="$emit('update:open', $event)"></Modal>
</template>

<script setup lang="ts">
import Modal from '~/components/ui/Modal.vue'
import type { Travel } from '~/types/travels'

type Props = {
  open: boolean
  travel: Travel
}

type Emits = {
  'update:open': [value: boolean]
}

defineComponent({ name: 'TravelShowModal' })

defineProps<Props>()

defineEmits<Emits>()
</script>
