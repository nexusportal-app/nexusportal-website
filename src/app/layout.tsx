import type {Metadata} from 'next'
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter'
import {CssBaseline, StyledEngineProvider, ThemeProvider} from '@mui/material'
import {openSansFont, theme} from '@/core/theme'
import {m} from '@/core/i18n'
import './layout.css'
import {Header} from '@/sections/Header/Header'
import Script from 'next/script'
import {Analytics} from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: m.title,
  description: m.heroTitleSub,
  icons: {
    icon: '/app-logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body className={openSansFont.variable}>
    <Script
      src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"
      strategy="afterInteractive"
    />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NRE24QKY6F"/>
    <Script>
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-NRE24QKY6F');
      `}
    </Script>
    <StyledEngineProvider injectFirst>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <Header />
        </ThemeProvider>
      </AppRouterCacheProvider>
    </StyledEngineProvider>
    <Analytics />
    </body>
    </html>
  )
}
