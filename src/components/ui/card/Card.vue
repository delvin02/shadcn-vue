<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div
    :class="
      cn(
        'rounded-2xl  bg-gray-400/15 shadow-sm',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
