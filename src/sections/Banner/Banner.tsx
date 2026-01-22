import {m} from '@/core/i18n'
import {Box, Button} from '@mui/material'
import {Pulse} from '@/shared/Pulse'
import {BannerKey, revealKeyframes} from '@/sections/Banner/BannerKey'
import Upload from '@mui/icons-material/CloudDownloadOutlined'
import Settings from '@mui/icons-material/Settings'
import BarChart from '@mui/icons-material/BarChart'
import {ScrollDownButton} from '@/sections/Banner/ScrollDownButton'
import {appConf} from '@/core/conf'
import {BannerKeyLink2} from '@/sections/Banner/BannerArrow2'

export const Banner = () => {
  return (
    <Box component="section" sx={{
      zIndex: 2,
      position: 'relative',
      height: '100vh',
      color: 'white',
      overflow: 'hidden',
      backgroundImage: 'url(/ss1.png)',
      backgroundPosition: '72% 66%',
      backgroundSize: '160% 160%',
      display: 'flex',
      px: {xs: .5, sm: 2},
      // alignItems: 'center',
      ...revealKeyframes,
    }}>
      <Backdrop />
      <Box sx={{
        overflow: 'hidden',
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        justifyContent: 'center',
        gap: {xs: 2, sm: 3},
        height: '100vh',
        // alignItems: 'space-between',
        position: 'relative',
        textAlign: 'center',
      }}>
        <Box component="h1" sx={{
          m: 0,
          textShadow: '0 1px 1px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25)',
          fontWeight: '600',
          fontSize: {xs: '2.0rem', sm: '3rem', md: '3.8rem', lg: '4rem'},
          // mt: (headerHeight + 8) + 'px',
          lineHeight: '1.15',
        }}>
          {m.heroTitle1}
          <div>{m.heroTitle2}</div>
        </Box>
        <Box
          sx={{
            textWrap: 'balance',
            fontWeight: '300',
            mt: -1,
            fontSize: {xs: '1.2rem', sm: '1.5rem'},
          }}
          dangerouslySetInnerHTML={{__html: m.heroTitleSub}}
        />

        <Chip />

        <Box sx={{display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center'}}>
          <Pulse>
            <Button
              href={appConf.consoleUrl}
              sx={{color: 'primary.light'}}
              variant="outlined"
              size="large"
            >
              {m.ctaSignUp}
            </Button>
          </Pulse>
          <Pulse>
            <Button
              href={appConf.consoleUrl}
              variant="contained"
              size="large"
            >
              {m.cta}
            </Button>
          </Pulse>
        </Box>

        <Box sx={{
          position: 'absolute',
          bottom: 0, right: 0, left: 0,
          display: 'flex',
          justifyContent: 'center',
        }}>
          <ScrollDownButton sx={{mb: {xs: 1, sm: 2}}} />
        </Box>
      </Box>
    </Box>
  )
}

const Backdrop = () => {
  return (
    <Box sx={{
      position: 'absolute',
      inset: 0,
      flex: 1,
      textAlign: 'center',
      backdropFilter: 'blur(2px)',
      background: 'radial-gradient(80% 60% at 50% 20%, rgba(13,50,120,0.7) 0%, rgba(2,12,27,0.94) 70%)',
    }} />
  )
}

const Chip = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // flexDirection: {xs: 'column', sm: 'row'},
      // gap: {xs: .5, sm: .5, md: 1},
    }}>
      <BannerKey icon={Upload}>
        {m.key1}
      </BannerKey>
      <BannerKeyLink2 />
      <BannerKey icon={Settings} textAnimationDelay={10}>
        {m.key2}
      </BannerKey>
      <BannerKeyLink2 />
      <BannerKey icon={BarChart} textAnimationDelay={20}>
        {m.key3}
      </BannerKey>
    </Box>
  )
}
