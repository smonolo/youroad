<template>
  <div
    class="flex h-full w-full flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-6 md:p-8 lg:rounded-2xl"
  >
    <div>
      <h2 class="text-xl font-semibold">{{ title }}</h2>
      <p class="mt-1 text-neutral-700">{{ description }}</p>
      <div class="mt-4">
        <slot />
      </div>
    </div>
    <NuxtLink
      :to="url"
      class="text-yr-brand mt-4 block font-medium underline underline-offset-2"
    >
      View dashboard
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string
  description: string
  url: string
}

defineComponent({ name: 'HomeWidget' })

defineProps<Props>()
</script>
