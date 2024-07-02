<template>
  <div class="flex items-center gap-x-3">
    <button @click="show">
      <i class="bi bi-eye-fill text-neutral-800" />
    </button>
    <button @click="edit">
      <i class="bi bi-pencil-fill text-blue-500" />
    </button>
    <button @click="remove">
      <i class="bi bi-trash-fill text-red-500" />
    </button>
  </div>
</template>

<script setup lang="ts">
type Props = {
  show: () => void
  edit: () => void
  remove: () => void
}

defineComponent({ name: 'TableActions' })

defineProps<Props>()
</script>
