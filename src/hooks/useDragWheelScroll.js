import { onMounted, onBeforeUnmount } from 'vue'

export function useDragWheelScroll(elRef) {
  onMounted(() => {
    const el = elRef.value
    if (!el) return

    const wheelHandler = (e) => {
      if (!e.ctrlKey || !el.contains(e.target)) return
      e.preventDefault()
      el.scrollLeft += e.deltaY
    }
    window.addEventListener('wheel', wheelHandler, { passive: false })
    let isPointerDown = false
    let isDragging = false
    let startX = 0
    let startScroll = 0
    const DRAG_THRESHOLD = 4

    const isInteractive = (t) => t.closest('button, a, input, textarea, select, label')

    const onPointerDown = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return
      if (isInteractive(e.target)) return

      isPointerDown = true
      startX = e.clientX
      startScroll = el.scrollLeft
      window.addEventListener('pointermove', onPointerMove)
      window.addEventListener('pointerup', stopDrag)
      window.addEventListener('pointercancel', stopDrag)
    }

    const onPointerMove = (e) => {
      if (!isPointerDown) return

      const r = el.getBoundingClientRect()
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
        stopDrag()
        return
      }

      const dx = e.clientX - startX
      if (!isDragging && Math.abs(dx) < DRAG_THRESHOLD) return

      isDragging = true
      el.classList.add('dragging')
      e.preventDefault()
      el.scrollLeft = startScroll - dx
    }

    const stopDrag = () => {
      if (isDragging) el.classList.remove('dragging')
      isPointerDown = false
      isDragging = false
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', stopDrag)
      window.removeEventListener('pointercancel', stopDrag)
    }

    el.addEventListener('pointerdown', onPointerDown)

    onBeforeUnmount(() => {
      window.removeEventListener('wheel', wheelHandler)
      el.removeEventListener('pointerdown', onPointerDown)
      stopDrag()
    })
  })
}
