// This hook checks for clicks outside of a dropdown when it's expanded

import { useState, useEffect, useRef } from 'react'

export const useComponentVisible = (initialIsVisible: boolean) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible)
  const ref = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = (event: globalThis.MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsComponentVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return { ref, isComponentVisible, setIsComponentVisible }
}
