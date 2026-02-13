'use client'
import {sendContact} from '@/app/actions/sendContact'
import {Alert, Box, Button, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, Portal, Snackbar, TextField} from '@mui/material'
import {m} from '@/core/i18n'
import {useActionState, useEffect} from 'react'

export const ContactForm = () => {
  const [state, formAction] = useActionState(sendContact, null)
  const open = state !== null
  const success = state?.success === true

  useEffect(() => {
    if (state?.success) {
      const form = document.querySelector('form')
      form?.reset()
    }
  }, [state])

  return (
    <form action={formAction}>
      <Portal>
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
          open={open}
          autoHideDuration={4000}
        >
          <Alert severity={success ? 'success' : 'error'} variant="filled">
            {success ? m.contact_.submitSuccess : m.contact_.submitError}
          </Alert>
        </Snackbar>
      </Portal>
      <CardContent sx={{display: 'flex', gap: 1, flexDirection: 'column'}}>

        <Alert color="info">{m.contact_.footer}</Alert>

        <TextField name="email" type="email" size="small" required fullWidth label={m.contact_.email} />

        <TextField name="orgName" fullWidth size="small" label={m.contact_.orgName} />

        <TextField
          name="role"
          fullWidth
          size="small"
          select
          label={m.contact_.roles}
          defaultValue=""
        >
          {m.contact_.roles_.map(role => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </TextField>

        <FormControl
          component="fieldset"
          variant="standard"
          sx={{
            border: '1px solid',
            py: .75,
            px: 1,
            borderRadius: '12px',
            borderColor: 'divider',
          }}
        >
          <FormLabel>{m.contact_.tools}</FormLabel>

          <FormGroup
            sx={{
              display: 'grid',
              gridTemplateColumns: {sm: '1fr 1fr 1fr', xs: '1fr 1fr'},
              columnGap: 2,
            }}
          >
            {m.contact_.tools_.map(tool => (
              <FormControlLabel
                key={tool}
                control={<Checkbox size="small" name="tools" value={tool} />}
                label={tool}
              />
            ))}
          </FormGroup>
        </FormControl>

        <FormControlLabel
          sx={{
            border: '1px solid',
            m: 0,
            pl: .25,
            py: 1 / 5,
            borderRadius: '12px',
            borderColor: 'divider',
          }}
          control={<Checkbox size="small" name="demo" value="yes" />}
          label={m.contact_.wantADemo}
        />

        <TextField name="message" multiline fullWidth label={m.contact_.message} minRows={3} />

        <Button type="submit" fullWidth variant="contained">
          {m.contact_.submit}
        </Button>

        <Box
          sx={{'a': {fontWeight: 500, textDecoration: 'underline'}}}
          dangerouslySetInnerHTML={{__html: m.contact_.preferDirect}}
        />
      </CardContent>
    </form>
  )
}