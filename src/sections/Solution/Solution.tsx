import {SectionTitle} from '@/shared/SectionTitle'
import {m} from '@/core/i18n'
import {Section} from '@/shared/Section'
import {Box, Grid} from '@mui/material'
import {SaveCard} from '@/sections/Solution/SaveCard'
import IconSaveMoney from '@mui/icons-material/Savings'
import IconSaveStress from '@mui/icons-material/SelfImprovement'
import IconSaveTime from '@mui/icons-material/Timelapse'
import {Paragraph} from '@/shared/Paragraph'

export const Solution = () => {
  return (
    <Section>
      <SectionTitle>{m.solution.question}</SectionTitle>
      <Grid container columnSpacing={1} alignItems="center">
        <Grid size={{xs: 12, sm: 5}}>
          <SectionTitle sx={{textAlign: {xs: 'center', sm: 'left'}, fontWeight: 700, mb: 1}}>{m.solution.title}</SectionTitle>
          <Paragraph alt size="big" sx={{mb: {xs: 2, sm: 0}, textAlign: {xs: 'center', sm: 'left'}, fontWeight: 500}} dangerouslySetInnerHTML={{__html: m.solution.desc}} />
        </Grid>
        <Grid size={{xs: 12, sm: 7}}>
          <Box component="ul" sx={{
            display: 'flex',
            borderLeft: '1px solid',
            borderColor: {xs: 'transparent', sm: 'divider'},
            flexDirection: 'column',
            gap: .5,
            p: 0,
            pl: {xs: 0, sm: 1},
            m: 0,
            listStyle: 'none',
            justifyContent: 'center',
          }}>
            <SaveCard icon={IconSaveTime} head={m.solution.saveTime.title}>{m.solution.saveTime.desc}</SaveCard>
            <SaveCard icon={IconSaveMoney} head={m.solution.saveMoney.title}>{m.solution.saveMoney.desc}</SaveCard>
            <SaveCard icon={IconSaveStress} head={m.solution.saveStress.title}>{m.solution.saveStress.desc}</SaveCard>
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}