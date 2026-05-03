'use client'
import {Box, Button, Fade, IconButton, Paper, Tooltip, Typography} from '@mui/material'
import {m} from '@/core/i18n'
import Check from '@mui/icons-material/Check'
import Close from '@mui/icons-material/Close'
import Settings from '@mui/icons-material/Settings'

export type CookieBannerProps = {
  open: boolean
  onAccept: () => void
  onReject: () => void
  onOpenSettings: () => void
}

export default function AnalyticBanner({open, onReject, onAccept, onOpenSettings}: CookieBannerProps) {
  return (
    <Fade in={open}>
      <Paper
        elevation={3}
        sx={{
          position: 'fixed',
          bottom: 16,
          left: 16,
          px: 1,
          py: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(30,30,30,0.75)',
          color: '#fff',
          maxWidth: 310,
          width: 'calc(100% - 32px)',
        }}
      >
        <Box sx={{flex: 1}}>
          <Typography variant="body2">
            {m.cookieBanner.title}
          </Typography>
          <Box sx={{mt: .5, display: 'flex', alignItems: 'center', gap: 1}}>
            <Button
              size="small"
              startIcon={<Close fontSize="small" />}
              sx={{color: 'warning.light'}}
              color="warning"
              variant="outlined"
              onClick={onReject}
            >
              {m.cookieBanner.deny}
            </Button>

            <Button
              startIcon={<Check fontSize="small" />}
              size="small"
              sx={{
                borderColor: '#54a9ff',
                color: '#d1e8ff',
              }}
              variant="outlined"
              color="inherit"
              onClick={onAccept}
            >
              {m.cookieBanner.accept}
            </Button>
            <Tooltip title={m.edit} placement="right">
              <IconButton size="small" sx={{marginLeft: 'auto'}} color="inherit" onClick={onOpenSettings}>
                <Settings />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Paper>
    </Fade>
  )
}
