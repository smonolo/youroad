<template>
  <div class="flex flex-col items-center justify-between gap-2 md:flex-row">
    <h1 class="text-xl font-semibold capitalize lg:text-2xl">
      Manage {{ entity }}
    </h1>
    <div v-if="showFilters" class="flex w-fit items-center gap-x-2">
      <input
        v-model="clonedQuery"
        class="input w-[350px] lg:w-[400px]"
        :placeholder="`Search ${entity}...`"
      />
      <slot name="filters" />
    </div>
    <button
      class="button flex items-center gap-x-1"
      @click="$emit('update:openModal')"
    >
      <span>Create</span>
      <i class="bi bi-plus-lg text-sm" />
    </button>
  </div>
</template>

<script setup lang="ts">
type Props = {
  entity: string
  showFilters: boolean
  query: string
}

type Emits = {
  'update:query': [value: string]
  'update:openModal': []
}

defineComponent({ name: 'ListHeader' })

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const clonedQuery = ref<string>(props.query)

watch(clonedQuery, value => {
  emit('update:query', value)
})
</script>
