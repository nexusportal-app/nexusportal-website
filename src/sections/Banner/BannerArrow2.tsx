import {Box, SxProps} from '@mui/material'

export function BannerKeyLink2() {
  return (
    <Box sx={{display: 'flex', gap: '4px', px: '5px'}}>
      <BannerArrow2 sx={{animationDelay: '0s'}} />
      <BannerArrow2 sx={{animationDelay: '.2s', display: {xs: 'none', sm: 'block', md: 'block'}}} />
      <BannerArrow2 sx={{animationDelay: '.4s', display: {xs: 'none', sm: 'none', md: 'block'}}} />
      <BannerArrow2 sx={{animationDelay: '.6s', display: {xs: 'none', sm: 'block', md: 'block', lg: 'block'}}} />
    </Box>
  )
}

const BannerArrow2 = ({sx}: {sx?: SxProps}) => {
  return (
    <Box sx={{
      height: 3,
      width: 3,
      borderRadius: 4,
      opacity: .3,
      animation: 'reveal 3s ease-out infinite',
      background: 'rgba(255, 255, 255, 1)',
      ...sx,
    }} />
  )
}