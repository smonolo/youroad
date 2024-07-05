<template>
  <div class="overflow-x-auto rounded-lg border border-neutral-200">
    <table class="table w-full">
      <thead>
        <tr class="border-b border-neutral-200 bg-neutral-50 text-left">
          <th v-for="(header, key) in headers" :key>
            {{ header }}
          </th>
          <th />
        </tr>
      </thead>
      <tbody
        class="[&>tr:last-child]:border-none [&>tr]:border-b [&>tr]:border-neutral-200"
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
