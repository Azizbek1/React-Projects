import { useState, useEffect } from 'react'

export function useStyle(property, element) {
  const [style, setStyle] = useState(
    getComputedStyle(element).getPropertyValue(property)
  )

  useEffect(() => {
    element.style.setProperty(property, style)
  }, [style])

  return [style, setStyle]
}
