import { onMounted, onUnmounted, ref } from 'vue'
import { isIOS } from '@vueuse/core'

export function useDeviceMotionV2() {
  const acceleration = ref({
    x: 0,
    y: 0,
    z: 0,
  })

  const onDeviceMotion = () => {
    window.addEventListener('devicemotion', (event) => {
      acceleration.value = {
        x: event.acceleration?.x,
        y: event.acceleration?.y,
        z: event.acceleration?.z,
      }
    })
  }
  const trigger = () => {
    if (isIOS.value) {
      DeviceMotionEvent.requestPermission()
        .then((response) => {
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
