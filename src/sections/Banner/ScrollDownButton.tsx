'use client'
import {IconButton, IconButtonProps} from '@mui/material'
import ArrowCircleDown from '@mui/icons-material/KeyboardArrowDown'

export const ScrollDownButton = ({sx, ...props}: IconButtonProps) => {
  return (
    <IconButton
      color="inherit"
      onClick={() =>
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth',
        })
      }
      sx={{
        ...sx,
        transition: 'all 0.3s',
        border: '1px solid rgba(255, 255, 255, 0.4)',
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover': {
          borderColor: '#fff',
          color: '#fff',
        },
      }}
      {...props}
    >
      <ArrowCircleDown />
    </IconButton>

  )
}