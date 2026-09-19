import {Box} from '@mui/material'

export const ShortTestimonial = ({testimonial, index}: {
  index: number,
  testimonial: {
    author: string
    job: string
    content: string
  }
}) => {
  return (
    <Box sx={{
      fontSize: '0.875rem',
      flex: '0 0 auto',
      width: 360,
      maxWidth: '80vw',
      textAlign: 'left',
      // background: 'rgba(255, 255, 255, .1)',
      background: 'rgba(0, 0, 0, .1)',
      // background: `radial-gradient(94.21% 78.40% at 50.00% 29.91%, rgba(43, 94, 180, 0.70), rgba(13, 16, 35, 0.42))`,
      borderRadius: .5,
      backdropFilter: 'blur(2px)',
      border: '1px solid #ffffff14',
      p: 1,
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
    }}>
      <Box sx={{
        flex: 1, textAlign: 'justify',
        fontWeight: 500,
      }}>
        <Box component="span"
             sx={{verticalAlign: 'middle', mr: .25, top: {xs: 6, sm: 16}, left: 16, opacity: .4, lineHeight: '0rem', fontWeight: 'bold', fontSize: '1.6rem'}}>“</Box>
        <Box component="span"
             sx={{fontWeight: 400, color: 'rgba(255,255,255,.7)', '& b': {color: '#fff !important', fontWeight: 500}}}
             dangerouslySetInnerHTML={{__html: testimonial.content}}
        />
        <Box component="span" sx={{ml: .25, verticalAlign: 'middle', mt: .25, opacity: .4, lineHeight: '.0rem', fontWeight: 'bold', fontSize: '1.6rem'}}>”</Box>
      </Box>
      <Box sx={{borderTop: '1px solid #ffffff14', mt: .5, pt: .5, opacity: .8}}>
        <Box component="span" sx={{fontWeight: 'bold'}}>{testimonial.author}</Box>
        <Box sx={{mx: .5}} component="span">•</Box>
        {testimonial.job}
      </Box>
    </Box>
  )
}