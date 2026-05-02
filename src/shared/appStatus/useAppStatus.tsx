'use client'
import {useEffect, useState} from 'react'

export enum AppStatus {
  loading = 'loading',
  ok = 'ok',
  down = 'down',
}

export function useAppStatus(url: string, interval = 5000) {
  const [status, setStatus] = useState<AppStatus>(AppStatus.loading)

  useEffect(() => {
    let mounted = true

    const check = async () => {
      try {
        const res = await fetch(url, {method: 'GET', cache: 'no-store'})
        if (!mounted) return

        setStatus(res.ok ? AppStatus.ok : AppStatus.down)
      } catch {
        if (!mounted) return
        setStatus(AppStatus.down)
      }
    }

    check()
    const id = setInterval(check, interval)

    return () => {
      mounted = false
      clearInterval(id)
    }
  }, [url, interval])

  return status
}