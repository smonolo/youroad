<template>
  <div ref="container" class="relative w-fit">
    <slot name="trigger" :props="triggerProps" />
    <Teleport to="body">
      <div
        v-if="open"
        ref="content"
        class="absolute z-10 rounded-lg border border-neutral-200 bg-neutral-50 p-2 shadow-lg"
        :style="popoverStyle"
      >
        <div @click="handleContentClick">
          <slot />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
type Props = {
  clickClose?: boolean
}

defineComponent({ name: 'Popover' })

const props = defineProps<Props>()

const open = ref<boolean>(false)
const container = ref<HTMLDivElement>()
const content = ref<HTMLDivElement>()

const handleClick = (event: MouseEvent) => {
  if (
    open.value &&
    container.value !== event.target &&
    !container.value?.contains(event.target as Node) &&
    !content.value?.contains(event.target as Node)
  ) {
    open.value = false
  }
}

const containerBounding = computed(() =>
  container.value?.getBoundingClientRect()
)

// Place the popover below the trigger element manually as it's being
// teleported to the body, so it's not relative to the parent anymore
const popoverStyle = computed(() => ({
  top: `${(containerBounding.value?.bottom ?? 0) + 5}px`,
  right: `${window.innerWidth - (containerBounding.value?.right ?? 0)}px`
}))

onMounted(() => {
  document.addEventListener('click', handleClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClick)
})

const triggerProps = {
  onClick: () => (open.value = !open.value)
}

const handleContentClick = () => {
  if (props.clickClose) {
    open.value = false
  }
}
</script>
