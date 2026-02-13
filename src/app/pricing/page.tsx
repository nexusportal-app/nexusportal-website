import {Box, Button, Grid, SvgIconProps, Tooltip} from '@mui/material'
import {formatLargeNumber, formatPrice, m} from '@/core/i18n'
import Check from '@mui/icons-material/CheckCircleOutline'
import DoNotDisturb from '@mui/icons-material/DoNotDisturbOnOutlined'
import AllInclusive from '@mui/icons-material/AllInclusive'
import DataUsage from '@mui/icons-material/DataUsage'
import AddBox from '@mui/icons-material/AddBox'
import Key from '@mui/icons-material/Key'
import Support from '@mui/icons-material/Support'
import Help from '@mui/icons-material/Help'
import Info from '@mui/icons-material/Info'
import {Page} from '@/shared/Page'
import {ContactContent} from '@/app/contact/page'
import {SectionTitle} from '@/shared/SectionTitle'
import {Section} from '@/shared/Section'
import {Faq} from '@/sections/Faq/Faq'
import {appConf} from '@/core/conf'
import {BtnScrollTo} from '@/sections/Header/BtnContact'

type PlanId = 'starter' | 'mission' | 'impact' | 'enterprise'

type FeatureValue =
  | {type: 'boolean'; value: boolean}
  | {type: 'limit'; value: number, unit?: string}
  | {type: 'unlimited'}
  | {type: 'text'; value: string}

type FeatureCategory = 'Usage' | 'Features' | 'Accesses Management' | 'Support'

type Feature = {
  id: string
  label?: string
  tooltip?: string
  category: FeatureCategory
  values: Record<PlanId, FeatureValue>
}

type Plan = {price?: number, freeTrial?: boolean}

const plans: Record<PlanId, Plan> = {
  starter: {price: 0},
  mission: {price: 150, freeTrial: true},
  impact: {price: 300, freeTrial: true},
  enterprise: {},
}

const categoryIcons: Record<string, typeof DataUsage> = {
  Usage: DataUsage,
  Features: AddBox,
  'Accesses Management': Key,
  Support: Support,
}

const features: Feature[] = [
  {
    id: 'submissions',
    label: m.pricing_.maxSubmissions,
    category: 'Usage',
    values: {
      starter: {type: 'limit', value: 500},
      mission: {type: 'limit', value: 5_000},
      impact: {type: 'limit', value: 25_000},
      enterprise: {type: 'unlimited'},
    },
  },
  {
    id: 'forms',
    label: m.pricing_.maxForms,
    category: 'Usage',
    values: {
      starter: {type: 'unlimited'},
      mission: {type: 'unlimited'},
      impact: {type: 'unlimited'},
      enterprise: {type: 'unlimited'},
    },
  },
  {
    id: 'storage',
    label: m.pricing_.fileStorageGb,
    category: 'Usage',
    values: {
      starter: {type: 'limit', value: 5, unit: 'GB'},
      mission: {type: 'unlimited'},
      impact: {type: 'unlimited'},
      enterprise: {type: 'unlimited'},
    },
  },
  // {
  //   id: 'workspaces',
  //   label: m.pricing_.maxWorkspaces,
  //   category: 'Usage',
  //   values: {
  //     starter: {type: 'limit', value: 2},
  //     mission: {type: 'unlimited'},
  //     impact: {type: 'unlimited'},
  //     enterprise: {type: 'unlimited'},
  //   },
  // },
  {
    id: 'formBuilder',
    label: m.pricing_.formBuilder,
    category: 'Features',
    values: {
      starter: {type: 'boolean', value: true},
      mission: {type: 'boolean', value: true},
      impact: {type: 'boolean', value: true},
      enterprise: {type: 'boolean', value: true},
    },
  },
  {
    id: 'koboImport',
    tooltip: m.pricing_.koboImportsTooltip,
    label: m.pricing_.koboImports,
    category: 'Features',
    values: {
      starter: {type: 'boolean', value: true},
      mission: {type: 'boolean', value: true},
      impact: {type: 'boolean', value: true},
      enterprise: {type: 'boolean', value: true},
    },
  },
  {
    id: 'auto_db',
    label: m.pricing_.maxAutomaticDatabases,
    category: 'Features',
    values: {
      starter: {type: 'unlimited'},
      mission: {type: 'unlimited'},
      impact: {type: 'unlimited'},
      enterprise: {type: 'unlimited'},
    },
  },
  {
    id: 'dashboards',
    label: m.pricing_.maxDashboards,
    category: 'Features',
    values: {
      starter: {type: 'unlimited'},
      mission: {type: 'unlimited'},
      impact: {type: 'unlimited'},
      enterprise: {type: 'unlimited'},
    },
  },
  {
    id: 'users',
    label: m.pricing_.maxUsers,
    category: 'Accesses Management',
    values: {
      starter: {type: 'unlimited'},
      mission: {type: 'unlimited'},
      impact: {type: 'unlimited'},
      enterprise: {type: 'unlimited'},
    },
  },
  {
    id: 'groups',
    label: m.pricing_.maxGroups,
    category: 'Accesses Management',
    values: {
      starter: {type: 'unlimited'},
      mission: {type: 'unlimited'},
      impact: {type: 'unlimited'},
      enterprise: {type: 'unlimited'},
    },
  },
  {
    id: 'customUserRoles',
    label: m.pricing_.customUserRoles,
    category: 'Accesses Management',
    values: {
      starter: {type: 'unlimited'},
      mission: {type: 'unlimited'},
      impact: {type: 'unlimited'},
      enterprise: {type: 'unlimited'},
    },
  },
  {
    id: 'guided',
    label: m.pricing_.guidedSupport,
    category: 'Support',
    values: {
      starter: {type: 'boolean', value: true},
      mission: {type: 'boolean', value: true},
      impact: {type: 'boolean', value: true},
      enterprise: {type: 'boolean', value: true},
    },
  },
  {
    id: 'support',
    label: m.pricing_.supportContactEmail,
    category: 'Support',
    values: {
      starter: {type: 'boolean', value: true},
      mission: {type: 'boolean', value: true},
      impact: {type: 'boolean', value: true},
      enterprise: {type: 'boolean', value: true},
    },
  },
]

