import {Box} from '@mui/material'
import {BoxProps} from '@mui/material/Box'
import Image from 'next/image'
import style from './FeaturesPanel.module.css'
import {headerGradiant} from '@/sections/Header/Header'
import {SectionSubTitle} from '@/shared/SectionSubTitle'
import {Paragraph} from '@/shared/Paragraph'

type Props = BoxProps & {
  title: string
  desc: string
  imageSrc: string
}

export const FeaturesPanel = ({
  imageSrc,
  title,
  desc,
}: Props) => {
  return (
    <Box
      component="article"
      sx={{
        flex: '0 0 80%',
        width: '100%',
        minWidth: 930,
        px: 1,
        pt: 1,
        pb: 2,
        // py: 0,
        // p: 1,
        // p: {xs: 1, sm: 1},
        gap: {xs: 1, sm: 2},
        display: 'flex',
        alignItems: 'center',
        borderRadius: 1,
        backdropFilter: 'blur(3px)',
        border: '1px solid #ffffff14',
        overflow: 'hidden',
        background: 'rgba(0, 0, 0, .1)',
        // zIndex: 10,
        // flexDirection: mirror ? 'row-reverse' : undefined,
        // backgroundColor: 'background.paper',
        // backgroundColor: 'black',
        // background: headerGradiant,
      }}>
      <Box sx={{position: 'relative', borderRadius: '10px', mb: -2}}>
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          top: '45%',
          background: `linear-gradient(to top, #131d2e 0%, rgba(0,0,0,0) 100% )`,
        }}></Box>
        <Image
          className={style.img}
          alt={title}
          src={imageSrc}
          width={1180}
          height={820}
        />
      </Box>
      <Box sx={{color: 'white'}}>
        <SectionSubTitle sx={{textAlign: 'left', fontWeight: 700, mb: .5}}>{title}</SectionSubTitle>
        <Paragraph
          size="big"
          sx={{
            fontWeight: '500',
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