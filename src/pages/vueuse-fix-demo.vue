<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useDeviceMotion } from '@vueuse/core'

const motion = reactive(useDeviceMotion())
const text = computed(() => JSON.stringify({
  acceleration: {
    x: motion.acceleration.x,
    y: motion.acceleration.y,
    z: motion.acceleration.z,
  },
  accelerationIncludingGravity: {
    x: motion.accelerationIncludingGravity.x,
    y: motion.accelerationIncludingGravity.y,
    z: motion.accelerationIncludingGravity.z,
  },
  rotationRate: {
    alpha: motion.rotationRate.alpha,
    beta: motion.rotationRate.beta,
    gamma: motion.rotationRate.gamma,
  },
  interval: motion.interval,
}, null, 2))
</script>

<template>
  <h1 class="mb-2">
    vueuse fix demo:
  </h1>
  <pre lang="json">{{ text }}</pre>
</template>