const featuresByCategory = Object.groupBy(features, f => f.category)

export default function Pricing() {
  return (
    <Page width="lg" title={m.pricing_.title} subTitle={m.pricing_.subTitle}>
      <Grid container spacing={.75} component="section">
        {(Object.keys(plans) as PlanId[]).map((planId, index) => (
          <Grid key={planId} size={{xs: 12, sm: 6, lg: 3}}>
            <PlanCard planId={planId} index={index} />
          </Grid>
        ))}
        <Box sx={{display: 'flex', mt: 1, gap: .5, alignItems: 'center', justifyContent: 'center', width: '100%', fontWeight: 500, color: 'info.main'}}>
          <Info color="info" fontSize="small" />
          {m.pricing_.perWorkspace}
        </Box>
      </Grid>
      <Section sx={{px: 0, scrollMarginTop: 80}} id="book-a-demo">
        <SectionTitle>{m.bookDemo}</SectionTitle>
        <ContactContent />
      </Section>
      <Faq />
    </Page>
  )
}

function PlanCard({planId, index}: {planId: PlanId; index: number}) {
  const plan = plans[planId]

  return (
    <Box sx={{overflow: 'hidden', border: '1px solid', borderColor: 'divider', borderRadius: 1}}>
      <Header planId={planId} plan={plan} index={index} />
      <Box sx={{p: 1}}>
        {Object.entries(featuresByCategory).map(([category, feats]) => {
          // const Icon = (categoryIcons as any)[category]
          return (
            <Box key={category} sx={{'&:not(:last-of-type)': {mb: 2}}}>
              <Box sx={{color: 'text.disabled', display: 'flex', alignItems: 'center', gap: .5, textTransform: 'uppercase', mb: 1, fontWeight: 600, fontSize: '.8rem'}}>
                {/*<Icon fontSize="small" />*/}
                {category}
              </Box>

              {feats!.map(feature => (
                <Row key={feature.id}>
                  {feature.label && (
                    <Box sx={{flex: 1}}>
                      {feature.label}
                      {feature.tooltip && (
                        <Tooltip placement="right" title={feature.tooltip}><Help fontSize="inherit" color="disabled" sx={{ml: .25}} /></Tooltip>
                      )}
                    </Box>
                  )}
                  <FeatureValueCell value={feature.values[planId]} />
                </Row>
              ))}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

function Header({planId, plan, index}: {planId: PlanId; plan: Plan; index: number}) {
  return (
    <Box sx={{
      p: 1,
      minHeight: 150,
      borderBottom: '1px solid',
      borderColor: 'divider',
      background: `linear-gradient(to top, #fff 1%, rgba(0,165,255,${index / 12}) 100%)`,
    }}>
      <Box sx={{mb: 2}}>
        <Box component="h3">{m.pricing_[planId]}</Box>
        <Price price={plan.price} />
      </Box>
      {{
        starter: <Button href={appConf.consoleUrl} fullWidth variant="contained">{m.pricing_.getStarted}</Button>,
        mission: <BtnScrollTo scrollToElSelector="#book-a-demo" fullWidth variant="outlined">{m.bookDemo}</BtnScrollTo>,
        impact: <BtnScrollTo scrollToElSelector="#book-a-demo" fullWidth variant="outlined">{m.bookDemo}</BtnScrollTo>,
        enterprise: <BtnScrollTo scrollToElSelector="#book-a-demo" fullWidth variant="outlined">{m.bookDemo}</BtnScrollTo>,
      }[planId]}
      <Box
        dangerouslySetInnerHTML={{__html: plan.freeTrial ? m.pricing_.freeTrial : '&nbsp;'}}
        sx={{mt: .5, textAlign: 'center', fontSize: '.8rem', b: {color: 'primary.main', fontWeight: 500}}}
      />
    </Box>
  )
}

function FeatureValueCell({value}: {value: FeatureValue}) {
  switch (value.type) {
    case 'boolean':
      return value.value ? <CheckIcon color="success" /> : <DoNotDisturb color="disabled" />

    case 'limit':
      return <Box sx={{color: 'warning.main'}}>{formatLargeNumber(value.value)} {value.unit}</Box>

    case 'unlimited':
      return <AllInclusive sx={{fontSize: 18}} color="success" />

    case 'text':
      return <Box sx={{color: 'success.main'}}>{value.value}</Box>
  }
}

function Row({children}: {children: React.ReactNode}) {
  return (
    <Box sx={{display: 'flex', fontWeight: 500, '&:not(:last-of-type)': {mb: 1}}}>
      {children}
    </Box>
  )
}

function CheckIcon(props: SvgIconProps) {
  return <Check sx={{fontSize: 18}} {...props} />
}

function Price({price, sx}: {price?: number; sx?: any}) {
  if (price === 0) return <Box sx={{fontSize: '2rem', fontWeight: 700, ...sx}}>{m.pricing_.free}</Box>
  if (!price) return <Box sx={{fontSize: '2rem', fontWeight: 700, ...sx}}>{m.pricing_.contactUs}</Box>

  return (
    <Box sx={{fontSize: '2rem', fontWeight: 700, ...sx}}>
      {formatPrice(price)}
      <Box component="span" sx={{fontSize: '1rem', fontWeight: 300}}> {m.perMonth}</Box>
    </Box>
  )
}
