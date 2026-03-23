import {appConf} from '@/core/conf'
import LinkedIn from '@mui/icons-material/LinkedIn'
import GitHub from '@mui/icons-material/GitHub'
import {Box} from '@mui/material'
import {m} from '@/core/i18n'
import {BoxProps} from '@mui/material/Box'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 1,
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'row'},
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 1,
        maxWidth: 800,
        width: '100%',
        margin: 'auto',
        mt: 2,
        color: 'text.disabled',
        fontSize: '0.874em',

        '& a': {
          transition: 'all 200ms ease',
        },
        '& a:hover': {
          color: 'primary.dark',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: {xs: 'center', sm: 'flex-start'},
          gap: 1,
          textAlign: {xs: 'center', sm: 'left'},

          '& a': {
            fontWeight: 500,
          },
        }}
      >
        <Box sx={{opacity: .7}}>© 2026 {m.title}</Box>
        <Separator />
        <Link href="/contact">{m.contact}</Link>
        <Separator />
        <Link href="/privacy">{m.privacyPolicy}</Link>
        <Separator />
        <Link href="/terms-of-service">{m.termOfService}</Link>
        <Separator />
        <Link href="/pricing">{m.pricing}</Link>
        <Separator />
        <Link href="/blog">{m.blog}</Link>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 1,
          justifyContent: 'center',
        }}
      >
        <Box sx={{display: 'contents'}} component="a" target="_blank" href={appConf.repoUrl}>
          <GitHub />
        </Box>
        <Box sx={{display: 'contents'}} component="a" target="_blank" href={appConf.linkedInUrl}>
          <LinkedIn />
        </Box>
      </Box>
    </Box>
  )
}

const Separator = (props: BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        display: {xs: 'none', sm: 'inline'},
      }}
    >
      •
    </Box>
  )
}