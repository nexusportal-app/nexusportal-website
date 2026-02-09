'use client'
import {ButtonBase, IconButtonProps} from '@mui/material'
import ArrowRight from '@mui/icons-material/ArrowForward'
import ArrowLeft from '@mui/icons-material/ArrowBack'
import {useEffect, useRef, useState} from 'react'

type Props = IconButtonProps & {
  direction: 'left' | 'right'
  containerId: string
}

export const ScrollXBtn = ({sx, direction, containerId, ...props}: Props) => {
  const containerRef = useRef<HTMLElement | null>(null)
  const [hide, setHide] = useState(false)

  const getContainer = () => {
    if (!containerRef.current) {
      containerRef.current = document.querySelector<HTMLElement>(`#${containerId}`)
    }
    return containerRef.current
  }

  const checkVisibility = () => {
    const container = getContainer()
    if (!container) return

    if (direction === 'right') {
      setHide(container.scrollLeft + container.clientWidth >= container.scrollWidth - 1)
    } else {
      setHide(container.scrollLeft <= 0)
    }
  }

  useEffect(() => {
    checkVisibility()
    const container = getContainer()
    if (!container) return

    container.addEventListener('scroll', checkVisibility)
    window.addEventListener('resize', checkVisibility)

    return () => {
      container.removeEventListener('scroll', checkVisibility)
      window.removeEventListener('resize', checkVisibility)
    }
  }, [direction, containerId])

  return (
    <ButtonBase
      disabled={hide}
      onClick={() => {
        const container = getContainer()
        if (!container) return

        const scrollAmount = container.clientWidth * (direction === 'left' ? -1 : 1)
        container.scrollBy({left: scrollAmount, behavior: 'smooth'})
      }}
      sx={{
        ...sx,
        p: 0.25,
        borderRadius: '50%',
        color: 'primary.light',
        opacity: hide ? 0.3 : 1,
        transition: 'all 0.3s',
      }}
      {...props}
    >
      {direction === 'right' ? <ArrowRight /> : <ArrowLeft />}
    </ButtonBase>
  )
}
