<script setup lang="ts">
const props = defineProps<{
  name: string;
  width: string;
  height?: string;
  prefix?: string;
}>();

const symbolId = props.prefix
  ? `#icon-${props.prefix}-${props.name}`
  : `#icon-${props.name}`;
</script>

<template>
  <svg class="icon" aria-hidden="true" :width="width" :height="height || width">
    <use :href="symbolId" fill="currentColor" />
  </svg>
</template>
