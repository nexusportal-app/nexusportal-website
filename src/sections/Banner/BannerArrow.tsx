import ArrowRight from '@mui/icons-material/ChevronRight'
import {SxProps} from '@mui/material'

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