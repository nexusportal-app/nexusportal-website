'use client'
import {createTheme} from '@mui/material'
import {Open_Sans} from 'next/font/google'
import {alphaVar} from '@/shared/Pulse'

export const colorPrimary = '#0092e6'

export const openSansFont = Open_Sans({
  variable: '--font-open_sans',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const theme = createTheme({
  cssVariables: true,
  // shadows: lightShadows as any,
  // defaultColorScheme: 'light',
  spacing: 16,
  shape: {
    borderRadius: 24,
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {main: colorPrimary},
        secondary: {main: colorPrimary},
        error: {main: '#d32f2f'},
        success: {main: '#007c08'},
        action: {
          focus: alphaVar(colorPrimary, 0.1),
          focusOpacity: 0.1,
        },
        background: {
          // paper: '#fff',
          // default: '#f5f5f7',
          default: '#fff',
          paper: '#f0f4f9',

          // default: 'rgba(221, 231, 248, 0.6)',
          // default: 'rgba(255, 255, 255, 0.6)',
        },
      },
    },
    // dark: {
    //   palette: {
    //     warning: orange,
    //     success: green,
    //     primary: colorPrimary,
    //     secondary: colorPrimary,
    //     error: red,
    //     action: {
    //       focus: alphaVar(colorPrimary['500'], 0.1),
    //       focusOpacity: 0.1,
    //     },
    //     background: {
    //       default: '#031525',
    //       paper: '#0d2136',
    //     },
    //   },
    // },
  },
  typography: {
    fontFamily: openSansFont.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'bold',
          borderRadius: 20,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: t => ({
        '@keyframes chipPop': {
          '0%': {
            color: 'transparent',
            transform: 'scale(0.9)',
            filter: 'blur(4px)',
          },
          '5%': {
            boxShadow: t.vars.shadows[1],
            color: 'black',
            transform: 'scale(1)',
            filter: 'blur(0)',
          },
          '100%': {
            boxShadow: t.vars.shadows[1],
            color: 'black',
            transform: 'scale(1)',
            filter: 'blur(0)',
          },
          // '50%': {
          //   color: 'black',
          //   transform: 'scale(1.01)',
          //   filter: 'blur(0.5px)',
          // },
          // '70%': {
          //   color: 'black',
          //   transform: 'scale(0.99)',
          // },
          // '100%': {
          //   color: 'black',
          //   transform: 'scale(1)',
          //   filter: 'blur(0px)',
          // },
        },
      }),
    },
  },
})

