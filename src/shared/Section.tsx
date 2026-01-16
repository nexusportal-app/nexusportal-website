import {BoxProps} from '@mui/material/Box'
import {Box} from '@mui/material'

export const sectionMargin = {xs: 4, sm: 7}

export const Section = ({sx, ...props}: BoxProps) => {
  return <Box component="section" sx={{
    py: 0,
    px: {xs: .5, sm: 2},
    maxWidth: 1290,
    margin: 'auto',
    my: sectionMargin,
    ...sx,
  }} {...props} />
}