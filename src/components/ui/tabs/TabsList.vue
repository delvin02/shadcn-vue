<script setup lang="ts">
import { TabsList, type TabsListProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<TabsListProps & { class?: string }>()
</script>

<template>
  <TabsList
    v-bind="props"
    :class="
      cn(
        'inline-flex items-center justify-center rounded p-1 text-muted-foreground bg-[rgb(22, 22, 22)] border border-muted-foreground',
        props.class,
      )
    "
  >
    <slot />
  </TabsList>
</template>
