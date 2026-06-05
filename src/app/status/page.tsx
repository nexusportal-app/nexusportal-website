'use client'
import {Page} from '@/shared/Page'
import {AppStatus, useAppStatus} from '@/shared/appStatus/useAppStatus'
import {appConf} from '@/core/conf'
import {AppStatusAlert} from '@/shared/appStatus/AppStatusAlert'
import {useMemo} from 'react'
import {Box, Card, CardContent, Tooltip, Typography} from '@mui/material'
import {fnSwitch, mapFor} from '@axanc/ts-utils'
import {BoxProps} from '@mui/material/Box'
import {differenceInSeconds, endOfDay, format, isAfter, isBefore, startOfDay, subDays} from 'date-fns'
import {m} from '@/core/i18n'
import CheckCircle from '@mui/icons-material/CheckCircle'

type Incident = {
  start: Date
  end: Date
  site: 'api' | 'db' | 'pyx-server' | 'client'
  severity: IncidentSeverity
  details?: string
}

type IncidentSeverity = 'critical' | 'degradation'
type Site = 'api' | 'db' | 'pyx-server' | 'client'

const incidents: Incident[] = [
  {
    start: new Date(2026, 5, 5, 1, 10, 0),
    end: new Date(2026, 5, 5, 4, 0, 0),
    severity: 'critical',
    site: 'client',
    details: 'Temporary incident caused by a tracking (analytics) service that could block the site from loading in certain cases.',
  },
  // TODO automate the whole process
]

export default function StatusPage() {
  const consoleStatus = useAppStatus(appConf.consoleUrl)
  return (
    <Page width="sm" title={m.status_.title}>
      <AppStatusAlert status={consoleStatus} />
      <Box sx={{mt: 1, display: 'grid', gap: 1, gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr'}}}>
        <HistoryTrackingCard HistoryTrackingProps={{incidents: incidents.filter(_ => _.site === 'api')}} site="api" head={m.status_.apiRequests} />
        <HistoryTrackingCard HistoryTrackingProps={{incidents: incidents.filter(_ => _.site === 'pyx-server')}} site="pyx-server" head={m.status_.xlsFormManager} />
        <HistoryTrackingCard HistoryTrackingProps={{incidents: incidents.filter(_ => _.site === 'db')}} site="db" head={m.status_.databases} />
        <HistoryTrackingCard HistoryTrackingProps={{incidents: incidents.filter(_ => _.site === 'client')}} site="client" head={m.status_.client} />
      </Box>
    </Page>
  )
}

type HistoryTrackingProps = BoxProps & {
  maxDays?: number,
  incidents?: Incident[]
}

function HistoryTrackingCard({
  head,
  site,
  HistoryTrackingProps,
}: {
  site: Site
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

function HistoryTracking({
  maxDays = 60,
  sx,
  incidents = [],
  ...props
}: HistoryTrackingProps) {
  // 1. On fixe la timeline
  const now = useMemo(() => new Date(), [])
  const startDateLimit = useMemo(() => subDays(now, maxDays), [now, maxDays])

  const {days, uptimePercent} = useMemo(() => {
    const daysData = mapFor(maxDays, i => {
      const dayDate = subDays(now, i)
      const dayStart = startOfDay(dayDate)
      const dayEnd = endOfDay(dayDate)

      const dayIncidents = incidents.filter(inc =>
        isBefore(inc.start, dayEnd) && isAfter(inc.end, dayStart),
      )

      const severity = dayIncidents.some(id => id.severity === 'critical')
        ? 'critical'
        : dayIncidents.length > 0 ? 'degradation' : undefined

      return {date: dayStart, incidents: dayIncidents, severity}
    }).reverse()

    let totalIncidentSeconds = 0
    incidents.forEach(inc => {
      const intersectStart = isBefore(inc.start, startDateLimit) ? startDateLimit : inc.start
      const intersectEnd = isAfter(inc.end, now) ? now : inc.end

      if (isBefore(intersectStart, intersectEnd)) {
        totalIncidentSeconds += differenceInSeconds(intersectEnd, intersectStart)
      }
    })

    const totalWindowSeconds = maxDays * 24 * 60 * 60
    const percent = Math.max(0, ((totalWindowSeconds - totalIncidentSeconds) / totalWindowSeconds) * 100)

    return {days: daysData, uptimePercent: percent}
  }, [incidents, maxDays, now, startDateLimit])

  return (
    <Box>
      <Box sx={{display: 'flex', gap: '2px', ...sx}} {...props}>
        {days.map((day, i) => (
          <Tooltip
            key={i}
            title={
              <Box sx={{p: 0.5}}>
                <Typography variant="caption" sx={{fontWeight: 'bold', display: 'block', mb: 0.5}}>
                  {format(day.date, 'dd MMMM yyyy')}
                </Typography>
                {day.incidents.length > 0 ? (
                  <ul style={{margin: 0, paddingLeft: '1.2rem', fontSize: '0.75rem'}}>
                    {day.incidents.map((inc, idx) => (
                      <Box component="li" key={idx} sx={{'::marker': {color: inc.severity === 'critical' ? 'error.main' : 'warning.main'}}}>
                        <strong>{format(inc.start, 'HH:mm')} - {format(inc.end, 'HH:mm')}</strong> {inc.details}
                      </Box>
                    ))}
                  </ul>
                ) : (
                  <Typography variant="caption" sx={{opacity: 0.8}}>{m.status_.ok.title}</Typography>
                )}
              </Box>
            }
          >
            <Box sx={{
              height: 32,
              flex: 1,
              cursor: 'pointer',
              backgroundColor: fnSwitch(day.severity!, {
                critical: 'error.light',
                degradation: 'warning.light',
              }, () => 'success.light'),
              '&:hover': {filter: 'brightness(0.9)'},
            }} />
          </Tooltip>
        ))}
      </Box>

      <Box sx={{mt: 0.5, fontSize: '0.8rem', color: 'text.secondary', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box>{maxDays} {m.ago}</Box>
        <Box sx={{flex: 1, mx: 1, borderTop: '1px dashed', borderColor: 'divider'}} />
        <Box>{m.today}</Box>
      </Box>

      <Box sx={{textAlign: 'center', fontWeight: '600', mt: 1.5, fontSize: '1rem'}}>
        {uptimePercent.toLocaleString(undefined, {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })} % {m.uptime}
      </Box>
    </Box>
  )
}