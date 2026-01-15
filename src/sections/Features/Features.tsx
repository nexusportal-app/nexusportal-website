import {Section} from '@/shared/Section'
import {SectionTitle} from '@/shared/SectionTitle'
import {m} from '@/i18n'
import {Box} from '@mui/material'
import {FeaturesPanel} from '@/sections/Features/FeaturesPanel'
import {Obj} from '@axanc/ts-utils'
import {headerGradiant} from '@/sections/Banner/Header/Header'
import {FeaturesScrollXBtn} from '@/sections/Features/FeaturesScrollXBtn'

export const Features = () => {
  return (
    <Box sx={{
      position: 'relative',
      color: 'white',
      background: headerGradiant,

      '&::after': {
        content: '""',
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(
            rgba(255,255,255,0.04) 1px,
            transparent 1px
          ),
          linear-gradient(
            90deg,
            rgba(255,255,255,0.04) 1px,
            transparent 1px
          )
        `,
        backgroundSize: '22px 22px',
        opacity: 0.4,
      },


      //     WebkitMaskImage: `
      //   radial-gradient(120% 60px at 50% 100%, #000 60%, transparent 61%)
      // `,
      //     maskImage: `
      //   radial-gradient(120% 60px at 50% 100%, #000 60%, transparent 61%)
      // `,
    }}>
      <Section sx={{pb: 0}}>
        <SectionTitle sx={{mb: 0}}>{m.features.title}</SectionTitle>
      </Section>
      <Box sx={{pr: 0, maxWidth: '100%', overflow: 'visible'}}>
        <Box id="Features-container" sx={{
          pl: `calc((100vw - 1100px) / 2)`,
          display: 'flex',
          overflowX: 'auto',
          gap: 2,
          pt: 4,
          pr: 2,
          pb: 2,
        }}>
          {Obj.entries(m.features.list).map(([key, _], i) => (
            <FeaturesPanel key={key} title={_.title} desc={_.desc} imageSrc={'/ss3/ss-' + key + '.png'} mirror={i % 2 === 0} />
          ))}
        </Box>
        <Box sx={{display: 'flex', gap: 1, pb: 2, alignItems: 'center', justifyContent: 'center'}}>
          <FeaturesScrollXBtn direction="left" />
          <FeaturesScrollXBtn direction="right" />
        </Box>
      </Box>
    </Box>
  )
}