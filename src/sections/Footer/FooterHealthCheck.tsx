'use client'
import {useAppStatus} from '@/shared/appStatus/useAppStatus'
import {appConf} from '@/core/conf'
import {AppStatusDot} from '@/shared/appStatus/AppStatusDot'

export const FooterHealthCheck = () => {
  const consoleStatus = useAppStatus(appConf.consoleUrl, 1000)

  return (
    <AppStatusDot status={consoleStatus}/>
  )
}