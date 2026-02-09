import {SectionTitle} from '@/shared/SectionTitle'
import {m} from '@/core/i18n'
import {Box} from '@mui/material'
import {CarouselContainer} from '@/sections/Features/Features'
import {SectionSubTitle} from '@/shared/SectionSubTitle'
import {sectionMargin} from '@/shared/Section'

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
      <CarouselContainer id="Testimonials-container">
        {m.testimonial.list.map((_, i) => <TestimonialCard key={_.author} index={i} testimonial={_} />)}
      </CarouselContainer>
    </Box>
  )
}

const TestimonialCard = ({testimonial, index}: {
  index: number,
  testimonial: {
    author: string
    job: string
    content: string
  }
}) => {
  return (
    <Box sx={{
      zIndex: 10,
      flex: '0 0 auto',
      // overflow: 'hidden',
      maxWidth: 'min(100vw, 600px)',
      background: 'radial-gradient(circle at top right, #0052a766 0%, transparent 70%), rgba(0,0,0,.2)',
      // background: 'linear-gradient(135deg, #0052a766, rgba(0, 0, 0, .1))',
      // background: 'linear-gradient(135deg, #020c1b80, rgba(0, 0, 0, .1))',
      // background: 'linear-gradient(135deg, #0099ff, rgba(0, 0, 0, .1))',
      // background: 'rgba(0, 0, 0, .1)',
      borderRadius: 1,
      backdropFilter: 'blur(1px)',
      border: '1px solid #ffffff14',
      p: {xs: 1, sm: 2},
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
    }}>
      <Box sx={{
        top: -1,
        right: '10%',
        left: '70%',
        height: '1px',
        position: 'absolute',
        background: `linear-gradient( to right, #ffffff14 0%, #a1f6ff 45%, #ffffff 50%, #a1f6ff 55%, #ffffff14 100% )`,
      }} />
      <Box sx={{
        position: 'absolute',
        top: -1,
        right: '10%',
        left: '70%',
        height: '1px',
        willChange: 'transform',
        background: `linear-gradient( to right, #ffffff14 0%, #a1f6ff 45%, #ffffff 50%, #a1f6ff 55%, #ffffff14 100% )`,
        transformOrigin: 'right center',
        animation: 'liquidLineFlow 7.8s linear infinite',
        animationDelay: `${index * 2}s`,
      }} />
      <Box sx={{
        flex: 1, textAlign: 'justify',
        fontSize: testimonial.author === 'Romane Breton' ? '.9rem' : '1rem',
        fontWeight: 500,
      }}>
        <Box component="span" sx={{position: 'absolute', top: {xs: 6, sm: 16}, left: 16, opacity: .4, lineHeight: '1.2rem', fontWeight: 'bold', fontSize: '1.6rem'}}>“</Box>
        <span dangerouslySetInnerHTML={{__html: testimonial.content}} />
        <Box component="span" sx={{opacity: .4, lineHeight: '1.2rem', fontWeight: 'bold', fontSize: '1.6rem'}}>”</Box>
      </Box>
      <Box sx={{borderTop: '1px solid #ffffff14', mt: 1, pt: 1, opacity: .8}}>
        <Box component="span" sx={{fontWeight: 'bold'}}>{testimonial.author}</Box>
        <Box sx={{mx: .5}} component="span">•</Box>
        {testimonial.job}
      </Box>
    </Box>
  )
}
