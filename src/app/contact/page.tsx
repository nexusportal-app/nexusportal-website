import {Page} from '@/shared/Page'
import {Box, Card, CardContent, Divider, Grid, ThemeProvider} from '@mui/material'
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
          <ContactContent />
        </Page>
      </DarkBg>
    </ThemeProvider>
  )
}

export function ContactContent() {
  return (
    <Grid container spacing={1}>
      <Grid size={{xs: 12, sm: 12, md: 6}}>
        <Card elevation={2}>
          <ContactForm />
        </Card>
      </Grid>

      <Grid size={{xs: 12, sm: 12, md: 6}} sx={{flexDirection: 'column', display: 'flex'}}>
        <Card sx={{mb: 1}}>
          <CardContent sx={{display: 'flex', flexDirection: 'column', gap: 1, textWrap: 'balance'}}>
            <Box sx={{fontWeight: 600, color: 'text.secondary', textAlign: 'center'}}>
              {m.contact_.arguments.list.map((_, i) =>
                <Box key={i} sx={{fontSize: '1.2rem', mb: .5}}>
                  {_}
                </Box>,
              )}
              {/*<Box sx={{fontWeight: 600, fontSize: '1.2rem'}}>{m.contact_.arguments.title}</Box>*/}
              {/*<Box component="ul" sx={{mt: .5, fontSize: '1.1rem', 'li': {mb: .5}}}>*/}
              {/*  {m.contact_.arguments.list.map((_, i) =>*/}
              {/*    <li key={i}>*/}
              {/*      {_}*/}
              {/*    </li>,*/}
              {/*  )}*/}
              {/*</Box>*/}
            </Box>
            <Divider sx={{my: .5}} />
            <Box sx={{fontWeight: 500}}>
              <Box sx={{fontWeight: 600, fontSize: '1.2rem'}}>{m.contact_.targets.title}</Box>
              <Box component="ul" sx={{mt: .5, fontSize: '1.1rem', 'li': {mb: .5}}}>
                {m.contact_.targets.list.map((_, i) =>
                  <li key={i}>
                    {_}
                  </li>,
                )}
              </Box>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{flex: 1, display: 'flex', alignItems: 'center'}}>
          <CardContent>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center'}}>
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
              <Box sx={{fontSize: '1.2rem', color: 'text.secondary'}}>
                <Box sx={{fontWeight: 500}}>{m.contact_.testimonyAuthor}</Box>
                <Box sx={{opacity: .85}}>{m.contact_.testimonyRole}</Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
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