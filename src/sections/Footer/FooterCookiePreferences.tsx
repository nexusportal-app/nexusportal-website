'use client'

import {FooterBtn} from '@/sections/Footer/FooterBtn'
import Cookie from '@mui/icons-material/Cookie'
import {m} from '@/core/i18n'
import {useAnalytics} from '@/core/AnalyticsTracker'

export const FooterCookiePreferences = () => {
  const {openSettings} = useAnalytics()
  return (
    <FooterBtn onClick={openSettings}>
      <Cookie fontSize="small" />
      {m.cookiePreferences}
    </FooterBtn>
  )
}