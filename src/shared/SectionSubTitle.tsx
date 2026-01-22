import {BoxProps} from '@mui/material/Box'
import {Box} from '@mui/material'

export const SectionSubTitle = ({sx, ...props}: BoxProps) => {
  return (
    <Box component="h3" sx={{
      fontSize: {xs: '1.5em', sm: '1.6rem'},
      fontWeight: '500',
      textAlign: 'center',
      textWrap: 'balance',
      mb: {xs: 2, sm: 3},
      ...sx,
    }} {...props} />
  )
}