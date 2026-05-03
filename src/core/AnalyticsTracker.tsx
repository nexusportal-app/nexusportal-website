'use client'

import {createContext, useContext, useEffect, useState} from 'react'
import {usePathname} from 'next/navigation'
import Script from 'next/script'
import {Analytics} from '@vercel/analytics/react'
import AnalyticBanner from '@/core/AnalyticBanner'
import {AnalyticSettingsDialog} from '@/core/AnalyticSettingsDialog'
import {appConf} from '@/core/conf'

export type CookiePreferences = {
  analytics: boolean
}

type Ctx = {
  prefs: CookiePreferences | null
  openSettings: () => void
  setOpenSettings: (v: boolean) => void
  savePrefs: (p: CookiePreferences) => void
}

const AnalyticsContext = createContext<Ctx | null>(null)

export function AnalyticsProvider({children}: {children: React.ReactNode}) {
  const pathname = usePathname()

  const [prefs, setPrefs] = useState<CookiePreferences | null>(null)
  const [bannerOpen, setBannerOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const enabled =
    process.env.NODE_ENV === 'production' &&
    typeof window !== 'undefined' &&
    !appConf.analytic.disabledHosts.includes(window.location.hostname)

  useEffect(() => {
    const raw = document.cookie
      .split('; ')
      .find(r => r.startsWith(appConf.analytic.cookieName + '='))
      ?.split('=')[1]

    if (!raw) {
      setBannerOpen(true)
      return
    }

    try {
      const parsed = JSON.parse(decodeURIComponent(raw))
      if (typeof parsed.analytics === 'boolean') {
        setPrefs(parsed)
      } else {
        setBannerOpen(true)
      }
    } catch {
      setBannerOpen(true)
    }
  }, [])

  const savePrefs = (value: CookiePreferences) => {
    document.cookie = `${appConf.analytic.cookieName}=${encodeURIComponent(
      JSON.stringify(value),
    )}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`

    setPrefs(value)
    setBannerOpen(false)
    setSettingsOpen(false)
  }

  useEffect(() => {
    if (!enabled) return
    if (prefs?.analytics === false) {
      window['ga-disable-' + appConf.analytic.googleId] = true
    }
  }, [prefs, enabled])

  useEffect(() => {
    if (!enabled) return
    if (!prefs?.analytics) return
    if (!window.gtag) return

    window.gtag('config', appConf.analytic.googleId, {
      page_path: pathname,
    })
  }, [pathname, prefs, enabled])

  const value: Ctx = {
    prefs,
    openSettings: () => setSettingsOpen(true),
    setOpenSettings: setSettingsOpen,
    savePrefs,
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {enabled && (
        <>
          {prefs?.analytics && (
            <>
              <Script
                strategy="afterInteractive"
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${appConf.analytic.googleId}`}
              />
              <Script id="ga-init" strategy="afterInteractive">
                {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${appConf.analytic.googleId}', {
                anonymize_ip: true,
                send_page_view: false
              });
            `}
              </Script>
            </>
          )}

          <Analytics />
        </>
      )}
      {children}

      <AnalyticBanner
        open={bannerOpen}
        onAccept={() => savePrefs({analytics: true})}
        onReject={() => savePrefs({analytics: false})}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      <AnalyticSettingsDialog
        open={settingsOpen}
        value={prefs ?? {analytics: false}}
        onClose={() => setSettingsOpen(false)}
        onSave={savePrefs}
      />
    </AnalyticsContext.Provider>
  )
}

export function useAnalytics() {
  const ctx = useContext(AnalyticsContext)
  if (!ctx) throw new Error('useAnalytics must be used within AnalyticsProvider')
  return ctx
}