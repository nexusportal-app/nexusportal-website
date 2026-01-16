import {Section} from '@/shared/Section'
import {SectionTitle} from '@/shared/SectionTitle'
import {m} from '@/core/i18n'
import {SectionSubTitle} from '@/shared/SectionSubTitle'
import {Paragraph} from '@/shared/Paragraph'
import {Box} from '@mui/material'
import {ProblemChip} from '@/sections/Problems/ProblemChip'

const delay = [
  1, // ''
  0.5, // 'Forms change, metrics break'
  0, // 'People still see data they shouldn’t'
  0.5, // 'One dashboard… ten versions'
  0.7, // ''
  0.3, // 'Numbers never match'
  0.4, // ''
  0,
  0.5, // 'People lose access randomly'
  0.1, // 'Data scattered everywhere'
  0.05, // 'Time-consuming manual tasks'
  0.1, // 'Repetitive work for every update'
  0.4, // ''
  0.3, // 'Duplication across data'
  0.2, // ''
].map(_ => _ + 's')

export const Problems = () => {
  return (
    <Section>
      <SectionTitle>{m.problems.question}</SectionTitle>
      <SectionSubTitle>{m.problems.title}</SectionSubTitle>
      <Paragraph sx={{textAlign: 'center', mb: 3}}>{m.problems.subTitle}</Paragraph>
      <Box component="ul" sx={{
        p: 0,
        display: 'flex',
        flexWrap: 'wrap',
        m: 0,
        gap: {xs: 1, sm: 1.5},
        listStyle: 'none',
        justifyContent: 'center',
      }}>
        {m.problems.list.map((_, i) =>
          <ProblemChip key={i} children={_} sx={{
            animationDelay: delay[i],
            animationName: _ === '' ? '' : undefined,
          }} />,
        )}
      </Box>
    </Section>
  )
}