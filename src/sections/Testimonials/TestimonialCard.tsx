import {Box} from '@mui/material'
import {people} from '@/sections/Testimonials/people'
import {TestimonialQuote} from '@/sections/Banner/ShortTestimonial'

export const TestimonialCard = ({name, content, index}: {
  index: number,
  name: keyof typeof people,
  content: string
}) => {
  return (
    <Box sx={{
      // zIndex: 10,
      flex: '0 0 auto',
      // overflow: 'hidden',
      maxWidth: 'min(100vw, 600px)',
      background: `radial-gradient(94.21% 78.40% at 50.00% 29.91%, rgba(43, 94, 180, 0.70), rgba(13, 16, 35, 0.42))`,
      boxShadow: '0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 0px 20px 3px rgba(7, 13, 79, 0.10) , 0px 0px 40px 20px rgba(85, 0, 98, 0.10) , 0 0 0 1px rgba(255, 255, 255, 0.06) inset',
      // background: 'radial-gradient(circle at top right, #0052a766 0%, transparent 70%), rgba(0,0,0,.2)',
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
      <Laser index={index} />
      <Box sx={{
        flex: 1, textAlign: 'justify',
        fontSize: name === 'romane' || name === 'alix' ? '.9rem' : '1rem',
        fontWeight: 500,
      }}>
        <TestimonialQuote sx={{mr: .25}}>“</TestimonialQuote>
        <Box
          component="span"
          sx={{
            fontWeight: 400,
            color: 'rgba(255,255,255,.5)',
            '& b': {color: '#fff !important', fontWeight: 500},
          }}
          dangerouslySetInnerHTML={{__html: content}}
        />
        <TestimonialQuote sx={{ml: .25}}>”</TestimonialQuote>
      </Box>
      <Box sx={{borderTop: '1px solid #ffffff14', mt: 1, pt: 1, opacity: .8}}>
        <Box component="span" sx={{fontWeight: 'bold'}}>{people[name].name}</Box>
        <Box sx={{mx: .5}} component="span">•</Box>
        {people[name].job}
      </Box>
    </Box>
  )
}

const Laser = ({index}: {index: number}) => {
  return (
    <>
      <Box sx={{
        top: 0,
        right: '10%',
        left: '70%',
        height: '1px',
        position: 'absolute',
        background: `linear-gradient( to right, #ffffff14 0%, #a1f6ff 45%, #ffffff 50%, #a1f6ff 55%, #ffffff14 100% )`,
      }} />
      <Box sx={{
        position: 'absolute',
        top: 0,
        right: '10%',
        left: '70%',
        height: '4px',
        background: `linear-gradient( to right, #ffffff00 0%, #a1f6ff 45%, #ffffff 50%, #a1f6ff 55%, #ffffff00 100% )`,
        filter: 'blur(6px)',
        opacity: 0.9,
        transformOrigin: 'right center',
        animation: 'liquidLineFlow 7.8s linear infinite',
        animationDelay: `${index * 2}s`,
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute',
        top: 0,
        right: '10%',
        left: '70%',
        height: '1px',
        willChange: 'transform',
        background: `linear-gradient( to right, #ffffff14 0%, #a1f6ff 45%, #ffffff 50%, #a1f6ff 55%, #ffffff14 100% )`,
        transformOrigin: 'right center',
        animation: 'liquidLineFlow 7.8s linear infinite',
        animationDelay: `${index * 2}s`,
      }} />
    </>
  )
}