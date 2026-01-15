import {BoxProps} from '@mui/material/Box'
import {Box} from '@mui/material'

export const Paragraph = ({sx, ...props}: BoxProps) => {
  return (
    <Box component="p" sx={{
      fontSize: '1.1rem',
      color: 'palette.text.secondary',
      m: 0,
      mb: 2,
      ...sx,
    }} {...props} />
  )
}