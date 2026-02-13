import {appConf} from '@/core/conf'
import LinkedIn from '@mui/icons-material/LinkedIn'
import GitHub from '@mui/icons-material/GitHub'
import {Box} from '@mui/material'
import {m} from '@/core/i18n'
import {BoxProps} from '@mui/material/Box'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Box component="footer" sx={{
      p: 1,
      position: 'relative',
      display: 'flex',
      flexDirection: {xs: 'column', sm: 'row'},
      gap: {xs: .5, sm: 0},
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: 800,
      width: '100%',
      color: 'text.disabled',
      margin: 'auto',
      fontSize: '0.874em',
      mt: 2,
      '& a': {
        transition: 'all 200ms ease',
      },
      '& a:hover': {
        color: 'primary.dark',
      },
    }}>
      <Box sx={{
        display: 'flex',
        gap: .5,
        'a': {
          fontWeight: 500,
        },
      }}>
        <div>© 2026 {m.title}</div>
        <Separator />
        <Link href="/contact">
          {m.contact}
        </Link>
        <Separator />
        <Link href="/pricing">
          {m.pricing}
        </Link>
      </Box>
      <Box sx={{
        display: 'flex',
        gap: .5,
      }}>
        <Box
          component="a"
          target="_blank"
          sx={{marginLeft: 'auto'}}
          href={appConf.repoUrl}
        >
          <GitHub />
        </Box>
        <Box
          target="_blank"
          component="a"
          href={appConf.linkedInUrl}
        >
          <LinkedIn />
        </Box>
      </Box>
    </Box>
  )
}


const Separator = (props: BoxProps) => {
  return <Box {...props}>•</Box>
}
