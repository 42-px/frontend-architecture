import * as React from 'react'

type Callback = () => void

export function useClickOutside<RefT extends HTMLElement>(cb: Callback) {
  const ref = React.useRef<RefT>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (event.target && ref.current && !ref.current.contains(event.target as HTMLLIElement)) {
      cb()
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref }
}
