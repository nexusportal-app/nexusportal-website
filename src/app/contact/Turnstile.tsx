'use client'
import {Box, useTheme} from '@mui/material'
import Script from 'next/script'
import {useEffect} from 'react'

declare global {
  interface Window {
    turnstile?: {reset: (widget?: string) => void}
    onTurnstileSuccess?: (token: string) => void
    onTurnstileExpired?: () => void
    onTurnstileError?: () => void
  }
}

export const resetTurnstile = () => window.turnstile?.reset()

export const Turnstile = ({onChange}: {onChange: (token: string | null) => void}) => {
  const theme = useTheme()

  useEffect(() => {
    window.onTurnstileSuccess = onChange
    window.onTurnstileExpired = () => onChange(null)
    window.onTurnstileError = () => onChange(null)
    return () => {
      delete window.onTurnstileSuccess
      delete window.onTurnstileExpired
      delete window.onTurnstileError
    }
  }, [onChange])

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer />
      <Box
        className="cf-turnstile"
        data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
        data-theme={theme.palette.mode}
        data-callback="onTurnstileSuccess"
        data-expired-callback="onTurnstileExpired"
        data-error-callback="onTurnstileError"
        sx={{minHeight: 65}}
      />
    </>
  )
}