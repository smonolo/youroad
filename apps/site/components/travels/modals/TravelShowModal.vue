<template>
  <Modal :open @update:open="$emit('update:open', $event)">
    <div class="p-6">
      <NuxtImg
        :src="formattedTravel.picture"
        :alt="formattedTravel.name"
        :draggable="false"
        class="h-[200px] w-full rounded-lg object-cover"
      />
      <div class="mt-3 px-2">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-semibold">{{ formattedTravel.name }}</h1>
          <TravelRating :rating="formattedTravel.average_rating" />
        </div>
        <div class="flex items-center gap-x-1 text-sm font-medium">
          <span>{{ formattedTravel.price_per_person }}/person</span>
          ·
          <span>
            {{ formattedTravel.start_date }} - {{ formattedTravel.end_date }}
          </span>
        </div>
        <p class="mt-4">{{ formattedTravel.description }}</p>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '~/components/ui/Modal.vue'
import type { Travel } from '~/types/travels'
import { formatTravel } from '~/utils/travels'
import TravelRating from '~/components/travels/TravelRating.vue'

type Props = {
  open: boolean
  travel: Travel
}

type Emits = {
  'update:open': [value: boolean]
}

defineComponent({ name: 'TravelShowModal' })

const props = defineProps<Props>()

defineEmits<Emits>()

const formattedTravel = computed(() => formatTravel(props.travel))
</script>
