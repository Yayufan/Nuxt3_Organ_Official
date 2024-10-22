import { ref, onMounted, onUnmounted } from 'vue'

export function useWindowSize() {
  const width = ref(0)

  function update() {
    width.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', update)
    update()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', update)
  })

  return { width }
}