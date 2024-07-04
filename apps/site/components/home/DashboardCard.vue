<template>
  <div class="w-full rounded-xl bg-neutral-800 p-6 md:p-8 lg:rounded-2xl">
    <h3 class="text-xl font-semibold text-white">{{ title }}</h3>
    <p class="mt-1 text-white">{{ description }}</p>
    <div class="mt-4">
      <NuxtLink :to="url">
        <button class="button">Go to dashboard</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title: string
  description: string
  url: string
}

defineComponent({ name: 'DashboardCard' })

defineProps<Props>()
</script>
