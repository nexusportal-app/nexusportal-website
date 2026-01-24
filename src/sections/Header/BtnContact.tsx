'use client'
import {IconButton} from '@mui/material'
import ContactIcon from '@mui/icons-material/AlternateEmail'

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({
    behavior: 'smooth',
  })
}

export const BtnContact = () => {
  return (
    <IconButton
      onClick={scrollToContact}
      sx={{
        mr: -1 / 4,
        color: 'inherit',
      }}
    >
      <ContactIcon />
    </IconButton>
  )
}