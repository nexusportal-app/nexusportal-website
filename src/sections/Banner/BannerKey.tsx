import {Box} from '@mui/material'
import {BoxProps} from '@mui/material/Box'
import {ElementType} from 'react'

export const revealKeyframes = {
  '@keyframes reveal': {
    '0%': {opacity: .3},
    '60%': {opacity: 1},
    '100%': {opacity: .3},
  },
}

const magicBorder = {
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    padding: '1.5px', // Slightly thicker for better reflection visibility
    background: `
      conic-gradient(
        from var(--angle),
        transparent 0%,
        rgba(255, 255, 255, 0.1) 10%,
        rgba(255, 255, 255, 0.7) 20%, /* The main 'glint' */
        #fff 25%,                  /* The peak reflection */
        rgba(255, 255, 255, 0.7) 30%,
        rgba(255, 255, 255, 0.1) 40%,
        transparent 50%,
        transparent 70%,
        rgba(255, 255, 255, 0.3) 85%, /* Subtle secondary reflection */
        transparent 100%
      )
    `,
    WebkitMask: `
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0)
    `,
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    pointerEvents: 'none',

    // Scroll Logic
    animation: 'rotate 1s linear both',
    animationDuration: '1ms', // For firefox
    animationTimeline: 'scroll(root)',
    animationRange: '0% 100%',
  },
} as const

export const BannerKey = ({sx, icon: Icon, children, ...props}: BoxProps & {icon: ElementType}) => {
  return (
    <Box sx={{
      py: 1 / 2,
      fontSize: '0.9rem',
      px: 1,
      color: 'rgba(255,255,255,.75)',
      borderRadius: 10,
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      backdropFilter: 'blur(2px)',
      // backgroundColor: 'rgba(255, 255, 255, 0.14)',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      // backgroundColor: 'rgba(0, 0, 0, 0.1)',
      position: 'relative',
      ...magicBorder,
      ...sx,
    }} {...props} >
      <Icon sx={{display: {xs: 'none', sm: 'bloc'}, mr: .5, opacity: .8}} />
      {children}
    </Box>
  )
}