<template>
  <div class="flex flex-col items-center justify-between gap-2 md:flex-row">
    <h1 class="text-xl font-semibold lg:text-2xl">{{ title }}</h1>
    <input
      v-if="showSearch"
      v-model="clonedQuery"
      class="input w-[350px] lg:w-[400px]"
      :placeholder="search"
    />
    <button class="button" @click="$emit('update:openModal')">
      {{ button }}
    </button>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string
  showSearch: boolean
  search: string
  query: string
  button: string
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
