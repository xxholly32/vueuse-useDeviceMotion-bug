<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useDeviceMotion } from '@vueuse/core'

const motion = reactive(useDeviceMotion())
const text = computed(() => JSON.stringify(motion, null, 2))
</script>

<template>
  <h1 class="mb-2">
    vueuse demo:
  </h1>
  <pre lang="json">{{ text }}</pre>
</template>
