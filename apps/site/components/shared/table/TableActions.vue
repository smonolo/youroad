<template>
  <div class="flex justify-end">
    <Popover click-close>
      <template #trigger="trigger">
        <button
          :="trigger.props"
          class="flex h-[25px] w-[25px] items-center justify-center rounded-md transition-colors hover:bg-neutral-100"
        >
          <i class="bi bi-three-dots" />
        </button>
      </template>
      <div class="flex w-[100px] flex-col gap-y-1">
        <button
          v-for="(item, key) in items"
          :key
          class="flex items-baseline gap-x-2 rounded-md px-2 py-1 transition-colors hover:bg-neutral-200/50"
          @click="item.action"
        >
          <i class="bi text-sm" :class="item.icon" />
          <span class="font-medium">{{ item.label }}</span>
        </button>
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import Popover from '~/components/ui/Popover.vue'

type Props = {
  show: () => void
  edit: () => void
  remove: () => void
}

defineComponent({ name: 'TableActions' })

const props = defineProps<Props>()

const items = [
  {
    icon: 'bi-eye',
    label: 'Show',
    action: props.show
  },
  {
    icon: 'bi-pencil',
    label: 'Edit',
    action: props.edit
  },
  {
    icon: 'bi-trash',
    label: 'Delete',
    action: () => {
      if (confirm('Are you sure you want to delete this item?')) {
        props.remove()
      }
    }
  }
]
</script>
