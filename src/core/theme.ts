'use client'
import {alpha, createTheme} from '@mui/material'
import {Open_Sans} from 'next/font/google'
import {alphaVar} from '@/shared/Pulse'

// export const colorPrimary = '#0092e6'
export const colorPrimary = '#007fff'

export const openSansFont = Open_Sans({
  variable: '--font-open_sans',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const theme = ({cssVarPrefix = 'main', dark}: {cssVarPrefix?: string; dark?: boolean}) => createTheme({
  cssVariables: {
    cssVarPrefix,
    colorSchemeSelector: 'class',
  },
  // shadows: lightShadows as any,
  // defaultColorScheme: 'light',
  spacing: 16,
  shape: {
    borderRadius: 24,
  },
  palette: {
    mode: dark ? 'dark' : 'light',
    ...dark ? {
      primary: {main: colorPrimary},
      secondary: {main: colorPrimary},
      action: {
        focus: alphaVar(colorPrimary['500'], 0.1),
        focusOpacity: 0.1,
      },
      background: {
        default: '#031525',
        paper: '#0d2136',
      },
    } : {
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
  typography: {
    fontFamily: openSansFont.style.fontFamily,
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: 'rgba(10, 20, 40, .8)',
        },
        tooltip: {
          borderRadius: '8px',
          fontSize: '0.95rem',
          // textAlign: 'justify',
          backdropFilter: 'blur(4px)',
          background: 'rgba(10, 20, 40, .8)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 'bold',
          borderRadius: 20,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: ({theme}) => ({
          borderBottom: '1px',
          borderColor: theme.palette.divider,
        }),
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({theme}) => ({
          padding: theme.spacing(1.5),
        }),
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: ({theme}) => ({
          border: '1px solid',
          borderColor: theme.palette.divider,
          // border: '1px solid rgba(255,255,255, 0.05)',
          // borderTopColor: 'rgba(255,255,255, 0.06)',
          // borderBottomColor: 'rgba(255,255,255, 0.1)',
          backgroundColor: alpha(theme.palette.background.default, .6),
          backdropFilter: 'blur(6px)',
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: t => ({
        // body: {
        //   ...dark ? {
        //     backgroundColor: 'white',
        //     backgroundImage: 'url(/ss1.png)',
        //     backgroundAttachment: 'fixed',
        //     backgroundPosition: '72% 66%',
        //     backgroundSize: '160% 160%',
        //     '&:before': {
        //       content: '" "',
        //       position: 'fixed',
        //       inset: 0,
        //       flex: 1,
        //       textAlign: 'center',
        //       backdropFilter: 'blur(2px)',
        //       background: 'radial-gradient(80% 60% at 50% 20%, rgba(13,50,120,0.7) 0%, rgba(2,12,27,0.94) 70%)',
        //     },
        //   } : {},
        // },
        '@keyframes chipPop': {
          '0%': {
            color: 'transparent',
            transform: 'scale(0.9)',
            filter: 'blur(4px)',
          },
          // '1%': {
          //   color: 'black',
          //   transform: 'scale(1)',
          //   filter: 'blur(1.5px)',
          // },
          // '2%': {
          //   boxShadow: 'none',
          //   color: 'black',
          //   transform: 'scale(0.9)',
          //   filter: 'blur(3px)',
          // },
          // '3%': {
          //   color: 'black',
          //   transform: 'scale(1)',
          //   filter: 'blur(1px)',
          // },
          // '4%': {
          //   boxShadow: 'none',
          //   color: 'black',
          //   transform: 'scale(0.95)',
          //   filter: 'blur(2px)',
          // },
          '2%': {
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
export const lightTheme = theme({})
export const darkTheme = theme({cssVarPrefix: 'dark', dark: true})
// export const darkTheme = createTheme({palette: {mode: 'dark'}})