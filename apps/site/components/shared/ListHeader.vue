<template>
  <div
    class="grid grid-cols-2 items-center justify-between gap-2 border-b border-neutral-200 px-4 py-3 md:grid-cols-3 lg:px-10 lg:py-5"
  >
    <div class="order-1 flex w-fit items-center gap-x-2">
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
    <div
      class="order-3 col-span-2 flex items-center gap-x-2 md:order-2 md:col-span-1 md:justify-center"
    >
      <template v-if="!!entitiesAmount">
        <input
          v-model="search"
          class="input w-full md:min-w-[200px] lg:w-[400px]"
          :placeholder="`Search ${entity}...`"
        />
        <slot name="actions" />
      </template>
    </div>
    <div class="order-2 flex items-center justify-end md:order-3">
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
