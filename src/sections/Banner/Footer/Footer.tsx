import {appConf} from '@/app/conf'
import OpenInNew from '@mui/icons-material/OpenInNew'
import {Box} from '@mui/material'
import {m} from '@/i18n'

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
      © 2025 {m.title}
      <Separator />
      All rights reserved
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
    </Box>
  )
}

const Separator = () => {
  return <>&nbsp;&nbsp;•&nbsp;&nbsp;</>
}
