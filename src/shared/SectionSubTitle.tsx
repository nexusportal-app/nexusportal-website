import {BoxProps} from '@mui/material/Box'
import {Box} from '@mui/material'

export const SectionSubTitle = ({sx, ...props}: BoxProps) => {
  return (
    <Box component="h3" sx={{
      fontSize: {xs: '1.8em', sm: '1.5rem'},
      fontWeight: '500',
      textAlign: 'center',
      lineHeight: '1.15',
      mb: {xs: 2, sm: 3},
      ...sx,
    }} {...props} />
  )
}