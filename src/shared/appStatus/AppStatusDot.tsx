import {Box, Tooltip} from '@mui/material'
import {AppStatus} from '@/shared/appStatus/useAppStatus'
import {m} from '@/core/i18n'

export const AppStatusDot = ({status}: {status: AppStatus}) => {
  const configColor = {
    ok: '#4caf50',
    down: '#f44336',
    loading: '#ff9800',
  }[status]

  return (
    <Tooltip title={m.status_[status].title}>
      <Box
        sx={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          backgroundColor: configColor,
          boxShadow: `0 0 4px ${configColor}`,
          ...(status === 'loading' && {
            animation: 'pulse 1.2s infinite',
          }),
          '@keyframes pulse': {
            '0%': {opacity: 0.4},
            '50%': {opacity: 1},
            '100%': {opacity: 0.4},
          },
        }}
      />
    </Tooltip>
  )
}