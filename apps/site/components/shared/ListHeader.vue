<template>
  <div
    class="grid grid-cols-3 items-center justify-between gap-2 border-b border-neutral-200 px-4 py-3 lg:px-10 lg:py-5"
  >
    <div class="flex w-fit items-center gap-x-2">
      <h1 class="text-xl font-semibold capitalize">
        {{ entity }}
      </h1>
      <span
        v-if="!!entitiesAmount"
        class="block rounded-md bg-neutral-800 px-1.5 py-0.5 text-xs font-medium text-white"
      >
        {{ entitiesAmount }}
      </span>
    </div>
    <div class="flex items-center justify-center gap-x-2">
      <template v-if="!!entitiesAmount">
        <input
          v-model="search"
          class="input w-[350px] lg:w-[400px]"
          :placeholder="`Search ${entity}...`"
        />
        <slot name="actions" />
      </template>
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
  entitiesAmount?: number
}

type Emits = {
  'update:openModal': []
}

defineComponent({ name: 'ListHeader' })

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const search = defineModel('search')
</script>
