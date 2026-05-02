'use client'
import {Page} from '@/shared/Page'
import {AppStatus, useAppStatus} from '@/shared/appStatus/useAppStatus'
import {appConf} from '@/core/conf'
import {AppStatusAlert} from '@/shared/appStatus/AppStatusAlert'
import {useMemo} from 'react'
import {Box, Card, CardContent, Tooltip, Typography} from '@mui/material'
import {mapFor} from '@axanc/ts-utils'
import {BoxProps} from '@mui/material/Box'
import {differenceInSeconds, subDays} from 'date-fns'
import {m} from '@/core/i18n'
import CheckCircle from '@mui/icons-material/CheckCircle'

type Incident = {
  start: Date
  end: Date
  site: 'api' | 'db' | 'pyx-server'
  severity: IncidentSeverity
}

type IncidentSeverity = 'critical' | 'degradation'

const incidents: Incident[] = [
  // TODO automate the whole process
]

export default function StatusPage() {
  const consoleStatus = useAppStatus(appConf.consoleUrl, 1000)
  return (
    <Page width="sm" title={m.status_.title}>
      <AppStatusAlert status={consoleStatus} />
      <Box sx={{mt: 1, display: 'grid', gap: 1, gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr'}}}>
        <HistoryTrackingCard head={m.status_.apiRequests} HistoryTrackingProps={{}} />
        <HistoryTrackingCard head={m.status_.xlsFormManager} />
        <HistoryTrackingCard head={m.status_.databases} />
      </Box>
    </Page>
  )
}

type HistoryTrackingProps = BoxProps & {
  maxDays?: number,
  incidents?: Incident[]
}

function HistoryTracking({
  maxDays = 60,
  sx,
  incidents,
  ...props
}: HistoryTrackingProps) {
  const now = useMemo(() => Date.now(), [])

  const totalSeconds = useMemo(() => {
    return maxDays * 24 * 60 * 60
  }, [maxDays])

  const totalIncidentsSeconds = useMemo(() => {
    if (!incidents) return 0
    return incidents?.reduce((acc, _) => {
      return acc + differenceInSeconds(_.end, _.start)
    }, 0)
  }, [incidents])

  const percent = (totalSeconds - totalIncidentsSeconds) / totalSeconds * 100
  return (
    <Box>
      <Box sx={{display: 'flex', gap: '2px', ...sx}} {...props}>
        {mapFor(maxDays, i => {
          return (
            <Tooltip title={subDays(now, i).toLocaleDateString()}>
              <Box key={i} sx={{height: 32, flex: 1, backgroundColor: 'success.light'}} />
            </Tooltip>
          )
        })}
      </Box>
      <Box sx={{mt: .5, fontSize: '0.9rem', color: 'text.secondary', gap: .25, display: 'flex', justifyContent: 'space-between'}}>
        <Box>{maxDays} {m.ago}</Box>
        <Box sx={{flex: 1, borderTop: '1px dashed', alignSelf: 'center', marginTop: '2px', borderColor: 'divider'}} />
        <Box> {m.today}</Box>
      </Box>
      <Box sx={{textAlign: 'center', fontWeight: '500', mt: 1}}>{percent.toLocaleString(undefined, {maximumFractionDigits: 2, minimumFractionDigits: 2})} % {m.uptime}</Box>
    </Box>
  )
}

function HistoryTrackingCard({
  head,
  HistoryTrackingProps,
}: {
  HistoryTrackingProps?: HistoryTrackingProps,
  head?: string
}) {
  return (
    <Card>
      <CardContent>
        <Typography fontWeight="500" sx={{mb: 1, display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'space-between'}}>
          {head}
          <Tooltip title={m.status_[AppStatus.ok].title}><CheckCircle color="success" /></Tooltip>
        </Typography>
        <HistoryTracking {...HistoryTrackingProps} />
      </CardContent>
    </Card>
  )
}