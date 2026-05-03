import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Switch, Typography} from '@mui/material'
import {useEffect, useState} from 'react'
import {CookiePreferences} from '@/core/AnalyticsTracker'

export type AnalyticSettingsDialogProps = {
  open: boolean
  value: CookiePreferences
  onClose: () => void
  onSave: (prefs: CookiePreferences) => void
}

export const AnalyticSettingsDialog = ({
  open,
  value,
  onClose,
  onSave,
}: AnalyticSettingsDialogProps) => {
  const [preferences, setPreferences] = useState(value)
  useEffect(() => {
    if (open) {
      setPreferences(value)
    }
  }, [value, open])

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Cookie preferences</DialogTitle>

      <DialogContent>
        <Typography variant="body2" sx={{mb: 1}}>
          We use cookies to measure traffic and improve the product.
        </Typography>

        <FormControlLabel
          sx={{py: .5, m: 0, width: '100%', borderRadius: 1 / 2, border: '1px solid', borderColor: 'divider'}}
          control={
            <Switch
              checked={preferences.analytics}
              onChange={(e) => setPreferences({analytics: e.target.checked})}
            />
          }
          label={
            <Box sx={{ml: .25}}>
              Analytics (Google Analytics)
              <Typography display="block" variant="caption" color="text.secondary">
                Anonymous usage statistics, no advertising.
              </Typography>
            </Box>}
        />

      </DialogContent>

      <DialogActions>
        <Button onClick={() => setPreferences({analytics: false})}>
          Reject all
        </Button>

        <Button onClick={() => setPreferences({analytics: true})}>
          Accept all
        </Button>

        <Button
          variant="contained"
          onClick={() => onSave(preferences)}
        >
          Save preferences
        </Button>
      </DialogActions>
    </Dialog>
  )
}