<template>
  <div>
    <hgroup>
      <h1 class="text-2xl font-semibold">Welcome, {{ user.fullName }}</h1>
      <p class="font-medium">What do you want to do today?</p>
    </hgroup>
    <div class="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
      <DashboardCard v-for="(card, key) in data.cards" :key :="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardCard from '~/components/home/DashboardCard.vue'
import data from '~/data/home.json'
import user from '~/data/user.json'

defineComponent({ name: 'Home' })

useHead({ title: 'Dashboard - YouRoad Travels Manager' })
</script>
