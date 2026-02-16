import {SectionTitle} from '@/shared/SectionTitle'
import {m} from '@/core/i18n'
import {Box} from '@mui/material'
import {CarouselContainer} from '@/sections/Features/Features'
import {SectionSubTitle} from '@/shared/SectionSubTitle'
import {sectionMargin} from '@/shared/Section'
import {TestimonialCard} from '@/sections/Testimonials/TestimonialCard'

export const liquidLineAnimation = {
  // '@keyframes liquidLineFlow': {
  //   '0%': {transform: 'translateX(0%) scaleX(1)'},
  //   '40%': {transform: 'translateX(-40%) scaleX(0.6)'},
  //   '60%': {transform: 'translateX(-70%) scaleX(0.9)'},
  //   '100%': {transform: 'translateX(-90%) scaleX(0.2)'},
  // }
  '@keyframes liquidLineFlow': {
    '0%': {
      right: '10%',
      left: '70%',
    },
    '16%': {
      right: '20%',
      left: '30%',
    },
    '20%': {
      right: '50%',
      left: '15%',
    },
    '30%': {
      right: '95%',
      left: '5%',
    },
    '100%': {
      right: '95%',
      left: '5%',
    },
  },
}

export const Testimonials = () => {
  return (
    <Box component="section" sx={{
      pt: sectionMargin,
      position: 'relative',
      ...liquidLineAnimation,
    }}>
      <SectionTitle id="testimonials" sx={{m: 0, p: 0}}>{m.testimonial.title}</SectionTitle>
      <SectionSubTitle sx={{mb: 0}}>{m.testimonial.desc}</SectionSubTitle>
      <CarouselContainer id="Testimonials-container" sx={{py: 1}}>
        {m.testimonial.list.map((_, i) => <TestimonialCard key={_.author} index={i} testimonial={_} />)}
      </CarouselContainer>
    </Box>
  )
}

