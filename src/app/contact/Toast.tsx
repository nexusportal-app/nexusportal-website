import {Alert, Snackbar} from '@mui/material'

export const Toast = ({message, open}: {open?: boolean, message?: string}) => {
  return (
    <Snackbar open={open} autoHideDuration={4000}>
      <Alert severity="success" variant="filled">
        {message}
      </Alert>
    </Snackbar>
  )
}