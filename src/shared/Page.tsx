import {Box} from '@mui/material'
import {BoxProps} from '@mui/material/Box'
import {SectionTitle} from '@/shared/SectionTitle'
import {Footer} from '@/sections/Footer/Footer'
import {SectionSubTitle} from '@/shared/SectionSubTitle'

type PageProps = BoxProps & {
  title?: string
  subTitle?: string
  width?: number | 'xxs' | 'xs' | 'md' | 'lg' | 'full'
}

function calculatePageWidth(width?: string | number) {
  if (!width) return '100%'
  return typeof width === 'string'
    ? {
      xxs: 520,
      xs: 780,
      md: 1000,
      lg: 1290,
      full: 3000,
    }[width]
    : width
}

const pageEnter = {
  '@keyframes pageEnter': {
    from: {
      mt: 3,
      // opacity: 0,
      // transform: 'translateY(30px)',
      // filter: 'blur(4px)',
    },
    to: {
      mt: 0,
      // opacity: 1,
      // filter: 'blur(0px)',
      // transform: 'translateY(0)',
    },
  },
}

export const Page = ({title, subTitle, width, sx, children, ...props}: PageProps) => {
  return (
    <>
      <Box sx={{
        margin: 'auto',
        pt: 4,
        px: .5,
        flex: 1,
        position: 'relative',
        transition: 'all 0.3s',
        maxWidth: calculatePageWidth(width),
        animation: 'pageEnter 220ms ease-out',
        animationFillMode: 'both',
        ...pageEnter,
        ...sx,
      }} {...props}>
        {title && <SectionTitle>{title}</SectionTitle>}
        {subTitle && <SectionSubTitle sx={{mt: -2}}>{subTitle}</SectionSubTitle>}

        {children}
      </Box>
      <Footer />
    </>
  )
}