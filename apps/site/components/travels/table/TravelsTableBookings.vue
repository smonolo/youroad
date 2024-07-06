<template>
  <div>
    <p v-if="!travel.bookings.length">No bookings</p>
    <Popover v-else>
      <template #trigger="trigger">
        <button :="trigger.props" class="cta-text">
          {{ travel.bookings.length }}
          booking{{ travel.bookings.length > 1 ? 's' : '' }}
        </button>
      </template>
      <div>
        <QuickList :items />
        <NuxtLink to="/bookings" class="cta-text">See all bookings</NuxtLink>
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import QuickList from '~/components/shared/QuickList.vue'
import Popover from '~/components/ui/Popover.vue'
import { useShowBooking } from '~/composables/bookings/useShowBooking'
import type { Travel } from '~/types/travels'
import { formatBooking } from '~/utils/bookings'

type Props = {
  travel: Travel
}

defineComponent({ name: 'TravelsTableBookings' })

const props = defineProps<Props>()

const { showBooking } = useShowBooking()

const items = computed(() =>
  props.travel.bookings
    .slice(0, 4)
    .map(formatBooking)
    .map(booking => ({
      primaryText: `${booking.customer_first_name} ${booking.customer_last_name}`,
      secondaryText: booking.customer_email,
      action: () => showBooking(booking.id)
    }))
)
</script>
