import {Box} from '@mui/material'
import {BoxProps} from '@mui/material/Box'
import {SectionTitle} from '@/shared/SectionTitle'
import {Footer} from '@/sections/Footer/Footer'
import {SectionSubTitle} from '@/shared/SectionSubTitle'

type PageProps = BoxProps & {
  title?: string
  subTitle?: string
  width?: number | 'xs' | 'sm' | 'md' | 'lg' | 'full'
  noAnimation?: boolean
}

function calculatePageWidth(width?: string | number) {
  if (!width) return '100%'
  return typeof width === 'string'
    ? {
      xs: 520,
      sm: 700,
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

export const Page = ({title, noAnimation, subTitle, width, sx, children, ...props}: PageProps) => {
  return (
    <>
      <Box component="main" sx={{
        margin: 'auto',
        pt: 5,
        px: {xs: .5, sm: 1},
        width: '100%',
        flex: 1,
        position: 'relative',
        transition: 'all 0.3s',
        maxWidth: calculatePageWidth(width),
        animation: noAnimation ? undefined : 'pageEnter 220ms ease-out',
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