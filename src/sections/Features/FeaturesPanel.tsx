import {Box} from '@mui/material'
import {BoxProps} from '@mui/material/Box'
import Image from 'next/image'
import style from './FeaturesPanel.module.css'
import {headerGradiant} from '@/sections/Banner/Header/Header'
import {SectionSubTitle} from '@/shared/SectionSubTitle'

type Props = BoxProps & {
  mirror?: boolean
  title: string
  desc: string
  imageSrc: string
}

export const FeaturesPanel = ({
  imageSrc,
  title,
  desc,
  mirror,
}: Props) => {
  return (
    <Box sx={{
      flex: '0 0 80%',
      width: '100%',
      minWidth: 900,
      p: 2,
      gap: 2,
      display: 'flex',
      alignItems: 'center',
      borderRadius: 1,
      backdropFilter: 'blur(2px)',
      border: '1px solid #ffffff14',
      overflow: 'hidden',
      background: 'rgba(0, 0, 0, .1)',
      zIndex: 10,
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
          top: '40%',
          background: `linear-gradient(to top, #131d2e 0%, rgba(0,0,0,0) 100% )`,
        }}></Box>
        <Image
          className={style.img}
          alt={title}
          src={imageSrc}
          width={400}
          height={500}
        />
      </Box>
      <Box sx={{color: 'white'}}>
        <SectionSubTitle sx={{textAlign: 'left', fontWeight: 700, mb: .5}}>{title}</SectionSubTitle>
        <Box sx={{fontWeight: '500', fontSize: '1.2rem'}}>{desc}</Box>
      </Box>
    </Box>
  )
}