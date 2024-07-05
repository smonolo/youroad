<template>
  <div class="flex items-center gap-x-3">
    <div
      class="bg-yr-brand flex max-h-[34px] min-h-[34px] min-w-[34px] max-w-[34px] items-center justify-center rounded-full font-semibold uppercase text-white"
    >
      {{ initials }}
    </div>
    <div v-if="!reduced" class="flex flex-col">
      <span class="font-medium">{{ user.fullName }}</span>
      <span class="truncate text-sm font-medium text-neutral-700">
        {{ user.email }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import user from '~/data/user.json'

type Props = {
  reduced?: boolean
}

defineComponent({ name: 'Account' })

defineProps<Props>()

const initials = user.fullName
  .split(' ')
  .map(name => name[0])
  .join('')
</script>
