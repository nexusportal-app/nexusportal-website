import {SectionTitle} from '@/shared/SectionTitle'
import {m} from '@/core/i18n'
import {Box} from '@mui/material'
import {SectionSubTitle} from '@/shared/SectionSubTitle'
import {Section, sectionMargin} from '@/shared/Section'
import {Obj} from '@axanc/ts-utils'
import {ShortTestimonial} from '@/sections/Banner/ShortTestimonial'

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
  const list = Obj.entries(m.testimonial.list)
  return (
    <Section
      sx={{
        display: 'flex',
        py: 0,
        pb: sectionMargin,
        alignItems: 'center',
        flexDirection: {xs: 'column', md: 'row'},
        ...liquidLineAnimation,
      }}
    >
      <Box sx={{flex: 1}}>
        <SectionTitle id="testimonials" sx={{mb: 0, p: 0}}>
          {m.testimonial.title}
        </SectionTitle>
        <SectionSubTitle sx={{m: 0}}>{m.testimonial.desc}</SectionSubTitle>
      </Box>
      <Box
        sx={{
          borderRadius: 0.5,
          borderTopRightRadius: {xs: undefined, sm: 0},
          borderTopLeftRadius: {xs: undefined, sm: 0},
          overflow: 'hidden',
          flex: 1,
          mx: {xs: 1, md: 2},
          position: 'relative',
        }}
      >
        <Box
          sx={{
            overflow: 'auto',
            pt: 1,
            height: 600,
            gap: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {list.map(([name, {content}], i) => (
            <ShortTestimonial key={name + i} index={i} content={content} name={name} />
          ))}
        </Box>
      </Box>
      {/*<CarouselContainer id="Testimonials-container" sx={{py: 1}}>*/}
      {/*</CarouselContainer>*/}
    </Section>
  )
}
