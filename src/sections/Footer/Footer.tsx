import {appConf} from '@/core/conf'
import LinkedIn from '@mui/icons-material/LinkedIn'
import GitHub from '@mui/icons-material/GitHub'
import {Box} from '@mui/material'
import {m} from '@/core/i18n'
import {BoxProps} from '@mui/material/Box'
import Link from 'next/link'
import {FooterHealthCheck} from '@/sections/Footer/FooterHealthCheck'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        p: 1,
        display: 'flex',
        flexDirection: {xs: 'column', sm: 'column'},
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
          flexDirection: 'column',
          justifyContent: 'center',
          gap: .5,
          textAlign: 'center',
          // flexDirection: {md: 'column', lg: 'row'},
          // justifyContent: {md: 'center', lg: 'flex-start'},
          // gap: {md: .5, lg: 1},
          // textAlign: {md: 'center', lg: 'left'},

          '& a': {
            fontWeight: 500,
          },
        }}
      >
        <Column>
          <Link href="/blog">{m.blog}</Link>
          <Separator />
          <Link href="/contact">{m.contact}</Link>
          <Separator />
          <Link href="/pricing">{m.pricing}</Link>
        </Column>
        <Column>
          <Link href="/legal">{m.legalNotice}</Link>
          <Separator />
          <Link href="/privacy">{m.privacyPolicy}</Link>
          <Separator />
          <Link href="/terms-of-service">{m.termOfService}</Link>
        </Column>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: {xs: 1, sm: 2},
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={{opacity: .7}}>© 2026 {m.title}</Box>
        <Link href="/status">
          <Box sx={{
            display: 'inline-flex', fontWeight: '500',
            gap: .25, alignItems: 'center',
            border: '1px solid',
            borderColor: 'divider',
            px: .5,
            py: .125,
            borderRadius: 30,
            ':hover': {
              backgroundColor: 'divider',
            },
          }}>
            <FooterHealthCheck /><Box component="span" sx={{mr: .5}}>{m.status}</Box>
          </Box>
        </Link>
        <Box sx={{display: 'contents', marginLeft: 'auto'}} component="a" target="_blank" href={appConf.repoUrl}>
          <GitHub />
        </Box>
        <Box sx={{display: 'contents'}} component="a" target="_blank" href={appConf.linkedInUrl}>
          <LinkedIn />
        </Box>
      </Box>
    </Box>
  )
}

function Column({sx, ...props}: BoxProps) {
  return <Box {...props} sx={{flex: 1, display: 'flex', flexDirection: 'row', gap: .5, ...sx}} />
}

const Separator = (props: BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        // display: {xs: 'none', sm: 'inline'},
      }}
    >
      •
    </Box>
  )
}