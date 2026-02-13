import type {Metadata} from 'next'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter'
import {CssBaseline, StyledEngineProvider, ThemeProvider} from '@mui/material'
import {lightTheme, openSansFont} from '@/core/theme'
import {m} from '@/core/i18n'
import './layout.css'
import {Header} from '@/sections/Header/Header'
import Script from 'next/script'
import {AnalyticsTracker} from '@/core/AnalyticsTracker'

export const metadata: Metadata = {
  title: m.title,
  description: m.heroTitleSubRaw,
  openGraph: {
    images: [
      'https://www.nexusportal.app/ss3/ss-dashboard.png',
    ],
  },
  icons: {
    icon: '/app-logo.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'NexusPortal',
  applicationCategory: 'BusinessApplication',
  description:
    'Information management platform for humanitarian organizations',
  operatingSystem: 'Web',
  url: 'https://www.nexusportal.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body className={openSansFont.variable}>
    {/*Polyfill for CSS scroll animation*/}
    <Script
      src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"
      strategy="afterInteractive"
    />
    <StyledEngineProvider injectFirst>
      <AppRouterCacheProvider>
        <ThemeProvider theme={lightTheme} defaultMode="light">
          <CssBaseline />
          {children}
          <Header />
        </ThemeProvider>
      </AppRouterCacheProvider>
    </StyledEngineProvider>
    <AnalyticsTracker />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
    />
    </body>
    </html>
  )
}
