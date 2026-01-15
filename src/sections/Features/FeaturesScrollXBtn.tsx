'use client'
import {ButtonBase, IconButtonProps, useTheme} from '@mui/material'
// import ArrowRight from '@mui/icons-material/ChevronRight'
// import ArrowLeft from '@mui/icons-material/ChevronLeft'
import ArrowRight from '@mui/icons-material/ArrowForward'
import ArrowLeft from '@mui/icons-material/ArrowBack'
import {useEffect, useState} from 'react'

// Lazy cached container
let cachedContainer: HTMLElement | null = null
const getContainer = () => {
  if (cachedContainer) return cachedContainer
  cachedContainer = document.querySelector<HTMLElement>('#Features-container')
  return cachedContainer
}

export const FeaturesScrollXBtn = ({sx, direction, ...props}: IconButtonProps & {
  direction: 'left' | 'right'
}) => {
  const theme = useTheme()
  const [hide, setHide] = useState(false)

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
  }, [direction])

  return (
    <ButtonBase
      disabled={hide} // disable instead of hiding completely
      onClick={() => {
        const container = getContainer()
        if (!container) return

        const scrollAmount = container.clientWidth * (direction === 'left' ? -1 : 1)
        container.scrollBy({left: scrollAmount, behavior: 'smooth'})
      }}
      sx={{
        ...sx,
        p: .25,
        borderRadius: '50%',
        color: 'primary.light',
        opacity: hide ? .3 : 1,
        transition: 'all 0.3s',
      }}
      {...props}
    >
      {direction === 'right' ? <ArrowRight /> : <ArrowLeft />}
    </ButtonBase>
  )
}
