import {Box} from '@mui/material'
import {BoxProps} from '@mui/material/Box'
import Image from 'next/image'

const radius = 32
const frameBorder = 2

export const PhoneLayout = ({
  width = 210,
  sx,
}: {
  width?: number
} & BoxProps) => {
  const screenWidth = width
  return (
    <Box sx={{
      height: width / 430 * 902,
      width: width,
      p: '3px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      borderRadius: radius + 'px',

      // 1
      // border: '1px solid #727989',
      // background: `linear-gradient(
      //   135deg,
      //   #e6eaf8 0%,
      //   #7e8395 55%,
      //   #b6bccd 100%
      // )`,
      // boxShadow: ` 0 12px 40px rgba(0, 0, 0, 0.7), 0 0 60px rgba(40, 120, 255, 0.15) `,

      // 2
//       background: `
//   linear-gradient(
//     135deg,
//     #f3f6ff 0%,
//     #c7ccda 18%,
//     #8b90a2 45%,
//     #6e7386 55%,
//     #a9afc1 72%,
//     #f1f4ff 100%
//   )
// `,
//       boxShadow: `
//   inset 0 1px 0 rgba(255,255,255,0.75),
//   inset 0 -1px 2px rgba(0,0,0,0.35),
//   0 18px 50px rgba(0,0,0,0.75),
//   0 0 60px rgba(120,160,255,0.18)
// `,
      backgroundImage: ` linear-gradient( 135deg, #f3f6ff 0%, #8b90a2 50%, #f3f6ff 100% ), repeating-linear-gradient( 90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 3px ) `,
      border: '1px solid rgba(0,0,0,0.35)',
      boxShadow: ` inset 1px 0 1px rgba(255,255,255,0.4), inset -1px 0 2px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.8)`,
      ...sx,
    }}>
      <Antena sx={{top: '15%', left: -1, backgroundColor: '#afb5c4'}} />
      <Antena sx={{bottom: '10%', left: -1, backgroundColor: '#858693'}} />
      <Antena sx={{top: '15%', right: -1, backgroundColor: '#505155'}} />
      <Antena sx={{bottom: '10%', right: -1, backgroundColor: '#858693'}} />
      <Antena sx={{width: antenaThickness, height: frameBorder, top: '0', right: `calc(50% - ${antenaThickness}px / 2)`, backgroundColor: '#858693'}} />
      <Button sx={{top: '20%', height: '6%'}} />
      <Button sx={{top: '28%', height: '6%'}} />
      <Button sx={{top: '40%', height: '10%'}} />
      <Box sx={{
        position: 'absolute',
        borderRadius: (radius - 4) + 'px',
        top: frameBorder,
        right: frameBorder,
        left: frameBorder,
        bottom: frameBorder,
        backgroundColor: 'black',
        overflow: 'hidden',
      }}>
        <Box sx={{
          borderBottomLeftRadius: (radius - 6) + 'px',
          borderBottomRightRadius: (radius - 6) + 'px',
          borderRadius: '4px',
          position: 'absolute',
          top: 14,
          bottom: 14,
          right: 2,
          left: 2,
          backgroundColor: 'black',
          overflow: 'hidden',
        }}>
          <Image src="/ss3/ss-design-mobile.png" height={(screenWidth / 430 * 900) - 8} width={screenWidth - 8} alt="Design screenshot - mobile" style={{
            borderRadius: '2px',
            margin: 'auto',
          }} />
        </Box>
        <ControlBar />
      </Box>
    </Box>
  )
}

const antenaThickness = 4
const Antena = ({sx, ...props}: BoxProps) => {
  return (
    <Box sx={{
      backgroundColor: '#b9bfce',
      // backgroundColor: '#858693',
      height: antenaThickness,
      position: 'absolute',
      width: frameBorder + 1,
      ...sx,
    }} />
  )
}

const Button = ({sx, ...props}: BoxProps) => {
  return (
    <Box sx={{
      backgroundColor: '#a6aab5',
      // backgroundColor: '#858693',
      height: 30,
      right: -3,
      border: '1px solid #63646f',
      borderLeftColor: 'transparent',
      borderTopRightRadius: '2px',
      borderBottomRightRadius: '2px',
      position: 'absolute',
      width: 2,
      ...sx,
    }} />
  )
}


const ControlBar = () => {
  return (
    <Box sx={{
      position: 'absolute',
      bottom: 4,
      right: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Box sx={{
        borderRadius: 2,
        width: '40%',
        backgroundColor: '#9aa0ae',
        height: 2,
      }} />
    </Box>
  )
}