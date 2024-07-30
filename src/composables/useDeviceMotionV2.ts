import { onMounted, onUnmounted, ref } from 'vue'

export function useDeviceMotionV2() {
  const acceleration = ref({
    x: 0,
    y: 0,
    z: 0,
  })

  const onDeviceMotion = () => {
    window.addEventListener('devicemotion', (event) => {
      acceleration.value = {
        x: event.acceleration?.x || 0,
        y: event.acceleration?.y || 0,
        z: event.acceleration?.z || 0,
      }
    })
  }
  const trigger = () => {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
        .then((response: string) => {
          if (response === 'granted')
            onDeviceMotion()
        })
        .catch(console.error)
    }
  }
  onMounted(() => {
    onDeviceMotion()
  })

  onUnmounted(() => {
    window.removeEventListener('devicemotion', onDeviceMotion)
  })

  return { acceleration, trigger }
}
