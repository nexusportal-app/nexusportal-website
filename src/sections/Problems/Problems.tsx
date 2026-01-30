import {Section} from '@/shared/Section'
import {SectionTitle} from '@/shared/SectionTitle'
import {m} from '@/core/i18n'
import {SectionSubTitle} from '@/shared/SectionSubTitle'
import {Paragraph} from '@/shared/Paragraph'
import {Box} from '@mui/material'
import {ProblemChip} from '@/sections/Problems/ProblemChip'

const delay = [
  .5,       // 'Time-consuming manual tasks'
  0.5,      // ''
  0.1,        // `People still see data they shouldn't`
  0.5,      // 'One dashboard… ten versions'
  0.7,      // ''
  0.3,      // 'People lose access randomly'
  0.3,      // ''
  0.1,        // 'Numbers never match'
  0.1,        // ''
  0.1,      // 'Data scattered everywhere'
  0.05,     // ''
  0.1,        // 'Forms change, metrics break'
  0.2,      // 'Repetitive work for every update'
  0.2,      // 'Duplication across data'
  0.1,      // ''
].map(_ => _ + 's')

export const Problems = () => {
  return (
    <Section>
      <SectionTitle>{m.problems.question}</SectionTitle>
      <SectionSubTitle sx={{mb: 1}}>{m.problems.title}</SectionSubTitle>
      <Paragraph animate alt size="big" sx={{textAlign: 'center'}} dangerouslySetInnerHTML={{__html: m.problems.subTitle1}} />
      <Paragraph animate alt size="big" sx={{textAlign: 'center'}} dangerouslySetInnerHTML={{__html: m.problems.subTitle2}} />
      <Paragraph animate alt size="big" sx={{textAlign: 'center', mb: 3}} dangerouslySetInnerHTML={{__html: m.problems.subTitle3}} />

      <Box component="ul" sx={{
        textWrap: 'balance',
        p: 0,
        display: 'flex',
        flexWrap: 'wrap',
        m: 0,
        gap: {xs: 1, sm: 1.5},
        listStyle: 'none',
        justifyContent: 'center',
      }}>
        {m.problems.list.map((_, i) =>
          <ProblemChip key={i} children={_.title} title={_.desc} sx={{
            animationDelay: delay[i],
            animationName: _.title === '' ? '' : undefined,
          }} />,
        )}
      </Box>
    </Section>
  )
}