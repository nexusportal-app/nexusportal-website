import {m} from '@/i18n'
import {Box, Button} from '@mui/material'
import {Pulse} from '@/shared/Pulse'
import {BannerKey, revealKeyframes} from '@/sections/Banner/BannerKey'
import {BannerArrow} from '@/sections/Banner/BannerArrow'
import Upload from '@mui/icons-material/CloudDownloadOutlined'
import Settings from '@mui/icons-material/Settings'
import BarChart from '@mui/icons-material/BarChart'
import {ScrollDownButton} from '@/sections/Banner/ScrollDownButton'

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
      px: 2,
      display: 'flex',
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
        <Box sx={{
          textShadow: '0 1px 1px rgba(0, 0, 0, 0.35), 0 4px 12px rgba(0, 0, 0, 0.25)',
          fontWeight: '600',
          fontSize: {xs: '3.3rem', sm: '4.6rem'},
          // mt: (headerHeight + 8) + 'px',
          lineHeight: '1.15',
        }}>
          {m.heroTitle1}
          <div>{m.heroTitle2}</div>
        </Box>
        <Box sx={{
          fontWeight: '500',
          fontSize: {xs: '1.2rem', sm: '1.4rem'},
        }}>
          {m.heroTitleSub}
        </Box>
        <Chip />

        <Box sx={{display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center'}}>
          <Pulse>
            <Button
              variant="outlined"
              size="large"
              sx={{color: 'white'}}
            >
              {m.ctaSignUp}
            </Button>
          </Pulse>
          <Pulse>
            <Button
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
      gap: {xs: .5, sm: 1},
    }}>
      <BannerKey icon={Upload}>
        {m.key1}
      </BannerKey>

      <Box sx={{display: {xs: 'none', sm: 'block'}}}>
        <BannerArrow sx={{animationDelay: '0s'}} />
        <BannerArrow sx={{ml: -1.8, animationDelay: '.3s'}} />
      </Box>

      <BannerKey icon={Settings}>
        {m.key2}
      </BannerKey>

      <Box sx={{display: {xs: 'none', sm: 'block'}}}>
        <BannerArrow sx={{animationDelay: '.6s'}} />
        <BannerArrow sx={{ml: -1.8, animationDelay: '0.9s'}} />
      </Box>

      <BannerKey icon={BarChart}>
        {m.key3}
      </BannerKey>
    </Box>
  )
}