'use client'
import {sendContact} from '@/app/actions/sendContact'
import {Alert, Box, Button, CardContent, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, Portal, Snackbar, TextField} from '@mui/material'
import {m} from '@/core/i18n'
import {useActionState, useCallback, useEffect, useRef, useState} from 'react'
import {useFormStatus} from 'react-dom'
import {resetTurnstile, Turnstile} from '@/app/contact/Turnstile'

const SubmitButton = ({disabled}: {disabled: boolean}) => {
  const {pending} = useFormStatus()
  return (
    <Button type="submit" fullWidth variant="contained" disabled={disabled || pending}>
      {m.contact_.submit}
    </Button>
  )
}

export const ContactForm = () => {
  const [state, formAction] = useActionState(sendContact, null)
  const [token, setToken] = useState<string | null>(null)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!state) return
    if (state.success) formRef.current?.reset()
    resetTurnstile()
    setToken(null)
    setSnackbarOpen(true)
  }, [state])

  const feedback = !state
    ? null
    : state.success
      ? {severity: 'success' as const, text: m.contact_.submitSuccess}
      : state.error === 'captcha'
        ? {severity: 'error' as const, text: m.contact_.submitErrorCaptcha}
        : {severity: 'error' as const, text: m.contact_.submitError}

  return (
    <form ref={formRef} action={formAction}>
      <Portal>
        <Snackbar
          anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
        >
          <Alert severity={feedback?.severity ?? 'info'} variant="filled">
            {feedback?.text}
          </Alert>
        </Snackbar>
      </Portal>

      <CardContent sx={{display: 'flex', gap: 1, flexDirection: 'column'}}>
        <Alert color="info">{m.contact_.footer}</Alert>

        <TextField name="email" type="email" size="small" required fullWidth label={m.contact_.email} />

        <TextField name="orgName" fullWidth size="small" label={m.contact_.orgName} />

        <TextField name="role" fullWidth size="small" select label={m.contact_.roles} defaultValue="">
          {m.contact_.roles_.map(role => (
            <MenuItem key={role} value={role}>{role}</MenuItem>
          ))}
        </TextField>

        <FormControl
          component="fieldset"
          variant="standard"
          sx={{border: '1px solid', py: .75, px: 1, borderRadius: '12px', borderColor: 'divider'}}
        >
          <FormLabel>{m.contact_.tools}</FormLabel>
          <FormGroup sx={{display: 'grid', gridTemplateColumns: {sm: '1fr 1fr 1fr', xs: '1fr 1fr'}, columnGap: 2}}>
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
          sx={{border: '1px solid', m: 0, pl: .25, py: 1 / 5, borderRadius: '12px', borderColor: 'divider'}}
          control={<Checkbox size="small" name="demo" value="yes" />}
          label={m.contact_.wantADemo}
        />

        <TextField name="message" multiline fullWidth label={m.contact_.message} minRows={3} />

        <Turnstile onChange={useCallback(setToken, [])} />

        <SubmitButton disabled={!token} />

        <Box
          sx={{'a': {fontWeight: 500, textDecoration: 'underline'}}}
          dangerouslySetInnerHTML={{__html: m.contact_.preferDirect}}
        />
      </CardContent>
    </form>
  )
}