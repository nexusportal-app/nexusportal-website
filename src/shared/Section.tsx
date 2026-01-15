import {BoxProps} from '@mui/material/Box'
import {Box} from '@mui/material'

export const Section = ({sx, ...props}: BoxProps) => {
  return <Box component="section" sx={{
    my: 2,
    py: 2,
    px: {xs: .5, sm: 2},
    maxWidth: 1290,
    margin: 'auto',
    ...sx,
  }} {...props} />
}