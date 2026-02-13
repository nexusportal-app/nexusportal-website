'use client'
import {Button, ButtonProps} from '@mui/material'

const scrollToContact = (selector: string) => () => {
  document.querySelector(selector)?.scrollIntoView({
    behavior: 'smooth',
  })
}

export const BtnScrollTo = ({scrollToElSelector, ...props}: ButtonProps & {
  scrollToElSelector: string
}) => {
  return (
    <Button
      onClick={scrollToContact(scrollToElSelector)}
      {...props}
    />
  )
}