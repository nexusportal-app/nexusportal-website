import {Box} from '@mui/material'
import {BoxProps} from '@mui/material/Box'
import {people} from '@/sections/Testimonials/people'
import Image from 'next/image'
import PersonIcon from '@mui/icons-material/Person'

export const shortTestimonialStyle = {
  backgroundColor: `#fff`,
}

const avatarSize = 38

export const ShortTestimonial = ({
  name,
  content,
  index,
  sx,
  ...props
}: BoxProps & {
  index: number
  name: keyof typeof people
  content: string
}) => {
  return (
    <Box
      sx={{
        fontSize: '0.875rem',
        flex: '0 0 auto',
        textAlign: 'left',
        color: 'rgba(0,0,0,.975)',
        background: shortTestimonialStyle.backgroundColor,
        // background: 'rgba(0, 0, 0, .1)',
        // backdropFilter: 'blur(2px)',
        // border: '1px solid #ffffff14',
        borderRadius: 0.5,
        p: 1,
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        ...sx,
      }}
      {...props}
    >
      <Box
        sx={{
          flex: 1,
          textAlign: 'justify',
          fontWeight: 500,
        }}
      >
        <TestimonialQuote sx={{mr: 0.25}}>“</TestimonialQuote>
        <Box
          component="span"
          dangerouslySetInnerHTML={{__html: content}}
          sx={{
            fontWeight: 400,
            color: 'rgba(0,0,0,.7)',
            '& b': {color: 'rgb(0, 0, 0)', fontWeight: 500},
          }}
        />
        <TestimonialQuote sx={{ml: 0.25}}>”</TestimonialQuote>
      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', mt: 0.5}}>
        <Box sx={{mt: 0.5}}>
          {people[name].avatar ? (
            <Image
              src={people[name].avatar}
              alt={name}
              height={avatarSize}
              width={avatarSize}
              style={{borderRadius: '50%'}}
            />
          ) : (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: avatarSize,
                justifyContent: 'center',
                backgroundColor: 'grey.300',
                height: avatarSize,
                width: avatarSize,
              }}
            >
              <PersonIcon color="disabled" />
            </Box>
          )}
        </Box>
        <Box sx={{ml: 0.5, borderTop: '1px solid', pt: 0.5, borderColor: 'divider', flex: 1}}>
          <Box component="span" sx={{fontWeight: 'bold'}}>
            {people[name].name}
          </Box>
          <Box sx={{opacity: '.7'}}>{people[name].job}</Box>
        </Box>
      </Box>
    </Box>
  )
}

export const TestimonialQuote = ({sx, ...props}: BoxProps) => {
  return (
    <Box
      component="span"
      sx={{
        verticalAlign: 'middle',
        top: {xs: 6, sm: 16},
        left: 16,
        opacity: 0.3,
        lineHeight: '0rem',
        fontWeight: 'bold',
        fontSize: '1.6rem',
        ...sx,
      }}
      {...props}
    />
  )
}
