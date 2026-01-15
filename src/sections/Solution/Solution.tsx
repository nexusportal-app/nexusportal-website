import {SectionTitle} from '@/shared/SectionTitle'
import {m} from '@/core/i18n'
import {SectionSubTitle} from '@/shared/SectionSubTitle'
import {Section} from '@/shared/Section'
import {Box, Grid} from '@mui/material'
import {SaveCard, saveCardAnimation} from '@/sections/Solution/SaveCard'
import IconSaveMoney from '@mui/icons-material/Savings'
import IconSaveStress from '@mui/icons-material/SelfImprovement'
import IconSaveTime from '@mui/icons-material/Timelapse'
import {Paragraph} from '@/shared/Paragraph'

export const Solution = () => {
  return (
    <Section sx={{...saveCardAnimation}}>
      <SectionTitle>{m.solution.question}</SectionTitle>
      <Grid container columnSpacing={1} alignItems="center">
        <Grid size={{xs: 12, sm: 4}}>
          <SectionSubTitle sx={{fontWeight: 700, mb: 1, textAlign: 'left'}}>{m.solution.title}</SectionSubTitle>
          <Paragraph sx={{textAlign: 'left'}}>{m.solution.desc}</Paragraph>
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