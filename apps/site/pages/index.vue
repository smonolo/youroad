<template>
  <div>
    <hgroup>
      <h1 class="text-2xl font-semibold">Welcome, YouRoad Coordinator</h1>
      <p class="font-medium">What do you want to do today?</p>
    </hgroup>
    <div class="mt-5 grid grid-cols-2 gap-4">
      <DashboardCard v-for="(card, key) in data.cards" :key :="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardCard from '~/components/home/DashboardCard.vue'
import data from '~/data/home.json'

defineComponent({ name: 'Index' })

useHead({ title: 'Dashboard - YouRoad Travels Manager' })
</script>
