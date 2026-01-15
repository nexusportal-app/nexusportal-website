import {m} from '@/i18n'
import {FaqCard} from '@/sections/Faq/FaqCard'
import {SectionTitle} from '@/shared/SectionTitle'
import {Box} from '@mui/material'
import {Section} from '@/shared/Section'

export const Faq = () => {
  return (
    <Section>
      <Box sx={{
        maxWidth: 760,
        margin: 'auto',
      }}>
        <SectionTitle>{m.faq.title}</SectionTitle>
        <div>
          {m.faq.list.map((_, i) => (
            <FaqCard key={i} {..._} />
          ))}
        </div>
      </Box>
    </Section>
  )
}
