'use client'

import {Box, Tooltip} from '@mui/material'
import {BoxProps} from '@mui/material/Box'

const style: BoxProps['sx'] = {
  borderRadius: 1,
  px: 1,
  py: .5,
  border: '1px solid',
  minWidth: 200,
  fontWeight: '500',
  fontSize: '1rem',
  borderColor: '#f0f4f9',
  backgroundColor: '#f0f4f9',
  color: 'transparent',
  // boxShadow: 0,

  animationName: 'chipPop',
  animationDuration: '0.6s',
  animationTimingFunction: 'ease-out',
  animationFillMode: 'forwards',
  animationTimeline: 'view()',
}

export const ProblemChip = ({sx, title, children, ...props}: BoxProps) => {
  return (
    <Tooltip arrow title={title && <div dangerouslySetInnerHTML={{__html: title}} />}>
      <Box component="li" {...props} sx={{
        display: {xs: children === '' ? 'none' : 'block', sm: 'block'},
        ...style as any,
        ...sx,
      }}>
        {children === '' ? '-' : children}
      </Box>
    </Tooltip>
  )
}