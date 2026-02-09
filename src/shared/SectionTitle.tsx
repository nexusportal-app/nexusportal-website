import {Box} from '@mui/material'
import {BoxProps} from '@mui/material/Box'

export const SectionTitle = ({sx, children, ...props}: BoxProps) => {
  return <Box component="h2" sx={{
    fontSize: {xs: '2.2rem', sm: '2.8em'},
    fontWeight: '600',
    textAlign: 'center',
    mb: {xs: 2, sm: 3},
    ...sx,
  }} {...props}>{children}</Box>
}
