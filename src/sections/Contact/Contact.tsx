import {Section} from '@/shared/Section'
import {Box} from '@mui/material'
import {m} from '@/core/i18n'
import {SectionTitle} from '@/shared/SectionTitle'
import {SectionSubTitle} from '@/shared/SectionSubTitle'

export const Contact = () => {
  return (
    <Section id="contact" sx={{scrollMarginTop: 80}}>
      <Box sx={{
        maxWidth: 760,
        position: 'relative',
        margin: 'auto',
      }}>
        {/*<Box sx={{*/}
        {/*  position: 'absolute', top: 50,*/}
        {/*  right: 0,*/}
        {/*  left: 0,*/}
        {/*  display: 'flex',*/}
        {/*  justifyContent: 'center',*/}
        {/*}}>*/}

        {/*  <Icon sx={{fontSize: 250, color: 'rgba(0, 0, 0, .06)'}} />*/}
        {/*</Box>*/}
        <SectionTitle>{m.contact.title}</SectionTitle>
        <SectionSubTitle sx={{
          'a': {
            fontWeight: 'bold',
            background: 'linear-gradient(270deg, rgb(26,90,220), rgba(4,22,47))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          },
        }} dangerouslySetInnerHTML={{__html: m.contact.paragraph}} />
      </Box>
    </Section>
  )
}
