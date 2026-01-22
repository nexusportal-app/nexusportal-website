'use client'
import {useState} from 'react'
import {Box, Collapse, IconButton} from '@mui/material'
import ChevronRight from '@mui/icons-material/ChevronRight'

export const FaqCard = ({question, answer}: {question: string; answer: string}) => {
  const [open, setOpen] = useState(false)
  return (
    <Box
      component="article"
      sx={{
        // transition: t => t.transitions.create('all'),
        backgroundColor: 'background.paper',
        borderRadius: 1 / 4,
        py: {xs: .5, sm: .75},
        px: {xs: .5, sm: 1},
        mb: 0.25,
        boxShadow: 0,

        '& p': {
          my: .5,
        },
        '&:first-of-type': {
          borderTopLeftRadius: theme => theme.shape.borderRadius,
          borderTopRightRadius: theme => theme.shape.borderRadius,
        },

        '&:last-of-type': {
          borderBottomLeftRadius: theme => theme.shape.borderRadius,
          borderBottomRightRadius: theme => theme.shape.borderRadius,
        },
        ...open ? {
          backgroundColor: 'background.default',
          boxShadow: 3,
          borderRadius: 1,
          my: 1,
        } : {},
      }}
    >
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <IconButton
          onClick={() => {
            setOpen(prev => {
              const next = !prev
              if (!prev && next && typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'faq_opened', {
                  event_category: 'faq',
                  question,
                })
              }
              return next
            })
          }}
          sx={{
            ml: -.5,
            // transition: t => t.transitions.create('all'),
            ...(open ? {transform: 'rotate(90deg)'} : {}),
          }}
        >
          <ChevronRight />
        </IconButton>
        <Box sx={{fontSize: '1.1rem', fontWeight: 500}} dangerouslySetInnerHTML={{__html: question}} />
      </Box>
      <Collapse in={open}>
        <Box sx={{fontWeight: 500, textAlign: 'justify'}} dangerouslySetInnerHTML={{__html: answer}} />
      </Collapse>
    </Box>
  )
}
