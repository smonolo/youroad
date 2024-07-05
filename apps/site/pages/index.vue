<template>
  <section class="p-4 lg:p-10">
    <hgroup>
      <h1 class="text-2xl font-semibold">Welcome, {{ user.fullName }}</h1>
      <p class="font-medium">What do you want to do today?</p>
    </hgroup>
    <div class="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2">
      <HomeTravelsWidget />
      <HomeBookingsWidget />
    </div>
  </section>
</template>

<script setup lang="ts">
import HomeBookingsWidget from '~/components/home/HomeBookingsWidget.vue'
import HomeTravelsWidget from '~/components/home/HomeTravelsWidget.vue'
import user from '~/data/user.json'

defineComponent({ name: 'Home' })

useHead({ title: 'Dashboard - YouRoad Travels Manager' })
</script>
