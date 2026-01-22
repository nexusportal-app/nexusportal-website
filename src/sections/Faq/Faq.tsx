import {m} from '@/core/i18n'
import {FaqCard} from '@/sections/Faq/FaqCard'
import {SectionTitle} from '@/shared/SectionTitle'
import {Box} from '@mui/material'
import {Section} from '@/shared/Section'
import {Fragment} from 'react'

export const Faq = () => {
  return (
    <Section>
      <Box sx={{
        maxWidth: 760,
        margin: 'auto',
      }}>
        <SectionTitle>{m.faq.title}</SectionTitle>
        <div>
          {m.faq.list.map((section) => (
            <Box key={section.title}>
              <Box component="h4" sx={{ml: 1, color: 'text.disabled', textTransform: 'uppercase', fontSize: '.85rem', mt: 2}}>{section.title}</Box>
              {section.list.map((_, i) => (
                <FaqCard key={i} {..._} />
              ))}
            </Box>
          ))}
        </div>
      </Box>
    </Section>
  )
}
