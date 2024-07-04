<template>
  <div class="flex items-center gap-x-2">
    <div
      class="bg-yr-brand flex h-[30px] w-[30px] items-center justify-center rounded-full text-sm font-semibold uppercase text-white"
    >
      {{ initials }}
    </div>
    <p v-if="!reduced" class="font-medium text-white">{{ user.fullName }}</p>
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
