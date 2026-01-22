import {BoxProps} from '@mui/material/Box'
import {Box} from '@mui/material'

export const Paragraph = ({sx, size, ...props}: BoxProps & {size?: 'big'}) => {
  return (
    <Box component="p" sx={{
      fontSize: size === 'big' ? {xs: '1.2rem', sm: '1.3rem', md: '1.4rem'} : '1.1rem',
      color: 'palette.text.secondary',
      textWrap: 'balance',
      m: 0,
      mb: 2,
      ...sx,
    }} {...props} />
  )
}