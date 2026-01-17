import {appConf} from '@/core/conf'
import OpenInNew from '@mui/icons-material/OpenInNew'
import {Box} from '@mui/material'
import {m} from '@/core/i18n'

export const Footer = () => {
  return (
    <Box sx={{
      p: 1,
      maxWidth: 700,
      color: 'var(--mui-palette-text-disabled)',
      margin: 'auto',
      fontSize: '0.874em',
      marginBottom: 1,
    }}>
      © 2026 {m.title}
      <Separator />
      <Box
        component="a"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          fontWeight: '500',
        }}
        href={appConf.repoUrl}
      >
        GitHub&nbsp;
        <OpenInNew sx={{fontSize: 'inherit'}} />
      </Box>
      <Separator />
      <Box
        component="a"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          fontWeight: '500',
        }}
        href={'mailto:' + appConf.contactEmail}
      >
        {appConf.contactEmail}
      </Box>
    </Box>
  )
}


const Separator = () => {
  return <>&nbsp;&nbsp;•&nbsp;&nbsp;</>
}
