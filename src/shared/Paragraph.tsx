import {BoxProps} from '@mui/material/Box'
import {Box} from '@mui/material'

export const Paragraph = ({sx, alt, size, animate, ...props}: BoxProps & {animate?: boolean; alt?: boolean, size?: 'big'}) => {
  return (
    <Box component="p" sx={{
      fontSize: size === 'big' ? {xs: '1.2rem', sm: '1.3rem', md: '1.4rem'} : '1.1rem',
      // color: 'palette.text.secondary',
      textWrap: 'balance',
      m: 0,
      mb: 1,
      ...animate ? {
        animationName: 'paragraph',
        animationDuration: '1s',
        animationTimingFunction: 'ease-out',
        animationFillMode: 'forwards',
        animationTimeline: 'view()',
      } : {},
      ...alt ? {
        fontWeight: 500,
        color: '#86868b',
        'b': {
          fontWeight: 500,
          color: '#000',
        },
      } : {},
      ...sx,
    }} {...props} />
  )
}