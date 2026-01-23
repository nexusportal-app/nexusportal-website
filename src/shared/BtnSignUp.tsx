'use client'
import {Button, ButtonProps} from '@mui/material'
import {appConf} from '@/core/conf'
import {m} from '@/core/i18n'

export const BtnSignUp = (props: ButtonProps) => {
  const handleClick = () => {
    if (typeof window === 'undefined') return
    window.gtag?.('event', 'cta_click', {
      cta: 'signup',
    })
  }
  return (
    <Button
      onClick={handleClick}
      href={appConf.consoleUrl}
      sx={{color: 'primary.light'}}
      variant="outlined"
      size="large"
      {...props}
    >
      {m.ctaSignUp}
    </Button>
  )
}