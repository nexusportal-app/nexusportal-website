'use client'
import {useEffect} from 'react'
import Script from 'next/script'
import {Analytics} from '@vercel/analytics/react' // keep Next.js Analytics
import {usePathname} from 'next/navigation'

const DISABLED_HOSTS = ['localhost', '127.0.0.1']

export function AnalyticsTracker() {
  const pathname = usePathname()

  const enabled =
    process.env.NODE_ENV === 'production'
    && typeof window !== 'undefined'
    && !DISABLED_HOSTS.includes(window.location.hostname)

  useEffect(() => {
    if (!enabled) return
    if (!window.gtag) return
    window.gtag('config', 'G-NRE24QKY6F', {page_path: pathname})
  }, [pathname, enabled])

  if (!enabled) return null

  return (
    <>
      <Script strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-NRE24QKY6F" />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        `}
      </Script>
      <Analytics />
    </>
  )
}
