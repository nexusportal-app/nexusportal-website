import {SectionTitle} from '@/shared/SectionTitle'
import {m} from '@/core/i18n'
import {SectionSubTitle} from '@/shared/SectionSubTitle'
import {PhoneLayout} from '@/shared/PhoneLayout'
import {Section} from '@/shared/Section'
import {Grid} from '@mui/material'
import Image from 'next/image'

const height = 580
const phoneOffset = 2

export const Design = () => {
  return (
    <Section sx={{
      pb: 0,
      '@keyframes followScroll': {
        from: {transform: 'translateY(0px)'},
        to: {transform: `translateY(${height / 2}px)`},
      },
    }}>
      <SectionTitle>{m.design.title}</SectionTitle>
      <Grid container columnSpacing={2} sx={{pt: 2}}>
        <Grid size={{xs: 12, sm: 9}} order={{xs: 2, sm: 1}} sx={{
          flex: 2,
          display: 'flex',
          // alignItems: 'center',
          position: 'relative',
          mt: {xs: 6, sm: 0},
          mb: {xs: 8, sm: 2},
          justifyContent: 'center',
        }}>
          <Image
            src="/ss3/ss-design-tablet.png"
            // fill
            height={height}
            width={height / 820 * 1180}
            alt="Design screenshot"
            style={{
              filter: 'blur(2px)',
              width: '100%',
              height: 'auto',
              borderRadius: '24px',
              objectFit: 'cover',
              objectPosition: 'center',
              margin: 'auto',
            }}
          />
          <PhoneLayout sx={{
            mt: -5,
            position: 'absolute',
            animationName: {xs: 'none', sm: 'followScroll'},
            animationDuration: '1s',
            animationTimingFunction: 'linear',
            animationFillMode: 'both',
            animationTimeline: 'view()',
            animationRange: '0% 100%',
            willChange: 'transform',
          }} />
        </Grid>
        <Grid size={{xs: 12, sm: 3}} order={{xs: 1, sm: 2}} alignSelf="center">
          <SectionSubTitle sx={{lineHeight: 1.5, textAlign: {xs: 'center', sm: 'left'}, mt: 0}} dangerouslySetInnerHTML={{__html: m.design.desc}} />
        </Grid>
      </Grid>
    </Section>
  )
}