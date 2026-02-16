'use client'

import Image from 'next/image'
import {Box, Button, ButtonProps, IconButton, Menu, MenuItem} from '@mui/material'
import {m} from '@/core/i18n'
import Link from 'next/link'
import {BoxProps} from '@mui/material/Box'
import {BtnSignUp} from '@/shared/BtnSignUp'
import {BtnExplore} from '@/shared/BtnExplore'
import MenuIcon from '@mui/icons-material/Menu'
import {sectionWidth} from '@/shared/Section'
import {MouseEvent, useState} from 'react'

const headerLayout: BoxProps['sx'] = {
  top: 0,
  right: 0,
  left: 0,
  py: {xs: .5, sm: 1},
  px: {xs: .5, sm: 1},
  position: 'fixed',
  margin: 'auto',
  mt: .5,
  borderRadius: '16px',
  height: {xs: 50, sm: 60},
  width: 'calc(100% - 16px)',
  maxWidth: sectionWidth,
  // width: contentWidth,
  // maxWidth: `calc(100vw - 16px)`,
}

export const headerGradiant = `
  radial-gradient(circle at 12% 18%,
    rgba(12,45,105,0.45) 0%,
    rgba(8,30,75,0.38) 28%,
    rgba(2,12,27,0.6) 55%,
    rgba(6,22,55,0.32) 75%,
    rgba(2,12,27,0.5) 100%
  ),
  radial-gradient(circle at 62% 14%,
    rgba(14,55,120,0.42) 0%,
    rgba(9,34,85,0.36) 30%,
    rgba(2,12,27,0.65) 58%,
    rgba(7,26,65,0.3) 80%,
    rgba(2,12,27,0.5) 100%
  ),
  radial-gradient(circle at 28% 68%,
    rgba(13,50,115,0.42) 0%,
    rgba(8,32,80,0.36) 30%,
    rgba(2,12,27,0.65) 58%,
    rgba(6,24,60,0.3) 80%,
    rgba(2,12,27,0.5) 100%
  ),
  radial-gradient(circle at 78% 78%,
    rgba(16,60,130,0.38) 0%,
    rgba(10,38,95,0.34) 32%,
    rgba(2,12,27,0.7) 60%,
    rgba(8,30,70,0.28) 82%,
    rgba(2,12,27,0.5) 100%
  )
`

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Box sx={{
        ...headerLayout,
        boxShadow: 6,
        transform: 'translateZ(0)',
        background: headerGradiant,
        // opacity: .6,
        backdropFilter: 'blur(6px)',
      }}>

      </Box>
      <Box component="header" sx={{
        ...headerLayout,
        zIndex: 30,
        color: 'white',
        overflow: 'hidden',
        background: 'rgba(255,255,255, 0.1)',
        border: '1px solid rgba(255,255,255, 0.02)',
        borderTopColor: 'rgba(255,255,255, 0.06)',
        borderBottomColor: 'rgba(255,255,255, 0.1)',
        display: 'flex',
        alignItems: 'center',
      }}>
        <Link href="/" style={{display: 'inline-flex', alignItems: 'center'}}>
          <Image src="/app-logo.svg" alt={m.logoAlt} height={28} width={28} />
          <Box sx={{ml: .5, fontSize: {xs: '1.2rem', sm: '1.3em'}}}> {m.title}</Box>
        </Link>
        <Box component="nav" sx={{
          gap: {xs: .5, sm: 1},
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
          {/* Desktop Navigation */}
          <Box sx={{display: {xs: 'none', sm: 'contents'}}}>
            <HeadLink href="/contact">
              {m.contact}
            </HeadLink>
            <HeadLink href="/pricing">
              {m.pricing}
            </HeadLink>
            <BtnSignUp size="small" sx={{color: 'white'}} />
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{display: {xs: 'contents', sm: 'none'}}}>
            <IconButton
              sx={{mr: -1 / 4, color: 'inherit'}}
              onClick={handleMenuOpen}
              aria-label="menu"
              aria-controls={open ? 'mobile-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              slotProps={{
                paper: {
                  sx: {
                    background: headerGradiant,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255, 0.1)',
                    color: 'white',
                    minWidth: 200,
                  },
                },
              }}
            >
              <Link href="/contact" style={{textDecoration: 'none', color: 'inherit'}}>
                <MenuItem onClick={handleMenuClose} sx={{fontWeight: 500}}>
                  {m.contact}
                </MenuItem>
              </Link>
              <Link href="/pricing" style={{textDecoration: 'none', color: 'inherit'}}>
                <MenuItem onClick={handleMenuClose} sx={{fontWeight: 500}}>
                  {m.pricing}
                </MenuItem>
              </Link>
              <Box sx={{px: 1, py: .5}}>
                <BtnSignUp
                  size="small"
                  sx={{color: 'white', width: '100%'}}
                  onClick={handleMenuClose}
                />
              </Box>
            </Menu>
          </Box>

          {/* Explore button always visible */}
          <BtnExplore size="small" />
        </Box>
      </Box>
    </>
  )
}

function HeadLink({sx, href, ...props}: ButtonProps & {href: string}) {
  return (
    <Link href={href}>
      <Button variant="text" sx={{
        // fontSize: '1rem',
        color: 'inherit', borderRadius: 10,
        fontWeight: 600,
        ...sx,
      }} {...props} />
    </Link>
  )
}