import type {} from '@mui/material/themeCssVarsAugmentation'

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetId: string,
      params?: Record<string, any>
    ) => void
  }
}