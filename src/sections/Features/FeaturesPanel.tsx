import {Box} from '@mui/material'
import {BoxProps} from '@mui/material/Box'
import Image from 'next/image'
import style from './FeaturesPanel.module.css'
import {SectionSubTitle} from '@/shared/SectionSubTitle'
import {Paragraph} from '@/shared/Paragraph'
import {ReactNode} from 'react'

type Props = BoxProps & {
  title: string
  desc: string
  imageSrc: string
  icon: ReactNode
  index: number
  isNew?: boolean
}

const templates = {
  blue: {
    background: `radial-gradient(94.21% 78.40% at 50.00% 29.91%, rgba(43, 94, 180, 0.70), rgba(13, 16, 35, 0.42))`,
    boxShadow: '0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 0px 20px 3px rgba(7, 13, 79, 0.10) , 0px 0px 40px 20px rgba(85, 0, 98, 0.10) , 0 0 0 1px rgba(255, 255, 255, 0.06) inset',
  },
  purple: {
    background: `linear-gradient(138deg, rgba(32, 35, 91, 0.70) 22.00%, rgba(7, 9, 33, 0.70) 82.00%)`,
    boxShadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 0px 20px 3px rgba(7, 13, 79, 0.05), 0px 0px 40px 20px rgba(7, 13, 79, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.06) inset`,
  },
  green: {
    background: `radial-gradient(84.35% 70.19% at 50.00% 38.11%, rgba(2, 96, 101, 0.57), rgba(5, 136, 178, 0.06))`,
    boxShadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 30px 50px 0px rgba(0, 0, 0, 0.40), 0px 4px 24px 0px rgba(3, 122, 129, 0.09), 0 0 0 1px rgba(255, 255, 255, 0.06) inset`,
  },
  deepBlue: {
    background: `radial-gradient(90.35% 49.25% at 50.00% 59.06%, rgba(2, 61, 114, 0.70), rgba(5, 11, 28, 0.42))`,
    boxShadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 30px 50px 0px rgba(0, 0, 0, 0.40), 0px 4px 24px 0px rgba(3, 30, 129, 0.09), 0 0 0 1px rgba(255, 255, 255, 0.06) inset`,
  },
  teal: {
    background: `radial-gradient(181.77% 70.19% at 50.00% 38.11%, rgba(3, 91, 155, 0.70), rgba(0, 69, 150, 0.03))`,
    boxShadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 30px 50px 0px rgba(0, 0, 0, 0.40), 0px 4px 24px 0px rgba(3, 23, 129, 0.09), 0 0 0 1px rgba(255, 255, 255, 0.06) inset`,
  },
  pink: {
    background: `radial-gradient(86.88% 75.47% at 50.00% 24.53%, rgba(82, 48, 145, 0.70), rgba(26, 11, 51, 0.14))`,
    boxShadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.10) inset, 0px 30px 50px 0px rgba(0, 0, 0, 0.40), 0px 4px 24px 0px rgba(51, 3, 129, 0.09), 0 0 0 1px rgba(255, 255, 255, 0.06) inset`,
  },
}

export const FeaturesPanel = ({
  imageSrc,
  title,
  icon,
  desc,
  index,
  isNew,
}: Props) => {
  const template = {
    0: templates.purple,
    1: templates.blue,
    2: templates.green,
    3: templates.deepBlue,
    4: templates.pink,
    5: templates.teal,
  }[index % 6]
  return (
    <Box
      component="article"
      sx={{
        flex: {xs: '0 0 calc(100% - var(--main-spacing))' , md: '0 0 40%'},
        width: '100%',
        px: 1,
        pt: 1,
        pb: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        borderRadius: 1,
        backdropFilter: 'blur(1px)',
        border: '1px solid #ffffff14',
        overflow: 'hidden',
        ...template,
      }}>
      <Box sx={{position: 'relative', borderRadius: '10px', overflow: 'hidden', width: '100%'}}>
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          top: '40%',
          background: `linear-gradient(to top, #131d2e 0%, rgba(0,0,0,0) 100% )`,
        }}></Box>
        <Image
          className={style.img}
          alt={title}
          style={{width: '100%', height: 'auto'}}
          src={imageSrc}
          width={1180}
          height={820}
        />
      </Box>
      <Box sx={{color: 'white'}}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1, mt: 1, mb: .5}}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: .5,
            borderRadius: '8px',
            opacity: .8,
            ...template,
          }}>{icon}</Box>
          <SectionSubTitle sx={{textAlign: 'left', fontWeight: 700, mt: 0, mb: 0}}>{title}</SectionSubTitle>
          {/*{isNew && (*/}
          {/*  <Box*/}
          {/*    sx={{*/}
          {/*      opacity: .9,*/}
          {/*      fontWeight: 'bold',*/}
          {/*      background: 'white',*/}
          {/*      color: 'black',*/}
          {/*      borderRadius: '6px',*/}
          {/*      px: .5,*/}
          {/*    }}*/}
          {/*  >NEW!</Box>*/}
          {/*)}*/}
        </Box>
        <Paragraph
          sx={{
            mb: 0,
            fontWeight: '500',
            lineHeight: 1.5,
            minHeight: '6em',
            color: 'rgba(255,255,255,.6)',
            'b': {
              fontWeight: 500,
              color: 'rgba(255,255,255,1)',
            },
          }}
          dangerouslySetInnerHTML={{__html: desc}}
        />
      </Box>
    </Box>
  )
}