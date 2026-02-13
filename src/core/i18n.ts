// gpt symbols to replace
// — '
import {appConf} from '@/core/conf'

const appName = 'NexusPortal'

export const formatLargeNumber = (n?: number, options?: Intl.NumberFormatOptions): string => {
  return n !== undefined && n !== null && !isNaN(n) ? n.toLocaleString('en-EN', options) : '-'
}

export const formatPrice = (n: number) => {
  return '$' + formatLargeNumber(n)
}

export const m = {
  // desc: 'The next generation of data collection & management software.',
  title: appName,
  heroTitle1: 'From scattered data',
  heroTitle2: 'To a single, clear picture',
  bookDemo: 'Book a demo',
  // heroTitleSub: 'Your team shouldn't spend hours cleaning messy data,',
  // heroTitleSub2: 'and with our Information Management app, they won't.',
  // heroTitleSub: 'With frequent survey updates and staff turnover, data quickly becomes inconsistent and unprotected.',
  // heroTitleSub2: 'NexusPortal structures your data - so reports stay clean and always ready.',
  heroTitleSub: 'Information management platform helping humanitarian teams <b>organize and protect data</b> without messy, time-consuming work.',
  heroTitleSubRaw: 'Information management platform helping humanitarian teams organize and protect data without messy, time-consuming work.',
  key1: 'Collect & Import',
  key2: 'Transform & Report',
  key3: 'Visualize & Analyze',
  ctaSignUp: 'Sign-up',
  cta: 'Explore a demo',
  ctaShort: 'Explore',
  logoAlt: appName + ' logo',
  blog: 'Blog',
  perMonth: ' / month',
  // highlights: {
  //   centralized: {
  //     title: 'All-in-One Platform',
  //     desc: `From data collection to databases, dashboards, and fine-grained access control - <b>everything in a single place.</b>`,
  //   },
  //   interface: {
  //     title: 'Fast & Intuitive',
  //     desc: `No steep learning curve, no heavy setup costs. <b>Start in minutes</b>, without training.`,
  //   },
  //   organization: {
  //     title: `Built for Organizations`,
  //     desc: `Invite colleagues and ensure resilient access rules <b>automatically up-to-date<b> with your organization.`,
  //   },
  //   moreToCome: {
  //     title: `This Is Just the Beginning`,
  //     desc: `Email notifications, merged databases, centralized individual tracking, and <b>much more are on the way</b>.`,
  //   },
  // },
  overviewTitle: 'Overview',
  comparisonTitle: 'Where data workflows start to break down',
  problems: {
    question: `What's the problem?`,
    title: `Information management is messy`,
    subTitle1: `Data lives in multiple forms and tools, so teams spend days <b>cleaning and reconciling</b> just to answer simple questions.`,
    subTitle2: `Data gets <b>copied across workflows</b> and quickly diverges, <b>reports stop matching</b>, audits become difficult, and <b>access rights</b> are hard to maintain, creating real <b>data-protection risks</b>.`,
    subTitle3: `As a result, teams waste time <b>fixing data</b> instead of using it. `,
    subTitle__: `
      Teams collect data in many tools, then spend days cleaning, reconciling and rebuilding just to answer simple questions.
      Small changes in a form can break indicators, numbers don't match between reports, and producing donor or cluster reporting becomes a manual, stressful process.
      Accesses are hard to maintain over all the tools, and never up-to-date.
      As a result, teams waste time fixing data instead of using it.
    `,
    // subTitle: `Managing forms, dashboards, and reports across multiple tools is complex, time-consuming, and error-prone. Small changes can break metrics, duplicate work piles up, and it's hard to get a single source of truth.`,
    list: [
      {title: ''},
      {
        title: 'Time-consuming manual tasks',
        desc: `<p>Reporting to donors, updating dashboards, recomputing figures, and providing data access are all done <b>manually</b>.</p>
       <p>These tasks take <b>hours</b>, are <b>error-prone</b>, and even small changes can break everything.</p>`,
      },
      {
        title: `People still see data they shouldn't`,
        desc: `<p>Forms are often shared across teams, but <b>Team A shouldn't see Team B's data</b>, and <b>Person A shouldn't access sensitive info from Person B's cases</b>.</p>
           <p>In practice, <b>access controls are usually impossible</b> to enforce, leading to data leaks or messy copies of subsets, creating <b>chaos</b>.</p>`,
      },
      {title: ''},
      {
        title: 'One dashboard… ten versions',
        desc: `
          <p>Dashboards are often duplicated because <b>data grows</b>, <b>shapes change</b>, or <b>translation</b> is needed.</p>
          <p>Over time, <b>multiple copies diverge</b>, creating <b>inconsistencies</b>.</p>
          <p>Their capacity is limited, they can't handle the full dataset, and <b>synchronisation becomes manual</b>.</p>
        `,
      },
      {title: ''},
      {
        title: 'Outdated permissions',
        desc: `<p>Access controls in existing solutions are <b>rigid</b>.</p>
           <p>Staff turnover or role changes leave accounts <b>outdated</b>, and manual updates are <b>time-consuming, error-prone, and chaotic</b>.</p>`,
      },
      {
        title: 'Numbers never match',
        desc: `<p>When totals are recomputed, the numbers often <b>don't match</b>, and it's unclear why.</p>
           <p>Without proper tracking, we can't tell if it's due to <b>raw data changes</b> or <b>calculation errors</b>, leaving the system vulnerable to <b>mistakes and fraud</b>.</p>`,
      },
      {title: ''},
      {
        title: 'Data scattered everywhere',
        desc: `<p>Many forms get created and quickly evolve overtime.</p>
           <p>Often, a form includes multiple activities, and an activity can be split across several forms.</p>
           <p>Over time, the data becomes <b>chaotic</b>, impossible to maintain, and <b>it becomes impossible to have a clear overview</b>.</p>`,
      },
      {
        title: 'Forms change, metrics break',
        desc: `<p>Dashboards and spreadsheet formulas are fragile.</p>
           <p>When forms change, <b>metrics don't adapt</b>, dashboards break, and reports become <b>unreliable</b>.</p>`,
      },
      {title: ''},
      {
        title: 'Repetitive work for every update',
        desc: `<p>Every new dataset, dashboard refresh, or report requires repeating the same steps: pulling data, recalculating, updating dashboards, and sharing files.</p>
           <p>This <b>wastes time</b>, increases <b>errors</b>, and makes <b>tracking changes difficult</b>.</p>`,
      },
      {title: ''},
      {
        title: 'Duplication across data',
        desc: `<p>Sharing access often means copying data, creating <b>multiple sources of truth</b>.</p>
           <p>Without deduplication, the same person or activity can appear multiple times.</p>
           <p>Over time, data becomes <b>fragmented, inconsistent, and confusing</b> for teams.</p>`,
      },
    ],
  },
  solution: {
    question: 'How can NexusPortal solve it?',
    title: 'Reliable at scale',
    desc: 'NexusPortal replaces fragile workflows like <br/><b>KoboToolbox</b> → <b>Excel</b> → <b>PowerBI</b><br/>with one coherent system so your team can work in one place <b>instead of moving data between tools</b>.',
    saveMoney: {
      title: 'Save Money',
      desc: 'Avoid hiring extra staff to fix data errors or handle tasks that should be automated. Keep workflows lean and reduce costly rework.',
    },
    saveTime: {
      title: 'Save Time',
      desc: `Data stays aligned, permissions update automatically from your organisation's accounts, calculations run, and dashboards feed real-time data so your team can focus on decisions, not fixes.`,
    },
    saveStress: {
      title: 'Save Stress',
      desc: `No more broken dashboards, duplicate sources, questionable edits, or mystery metrics. Everything is accurate, traceable, and audit-ready.`,
    },
  },
  // comparison2: {
  //   sync: {
  //     icon: SyncProblem,
  //     title: 'It works… until forms change or data grows.',
  //     problem: 'New fields, new form versions, or more data - and things start breaking.',
  //     solution: 'Collection, transformations, and dashboards stay in sync, even as things evolve.',
  //   },
  //   scattered: {
  //     icon: Hub,
  //     title: 'Information is scattered across tools, and nothing fully matches.',
  //     problem: 'Getting a global view takes manual work, and we don't always get the same result twice.',
  //     solution: 'Every figure is traceable, reproducible, and linked to its source and logic.',
  //   },
  //   access: {
  //     icon: ManageAccounts,
  //     title: 'People still see data they shouldn't - or lose access randomly.',
  //     problem: 'People change roles, but permissions don't.',
  //     solution: 'Access is defined per dataset or view and stays aligned over time.',
  //   },
  //   dashboard: {
  //     icon: DashboardCustomize,
  //     title: 'One dashboard becomes many.',
  //     problem:
  //       'Language or layout changes force us to duplicate dashboards and the design quickly becomes inconsistent.',
  //     solution: 'Dashboards follow shared rules, adapt to screens, and support multiple languages.',
  //   },
  // },
  // comparison: {
  //   sync: {
  //     icon: SyncProblem,
  //     title: 'Fragile synchronization',
  //     problem: 'Synchronization of data and dashboards relies on fragile manual processes.',
  //     solution: 'All data, transformations and dashboards live in one system.',
  //   },
  //   traceability: {
  //     icon: AccountTree,
  //     title: 'Lack of traceability',
  //     problem: 'Hard to understand where figures come from and to reproduce calculations.',
  //     solution: 'Every figure is traceable, reproducible, and linked to its source data and logic.',
  //   },
  //   dataScattered: {
  //     icon: Hub,
  //     title: 'Scattered data',
  //     problem: 'Data is spread across sources, preventing a consistent global view.',
  //     solution: 'All sources are unified into a single global view.',
  //   },
  //   dataAccessFine: {
  //     icon: ShieldLock,
  //     title: 'Data protection risks',
  //     problem: 'Sensitive data cannot be reliably restricted to the right roles.',
  //     solution: 'Access stays aligned with organizational roles over time.',
  //   },
  //   dataAccessUpdate: {
  //     icon: ManageAccounts,
  //     title: 'Access drift',
  //     problem: 'Access rules become outdated due to team turnover.',
  //     solution: 'Access can be defined per dataset or view.',
  //   },
  //   performances: {
  //     icon: Speed,
  //     title: 'Poor scalability',
  //     problem: 'Reporting tools slow down as data volumes grow.',
  //     solution: 'Performance remains fast and stable at scale.',
  //   },
  //   transformations: {
  //     icon: Schema,
  //     title: 'Fragile data processing',
  //     problem: 'Data processing is limited and break as forms evolve.',
  //     solution: 'Data processing handles form changes without rework, even for complex cases.',
  //   },
  //   dashboardInconsistent: {
  //     icon: DashboardCustomize,
  //     title: 'Inconsistent dashboards',
  //     problem: 'Dashboards are inconsistent and must be duplicated for translations.',
  //     solution: 'Dashboards follow shared rules and support multiple languages.',
  //   },
  // },
  // problem: {
  //   title: 'Problems',
  //   sync: 'Keeping databases, views and dashboards synchronized is fragile and hard to automate.',
  //   dataScattered: 'Data is spread across multiple sources, making a consistent global view difficult.',
  //   dataAccessUpdate: 'Access rules become outdated over time due to team turnover.',
  //   dataAccessFine: 'Fine-grained access control per role is hard to maintain on the same dataset.',
  //   performances: 'Reporting tools become slow and unstable as data volumes grows.',
  //   transformations: 'Data transformations and calculations are fragile and hard to maintain as forms change.',
  //   dashboardInconsistent: 'Dashboard designs are inconsistent and require duplication to handle multiple languages.',
  // },
  // solution: {
  //   title: 'Solutions',
  //   sync: 'All data, transformations and dashboards live in a single, centralized system.',
  //   dataScattered: 'Multiple data sources are unified into one consistent and reliable global view.',
  //   dataAccessUpdate: 'Access is managed centrally and stays aligned with organizational roles.',
  //   dataAccessFine: 'Access can be defined for specific parts of the dataset.',
  //   performances: 'By avoiding chained tools and exports, performance remains fast and stable as data grows.',
  //   transformations:
  //     'Data transformations remain robust as forms evolve, without relying on fragile, tool-specific formulas.',
  //   dashboardInconsistent:
  //     'Dashboards are built from shared rules and structures, ensuring consistency and easy multilingual support.',
  // },
  design: {
    title: 'Designed for clarity and comfort',
    desc: 'Fast.<br/>Intuitive design.<br/>Elegant visuals.<br/>Dark mode.<br/>Mobile-friendly.',
  },
  features: {
    title: 'Modern features. Finally.',
    list: {
      xls: {
        title: 'A new way to build XLS Forms',
        desc: `Stop uploading the same form over and over. <b>See changes instantly</b>, with clear indicators when something isn't valid.`,
      },
      db: {
        title: 'Full control of your data',
        desc: 'A powerful, intuitive interface inspired by spreadsheets, designed to keep your <b>data consistent</b>.',
      },
      dashboard: {
        title: 'Custom dashboards',
        desc: 'Turn your data into interactive <b>dashboards</b>, updated in <b>real time</b> and easy to build in minutes.',
      },
      collaborative: {
        title: 'Real-time Collaborative',
        desc: `<b>Work together live</b>, see teammates' edits instantly and keep a <b>transparent history</b>.`,
      },
      access: {
        title: 'Granular access control',
        desc: 'Accounts stay <b>in sync</b> with your organization. Define fine-grained <b>permissions by user, role, or group</b>, and keep datasets always up to date.',
      },
      kobo: {
        title: 'Seamless Kobo integration',
        desc: `Already using KoboToolbox and not ready to move on? No problem. <b>Import your data into NexusPortal</b> and keep everything automatically synchronized.`,
      },
      smart: {
        title: `Transform data without limits`,
        desc: `Connect, transform, and combine data from multiple surveys with confidence. NexusPortal validates every step so even complex workflows run <b>safely and reliably</b>.`,
      },
      repeat: {
        title: 'From impossible to intuitive',
        desc: `Forget complex workarounds for repeated survey sections. NexusPortal presents them in a way that's easy to analyze.`,
      },
    },
  },
  testimonial: {
    title: 'Real Impact in the Field',
    desc: 'What teams achieved with NexusPortal.',
    list: [
      {
        author: 'Sacha Kuilman',
        job: 'Area Programme Manager',
        content: `Extremely easy to use, well organized, and accessible. Once logged in, teams could instantly see real-time progress against targets and better understand their work, increasing awareness through transparent data. The protection monitoring dashboard made the information feel “real” because it was easy to access and read. Before NexusPortal, we struggled with a lot of mistakes and had to wait up to a month between Excel reports.<br/> It's a brilliant project.`,
      },
      {
        author: 'Katrina Zacharewski',
        job: 'Head of Programme',
        content: `NexusPortal is a platform that helps keep humanitarian programming accountable at a time when accountability is more critical than ever. NexusPortal supports with oversight over project progress, targeting, trend analysis, and supports in enhancing the overall quality and effectiveness of program implementation.`,
      },
      {
        author: 'Vladyslav Marchenko',
        job: 'Information Management Officer',
        content: `With a team of just 2, we could support the entire mission. We brought together over 200 Kobo form, made inconsistent by years of staff turnover and changing needs, into a single, unified database. From it, we could automatically generate cluster and donor reports that were always accurate and ready. This eliminated one of the main IM problems: the loss of a single source of truth when data is shared, copied, and quickly diverges. It also allowed us to build a MEAL verification process, beneficiaries deduplication, CFM, etc. We could quickly build dashboards and snapshots without manual syncing.`,
      },
      {
        author: 'Isabelle Langerak',
        job: 'EcRec Coordinator',
        content: `NexusPortal helped me understand the enormous figures of people we were registering and supporting, a and know exactly when and what assistance they received. This was of immense value to report to the cluster and communicate with donors.`,
      },
      {
        author: 'Romane Breton',
        job: 'Protection Coordinator',
        content: `It has transformed how we manage protection information, setting a high standard for both operational efficiency and compliance with data protection requirements. The platform made it easy to establish a secure referral system and helped prevent double counting when working with the same groups over multiple sessions. The protection monitoring dashboard gave us real-time access and made creating analysis and visualization much easier. As a Protection Coordinator, I could produce high-quality protection information management products without needing extra IM staff. Reporting was just as simple, with what we jokingly called the “one-click report” to ActivityInfo, while other organizations struggled to meet OCHA's monthly requirements.`,
      },
    ],
  },
  contactSection_: {
    title: 'Contact Us',
    paragraph: `<p>Curious how teams operating in Ukraine reduced days of manual reporting to just a few clicks, while keeping data reliable?</p>`
      + `Request a live demo by emailing <a href="mailto:contact@nexusportal.app">contact@nexusportal.app</a>.`,
  },
  contact: 'Contact',
  contact_: {
    arguments: {
      title: 'Start for free',
      list: [
        'Start for free',
        `If you're using Kobo, no migration needed`,
        `Built in field operation`,
      ],
    },
    targets: {
      title: 'NexusPortal is perfect for teams who',
      list: [
        'Use KoboToolbox and Excel for reporting',
        'Struggle with manual data cleaning and consolidation',
        'Need faster and more reliable dashboards',
      ],
    },
    submitSuccess: `Thanks! Your message has been sent. We'll get back to you within ${appConf.replyDelayDelay}.`,
    wantADemo: `I'd like a demo`,
    submitError: `Internal error.`,
    preferDirect: `Prefer email? Write to <a href="mailto:${appConf.contactEmail}">${appConf.contactEmail}</a>.`,
    title: `See if NexusPortal is a good fit for your team`,
    subTitle: `Book a short demo to discuss your current tools, your reporting challenges, and how NexusPortal could simplify your workflows.`,
    testimony: `Before NexusPortal, we struggled with a lot of mistakes and had to wait up to a month between Excel reports.`,
    testimonyAuthor: `Sacha Kuilman`,
    testimonyRole: `Area Programme Manager`,
    email: 'Work email',
    orgName: 'Organization name',
    roles: `What best describes you?`,
    roles_: [
      'Information Management',
      'MEAL / M&E',
      'Programme / Operations',
      'HQ / Global team',
      'Other',
    ],
    tools: 'What tools do you currently use?',
    tools_: [
      'KoboToolbox',
      'Excel',
      'PowerBI',
      'PowerApps',
      'Ona',
      'ActivityInfo',
      'ArcGis',
      'Custom tools',
      'Other',
    ],
    submit: 'Submit',
    message: `Message`,
    footer: `No spam. We reply within ${appConf.replyDelayDelay}.`,
  },
  faq: {
    title: `Questions? Answers.`,
    list: [
      {
        title: 'General',
        list: [
          {
            question: `Why was ${appName} created?`,
            answer: `
              <p>
                NexusPortal was born inside the Danish Refugee Council's Ukraine mission, <b>the largest mission DRC has ever run</b>.
                At that scale, traditional Information Management Systems <b>simply broke</b> down and became unmanageable.
              </p>
              <p>
                Over more than two years, it was continuously developed and improved, until it became clear that the solution <b>could benefit far beyond DRC</b>. The platform has since been redesigned to work across organizations, in a flexible and fully generic way. Scaling from large, complex operations to the needs of small missions.
              </p>
            `,
          },
          {
            question: `What is the added value of ${appName} compared to existing solutions?`,
            answer: `
              <p>
                Most information management workflows today are <b> fragmented across multiple</b> tools that were never designed to work together. 
              </p>
              <p>
                For example, data might be collected in KoboToolbox, exported to Excel, and then visualized in Power BI, therefore without proper access management or a reliable <b>single source of truth</b>. 
              </p>
              <p>
                This often leads to <b>scattered</b> systems, manual updates and a <b>loss of the overall picture</b>. 
                ${appName} solves this by bringing collection, integration, management, and visualization together into one secure, cohesive platform.
              </p>
            `,
          },
          {
            question: `Do I need to migrate my data?`,
            answer: `
              <ul>
              <li><p>
                If you are using <b>KoboToolbox</b>, you <b>don't need to manually migrate your data</b>. NexusPortal can <b>automatically import and keep your Kobo data synchronized</b>. 
                <br/>➡️ &nbsp;Updates made in NexusPortal will be reflected in KoboToolbox. 
                <br/>⬅️ &nbsp;Changes made in KoboToolbox will be detected and synced back to NexusPortal. 
              </p>
              <p>
                Once imported, your Kobo form data can be used in your workflow <b>just like any other form</b>.
                In short, you can start using NexusPortal <b>without disrupting your current processes</b>.
              </p>
              </li>
              <li>
                <p>
                  If your data is in <b>Excel files</b>, you can import them as well. Simply create a form that matches your data structure, and use NexusPortal's <b>Excel import feature</b>.
                </p>
              </li>
              <li>
                <p>
                  For any other data sources or special cases, <b>contact us</b> and we'll help you integrate your data into NexusPortal.
                </p>
              </li>
              </ul>
            `,
          },
        ],
      },
      {
        title: 'Pricing',
        list: [
          {
            question: `Can I use NexusPortal for free?`,
            answer: `
              <p>
                Yes. <b>A free tier</b> is available for personal use and small teams. 
              </p>
              <p>
                For larger organizations, we provide affordable pricing plans that cover infrastructure costs and support the long-term sustainability of the platform.
              </p>
            `,
          },
          {
            question: `What payment methods do you accept?`,
            answer: `
              <p>
                For now, we handle paid plans via <b>invoice and bank transfer</b>. After signing up for a paid plan, you'll receive an invoice with instructions to complete your payment. Paid plans will become automated via Stripe in the future.          
              </p>
            `,
          },
          {
            question: `Are there any hidden costs?`,
            answer: `
              <p>
                No, we are fully transparent about our pricing, and you can find all the details on our <b>Pricing page</b>. There are no setup fees or hidden costs, and pricing is simple.
              </p>
            `,
          },
          {
            question: `What happens if I exceed the usage limit?`,
            answer: `
              <p>
                You can contact us to update your plan and increase your usage limit.          
              </p>
            `,
          },
        ],
      },
      {
        title: 'Data protection',
        list: [
          {
            question: `Where is NexusPortal hosted?`,
            answer: `
              <p>NexusPortal is hosted by <b>Hetzner</b>, a German cloud provider.</p>
              <p>Application servers and file storage are located in <b>Finland</b>, ensuring compliance with <b>GDPR</b>.</p>
            `,
          },
          {
            question: `How is user access managed?`,
            answer: `
              <p>Access is managed through <b>organization accounts</b> such as Microsoft 365. User identity, role, and organizational information are <b>automatically synchronized</b>. When staff join, change roles, or leave the organization, access permissions are updated automatically without manual intervention.</p>
              <p>
                NexusPortal supports <b>fine-grained, rule-based access</b> control, allowing permissions to be restricted to <b>specific subsets of data</b>.
                This is especially useful for <b>sensitive data</b> and <b>case management</b>, ensuring users only see what is relevant to their role.
              </p>
            `,
          },
          {
            question: `How is data secured in NexusPortal?`,
            answer: `
              <p>NexusPortal is built with security by design.</p>
              <p>All traffic is encrypted via <b>HTTPS</b>, authentication relies on <b>JWT-based tokens</b>, and every action is <b>verified server-side</b>. Users can only access data they are explicitly authorized to see.</p>
            `,
          },
          {
            question: `Does NexusPortal sell or monetize data?`,
            answer: `
              <p>No.</p>
              <p>NexusPortal <b>does not sell, trade, or monetize user data</b> in any form.</p>
             `,
          },
        ],
      },
      {
        title: 'Features',
        list: [
          {
            question: `What can I do with NexusPortal?`,
            answer: `
              <p>
                NexusPortal centralizes your data from multiple sources, keeps it synchronized as it evolves, and turns it into <b>clean, structured datasets</b> ready for analysis and reporting.
                You can explore data, apply transformations, build dashboards, and share insights without constantly updating formulas or rebuilding processes when forms or data change.
              </p>
            `,
          },
          {
            question: `Which data sources does NexusPortal support?`,
            answer: `<p>Teams can <b>collect data directly within the platform</b>.</p>
           <p>They can also import <b>KoboToolbox forms</b> and keep them automatically synchronized as data evolves.</p>
           <p>Additionally, the platform supports importing data from <b>CSV</b> and <b>Excel (XLS/XLSX)</b> files.</p>`,
          },
          {
            question: 'Why does NexusPortal integrate with KoboToolbox?',
            answer: `
              <p>
                NexusPortal was originally built during the <b>DRC Ukraine mission</b>, where all data was managed in <b>KoboToolbox</b>. The first version of NexusPortal acted as a wrapper around KoboToolbox, adding <b>essential features for field operations</b> and extending its analytical and reporting capabilities.
              </p>
              <p>
                Because many organizations and humanitarian missions already rely on KoboToolbox and may not want to migrate their existing data, NexusPortal retains this integration. Data is <b>automatically imported and kept synchronized</b> between KoboToolbox and NexusPortal, allowing teams to build on their existing workflows without disruption.
              </p>
            `,
          },
          {
            question: 'Can I use NexusPortal without KoboToolbox?',
            answer: `
              <p>
                <b>Yes.</b> While NexusPortal integrates with KoboToolbox, it is not required.
              </p>
              <p>
                You can import data from <b>CSV and Excel (XLS/XLSX)</b> files, or <b>collect data directly within NexusPortal</b>. These data sources benefit from the same synchronization, transformation, and access control features, with better performances.
              </p>
              <p>
                This allows organizations to use NexusPortal as a standalone data platform, or alongside KoboToolbox, depending on their needs and existing workflows.
              </p>
            `,
          },
        ],
      },
    ],
  },
  pricing: 'Pricing',
  pricing_: {
    freeTrial: 'Start <b>30-day free trial</b> · No credit card',
    title: 'Start free. Scale when your data grows.',
    subTitle: `No limits on team size. No feature tiers. No hidden costs. Pricing grows only with your submissions.`,
    starter: 'Starter',
    mission: 'Mission',
    impact: 'Scale',
    enterprise: 'Enterprise',
    formBuilder: 'Form builder',
    koboImports: 'Import from KoboToolbox',
    koboImportsTooltip: 'You can import all your existing forms, regardless of the number of submissions. From then on, each new Kobo submission imported into NexusPortal will count toward your submissions limit.',
    maxSubmissions: 'Submissions/month',
    maxForms: 'Number of forms',
    maxAutomaticDatabases: 'Auto-generated databases',
    maxDashboards: 'Real-time dashboards',
    fileStorageGb: 'File storage',
    maxUsers: 'Team members',
    maxGroups: 'User groups',
    customUserRoles: 'Custom user roles',
    supportContact: 'Support contact',
    supportContactEmail: 'Direct email support',
    guidedSupport: `Guided setup`,
    maxWorkspaces: 'Workspaces',
    startFreeTrial: 'Start free trial',
    getStarted: 'Get started',
    contactUs: 'Contact us',
    free: 'Free',
    unlimited: 'Unlimited',
    features: 'Features',
  },
}

