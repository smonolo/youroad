<template>
  <div class="overflow-hidden rounded-lg">
    <table class="w-full">
      <thead>
        <tr class="bg-neutral-800 text-left text-white">
          <th
            v-for="(header, key) in headers"
            :key
            class="px-4 py-2 font-semibold"
          >
            {{ header }}
          </th>
          <th />
        </tr>
      </thead>
      <tbody
        class="[&>tr:nth-child(even)]:bg-neutral-100 [&>tr:nth-child(odd)]:bg-neutral-50"
      >
        <slot />
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
type Props = {
  headers: string[]
}

defineComponent({ name: 'Table' })

defineProps<Props>()
</script>
