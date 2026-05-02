import {Alert} from '@mui/material'
import {AppStatus} from '@/shared/appStatus/useAppStatus'
import {m} from '@/core/i18n'

export const AppStatusAlert = ({status}: {status: AppStatus}) => {
  if (status === 'ok') {
    return (
      <Alert severity="success" variant="filled">
        {m.status_[status].desc}
      </Alert>
    )
  }

  if (status === 'down') {
    return (
      <Alert severity="error" variant="filled">
        {m.status_[status].desc}
      </Alert>
    )
  }

  return (
    <Alert severity="info" variant="standard">
      {m.status_[status].desc}
    </Alert>
  )
}