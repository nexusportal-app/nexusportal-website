import {SectionTitle} from '@/shared/SectionTitle'
import {m} from '@/core/i18n'
import {Box} from '@mui/material'
import {FeaturesPanel} from '@/sections/Features/FeaturesPanel'
import {Obj} from '@axanc/ts-utils'
import {headerGradiant} from '@/sections/Header/Header'
import {FeaturesScrollXBtn} from '@/sections/Features/FeaturesScrollXBtn'
import {sectionMargin} from '@/shared/Section'

export const Features = () => {
  return (
    <Box component="section" sx={{
      position: 'relative',
      color: 'white',
      background: headerGradiant,
      pt: sectionMargin,
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
    }}>
      <SectionTitle sx={{m: 0, mb: 0, p: 0}}>{m.features.title}</SectionTitle>
      <Box sx={{pr: 0, maxWidth: '100%', overflow: 'visible'}}>
        <Box id="Features-container" sx={{
          pl: `calc((100vw - 1100px) / 2)`,
          display: 'flex',
          overflowX: 'auto',
          gap: {xs: 1, sm: 2},
          pt: 4,
          pr: 2,
          pb: 4,
        }}>
          {Obj.entries(m.features.list).map(([key, _]) => (
            <FeaturesPanel key={key} title={_.title} desc={_.desc} imageSrc={'/ss3/ss-' + key + '.png'} />
          ))}
        </Box>
        <Box sx={{display: 'flex', gap: 1, pb: 4, alignItems: 'center', justifyContent: 'center'}}>
          <FeaturesScrollXBtn direction="left" />
          <FeaturesScrollXBtn direction="right" />
        </Box>
      </Box>
    </Box>
  )
}