// app/ga-head.tsx
'use client'

import Script from 'next/script'
import {Analytics} from '@vercel/analytics/next'

const DISABLED_HOSTS = ['localhost', '127.0.0.1']

export function AnalyticsTracker() {
  const enabled =
    process.env.NODE_ENV === 'production' &&
    !DISABLED_HOSTS.includes(window.location.hostname)
  
  if (!enabled) return null

  return (
    <>
      <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-NRE24QKY6F" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
    
          gtag('config', 'G-NRE24QKY6F');
        `}
      </Script>
      <Analytics />
    </>
  )
}
