import {ButtonBase, ButtonBaseProps} from '@mui/material'

export const FooterBtn = ({
  sx,
  ...props
}: ButtonBaseProps) => {
  return (
    <ButtonBase sx={{
      display: 'inline-flex', fontWeight: '500',
      gap: .25, alignItems: 'center',
      border: '1px solid',
      borderColor: 'divider',
      px: .5,
      py: .125,
      minHeight: 26,
      borderRadius: 30,
      ...sx,
    }} {...props} />
  )
}