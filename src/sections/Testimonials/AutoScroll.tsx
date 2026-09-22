'use client'

import {Box, keyframes} from '@mui/material'
import {BoxProps} from '@mui/material/Box'

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`

const scrollY = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
`

export function AutoScroll({
  sx,
  direction,
  ...props
}: BoxProps & {
  direction: 'X' | 'Y'
}) {
  const isX = direction === 'X'

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isX ? 'row' : 'column',
        gap: 1,
        animation: `${isX ? scrollX : scrollY} 125s linear infinite`,
        ...sx,
      }}
      {...props}
    />
  )
}