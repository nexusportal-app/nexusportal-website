'use client'
import {Button, ButtonProps} from '@mui/material'
import {appConf} from '@/core/conf'
import {m} from '@/core/i18n'

export const BtnExplore = (props: ButtonProps) => {
  const handleClick = () => {
    if (typeof window === 'undefined') return
    window.gtag?.('event', 'sign_up_click', {
      event_category: 'cta',
      event_label: 'explore_button',
    })
  }
  return (
    <Button
      onClick={handleClick}
      href={appConf.consoleUrl}
      variant="contained"
      size="large"
      {...props}
    >
      {m.cta}
    </Button>
  )
}