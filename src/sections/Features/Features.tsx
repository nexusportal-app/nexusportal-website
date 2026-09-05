import {SectionTitle} from '@/shared/SectionTitle'
import {m} from '@/core/i18n'
import {Box} from '@mui/material'
import {FeaturesPanel} from '@/sections/Features/FeaturesPanel'
import {Obj} from '@axanc/ts-utils'
import {ScrollXBtn} from '@/sections/Features/FeaturesScrollXBtn'
import {BoxProps} from '@mui/material/Box'
import TableViewIcon from '@mui/icons-material/TableView'
import DashboardIcon from '@mui/icons-material/BarChart'
import NotificationsIcon from '@mui/icons-material/ForwardToInbox'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import SyncIcon from '@mui/icons-material/Sync'
import GroupsIcon from '@mui/icons-material/Groups'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import EditNoteIcon from '@mui/icons-material/EditNote'
import RepeatIcon from '@mui/icons-material/Repeat'
import {ReactNode} from 'react'

const featuresNew: Partial<Record<keyof typeof m['features']['list'], boolean>> = {
  email: true,
}

const featuresIcons: Record<keyof typeof m['features']['list'], ReactNode> = {
  db: <TableViewIcon />,
  dashboard: <DashboardIcon />,
  email: <NotificationsIcon />,
  access: <AdminPanelSettingsIcon />,
  kobo: <SyncIcon />,
  collaborative: <GroupsIcon />,
  smart: <AccountTreeIcon />,
  xls: <EditNoteIcon />,
  repeat: <RepeatIcon />,

}

export const Features = () => {
  return (
    <Box component="section" sx={{
      position: 'relative',
    }}>
      <SectionTitle sx={{mb: 0, p: 0}}>{m.features.title}</SectionTitle>
      <CarouselContainer id="Features-container">
        {Obj.entries(m.features.list).map(([key, _], i) => (
          <FeaturesPanel
            key={key}
            isNew={featuresNew[key]}
            icon={featuresIcons[key]}
            index={i}
            title={_.title}
            desc={_.desc}
            imageSrc={'/ss3/ss-' + key + '.png'}
          />
        ))}
      </CarouselContainer>
    </Box>
  )
}

export const CarouselContainer = ({id, children, sx, ...props}: BoxProps & {id: string}) => {
  return (
    <Box sx={{pr: 0, maxWidth: '100%', overflow: 'visible'}}>
      <Box id={id} sx={{
        pl: `calc((100vw - 1100px) / 2)`,
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto',
        gap: {xs: 1, sm: 2},
        ml: 1,
        pt: 4,
        pr: {xs: 0, sm: 2},
        pb: 4,
        /* Firefox */
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255,255,255,.2) transparent',
        /* Chrome / Edge */
        '&::-webkit-scrollbar': {
          width: 4,
          height: 4,
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255,255,255,.18)',
          borderRadius: 10,
          border: '2px solid transparent',
          backgroundClip: 'content-box',
        },
        '&::-webkit-scrollbar-corner': {
          background: 'transparent',
        },
        ...sx,
      }} {...props} >
        {children}
      </Box>
      <Box sx={{display: 'flex', gap: 1, pb: 4, alignItems: 'center', justifyContent: 'center'}}>
        <ScrollXBtn direction="left" containerId={id} />
        <ScrollXBtn direction="right" containerId={id} />
      </Box>
    </Box>
  )
}