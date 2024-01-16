<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <tr :class="cn('border-b transition-colors text-secondary hover:bg-white/50 data-[state=selected]:bg-primary/30', props.class)">
    <slot />
  </tr>
</template>
