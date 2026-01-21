import ArrowRight from '@mui/icons-material/ChevronRight'
import {Box, SxProps} from '@mui/material'

function BannerKeyLink() {
  return (
    <Box sx={{display: {sm: 'none', md: 'block'}}}>
      <BannerArrow sx={{animationDelay: '0s'}} />
      <BannerArrow sx={{display: {xs: 'none', sm: 'none', md: 'none', lg: 'inline'}, ml: -1, animationDelay: '.3s'}} />
    </Box>
  )
}

export const BannerArrow = ({sx}: {sx?: SxProps}) => {
  return (
    <ArrowRight sx={{
      opacity: .3,
      animation: 'reveal 2.8s ease-out infinite',
      color: 'rgba(255, 255, 255, 1)',
      ...sx,
    }} />
  )
}