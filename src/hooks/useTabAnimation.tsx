import { useEffect, useMemo, useRef } from 'react'

export const useTabAnimation = (values: string[], currentValue: string) => {
  const index = values.indexOf(currentValue)
  const prevIndex = useRef(index)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
    } else {
      prevIndex.current = index
    }
  }, [index])

  const direction = index - prevIndex.current

  const variants = useMemo(
    () => ({
      hidden: firstRender.current
        ? { opacity: 1, x: 0 }
        : direction > 0
        ? { opacity: 0, x: 120 }
        : { opacity: 0, x: -120 },
      visible: { opacity: 1, x: 0 },
      exit: direction > 0 ? { opacity: 0, x: -120 } : { opacity: 0, x: 120 },
    }),
    [direction],
  )

  return variants
}
