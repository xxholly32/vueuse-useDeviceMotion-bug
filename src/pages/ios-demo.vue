<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useDeviceMotionV2 } from '~/composables/useDeviceMotionV2.ts'

const { acceleration, trigger } = useDeviceMotionV2()
</script>

<template>
  <h1 class="mb-2">
    ios demo:
  </h1>

  <button btn @click="trigger">
    ios need to click to trigger
  </button>
  <p>{{ acceleration.x }}</p>
  <p>{{ acceleration.y }}</p>
  <p>{{ acceleration.z }}</p>
</template>
