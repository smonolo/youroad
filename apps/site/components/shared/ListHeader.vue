<template>
  <div
    class="grid grid-cols-3 items-center justify-between gap-2 border-b border-neutral-200 px-4 py-3 lg:px-10 lg:py-5"
  >
    <h1 class="text-xl font-semibold capitalize lg:text-2xl">
      {{ entity }}
    </h1>
    <div v-if="showFilters" class="flex items-center justify-center gap-x-2">
      <input
        v-model="search"
        class="input w-[350px] lg:w-[400px]"
        :placeholder="`Search ${entity}...`"
      />
      <slot name="filters" />
    </div>
    <div class="flex items-center justify-end">
      <button
        class="button flex items-baseline gap-x-1"
        @click="$emit('update:openModal')"
      >
        <span>Create</span>
        <i class="bi bi-plus-lg text-sm" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  entity: string
  showFilters: boolean
}

type Emits = {
  'update:openModal': []
}

defineComponent({ name: 'ListHeader' })

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const search = defineModel('search')
</script>
