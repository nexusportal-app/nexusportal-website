import {Page} from '@/shared/Page'
import {Box, Card, CardContent, Grid, ThemeProvider} from '@mui/material'
import {m} from '@/core/i18n'
import Star from '@mui/icons-material/Star'
import {darkTheme} from '@/core/theme'
import {BoxProps} from '@mui/material/Box'
import {ContactForm} from '@/app/contact/ContactForm'

export default function ContactPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <DarkBg>
        <Page width="lg" title={m.contact_.title} subTitle={m.contact_.subTitle}>
          <Grid container spacing={1}>
            <Grid size={{xs: 12, sm: 12, md: 6}}>
              <Card>
                <ContactForm />
              </Card>
            </Grid>

            <Grid size={{xs: 12, sm: 12, md: 6}}>
              <Card>
                <CardContent sx={{display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center', textWrap: 'balance'}}>
                  <Box sx={{
                    fontWeight: 500,
                    fontSize: '1.6rem',
                  }}>
                    "{m.contact_.testimony}"
                  </Box>
                  <Box>
                    <Star sx={{color: '#fbbc02'}} />
                    <Star sx={{color: '#fbbc02'}} />
                    <Star sx={{color: '#fbbc02'}} />
                    <Star sx={{color: '#fbbc02'}} />
                    <Star sx={{color: '#fbbc02'}} />
                  </Box>
                  <Box sx={{fontSize: '1.2rem'}}>
                    <Box sx={{fontWeight: 500}}>{m.contact_.testimonyAuthor}</Box>
                    <Box sx={{opacity: .85}}>{m.contact_.testimonyRole}</Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Page>
      </DarkBg>
    </ThemeProvider>
  )
}

function DarkBg({sx, ...props}: BoxProps) {
  return (
    <Box sx={{
      position: 'relative',
      isolation: 'isolate',
      backgroundColor: 'white',
      backgroundImage: 'url(/ss1.png)',
      backgroundAttachment: 'fixed',
      backgroundPosition: '72% 66%',
      backgroundSize: '160% 160%',
      color: 'text.primary',
      '&:before': {
        content: '" "',
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        flex: 1,
        textAlign: 'center',
        backdropFilter: 'blur(2px)',
        background: 'radial-gradient(80% 60% at 50% 20%, rgba(8,40,90,0.87) 0%, rgba(2,12,27,0.94) 70%)',
      },
      ...sx,
    }} {...props} />
  )
}