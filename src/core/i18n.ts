// gpt symbols to replace
// — ’
const appName = 'NexusPortal'
export const m = {
  // desc: 'The next generation of data collection & management software.',
  title: appName,
  heroTitle1: 'From scattered data',
  heroTitle2: 'To a single, clear picture',
  // heroTitleSub: 'Your team shouldn't spend hours cleaning messy data,',
  // heroTitleSub2: 'and with our Information Management app, they won't.',
  // heroTitleSub: 'With frequent survey updates and staff turnover, data quickly becomes inconsistent and unprotected.',
  // heroTitleSub2: 'NexusPortal structures your data - so reports stay clean and always ready.',
  heroTitleSub: 'Information management platform helping humanitarian teams <br/> <b>organize and protect</b> data without messy, time-consuming work.',
  key1: 'Collect & Import',
  key2: 'Transform & Manage',
  key3: 'Visualize & Analyze',
  ctaSignUp: 'Sign-up',
  cta: 'Explore a demo',
  logoAlt: appName + ' logo',
  blog: 'Blog',
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
    subTitle: `Managing forms, dashboards, and reports across multiple tools is complex, time-consuming, and error-prone. Small changes can break metrics, duplicate work piles up, and it's hard to get a single source of truth.`,
    list: [
      {
        title: 'Time-consuming manual tasks',
        desc: `<p>Reporting to donors, updating dashboards, recomputing figures, and providing dataset access are all done <b>manually</b>.</p>
       <p>These tasks take <b>hours</b>, are <b>error-prone</b>, and even small changes can break everything.</p>`,
      },
      {title: ''},
      {
        title: `People still see data they shouldn't`,
        desc: `<p>Forms are often shared across teams, but <b>Team A shouldn't see Team B's data</b>, and <b>Person A shouldn't access sensitive info from Person B's cases</b>.</p>
           <p>In practice, <b>access controls are usually impossible</b> to enforce, leading to data leaks or messy copies of subsets, creating <b>chaos</b>.</p>`,
      },
      {
        title: 'One dashboard… ten versions',
        desc: `<p>Dashboards are often duplicated because <b>data grows</b>, <b>shapes change</b>, or <b>translation</b> is needed.</p>
           <p>Over time, <b>multiple copies diverge</b>, creating <b>inconsistencies</b>.</p>`,
      },
      {title: ''},
      {
        title: 'People lose access randomly',
        desc: `<p>Access controls in existing solutions are <b>rigid</b>.</p>
           <p>Staff turnover or role changes leave accounts <b>outdated</b>, and manual updates are <b>slow, error-prone, and chaotic</b>.</p>`,
      },
      {title: ''},
      {
        title: 'Numbers never match',
        desc: `<p>When totals are recomputed, the numbers often <b>don't match</b>, and it's unclear why.</p>
           <p>Without proper tracking, we can't tell if it's due to <b>raw data changes</b> or <b>calculation errors</b>, leaving the system vulnerable to <b>mistakes and fraud</b>.</p>`,
      },
      {title: ''},
      {
        title: 'Data scattered everywhere',
        desc: `<p>Many forms get created, sometimes because needs change, sometimes to improve them.</p>
           <p>Often, a form includes multiple activities, and an activity can be split across several forms.</p>
           <p>Over time, the data becomes <b>chaotic</b>, impossible to maintain, and <b>difficult to get a clear overview</b>.</p>`,
      },
      {title: ''},
      {
        title: 'Forms change, metrics break',
        desc: `<p>Dashboards and spreadsheet formulas are fragile.</p>
           <p>When forms change, <b>metrics don't adapt</b>, dashboards break, and reports become <b>unreliable</b>.</p>`,
      },
      {
        title: 'Repetitive work for every update',
        desc: `<p>Every new dataset, dashboard refresh, or report requires repeating the same steps: pulling data, recalculating, updating dashboards, and sharing files.</p>
           <p>This <b>wastes time</b>, increases <b>errors</b>, and makes <b>tracking changes difficult</b>.</p>`,
      },
      {
        title: 'Duplication across data',
        desc: `<p>Sharing access often means copying data, creating <b>multiple sources of truth</b>.</p>
           <p>Without deduplication, the same person or activity can appear multiple times.</p>
           <p>Over time, data becomes <b>fragmented, inconsistent, and confusing</b> for teams.</p>`,
      },
      {title: ''},
    ],
  },
  solution: {
    question: 'How can NexusPortal solve it?',
    title: 'Let us handle the chaos',
    desc: 'NexusPortal replaces fragile workflows like <br/><b>KoboToolbox</b> → <b>Excel</b> → <b>BI</b><br/>with one coherent system so your team can work in one place instead of moving data between tools.',
    saveMoney: {
      title: 'Save Money',
      desc: 'Avoid hiring extra staff to fix data errors or handle tasks that should be automated. Keep workflows lean and reduce costly rework.',
    },
    saveTime: {
      title: 'Save Time',
      desc: 'Data stays aligned, permissions update automatically from your organisation’s accounts, calculations run, and dashboards feed real-time data so your team can focus on decisions, not fixes.',
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
    desc: 'Intuitive design.<br/>Elegant visuals.<br/>Mobile-friendly.<br/>Dark mode included.',
  },
  features: {
    title: 'Modern features. Finally.',
    list: {
      xls: {title: 'A new way to build XLS Forms', desc: `Stop uploading the same form over and over. See changes instantly, with clear indicators when something isn't valid.`},
      // xls: {title: 'Built on XLS Form', desc: 'The most flexible open standard to design surveys with complex logic.'},
      db: {
        title: 'Full control of your data',
        desc: 'A powerful, intuitive interface inspired by spreadsheets, designed to keep your data consistent.',
      },
      dashboard: {
        title: 'Custom dashboards',
        desc: 'Turn your data into interactive dashboards, updated in real time and easy to build in minutes.',
      },
      collaborative: {
        title: 'Real-time Collaborative',
        desc: `Work together live, see teammates' edits instantly and keep a transparent history.`,
      },
      access: {
        title: 'Granular access control',
        desc: 'Accounts stay in sync with your organization. Define fine-grained permissions by user, role, or group, and keep datasets always up to date.',
      },
      kobo: {
        title: 'Seamless KoboToolbox integration',
        desc: `Already using KoboToolbox and not ready to move on? No problem. Import your data into NexusPortal and keep everything automatically synchronized.`,
      },
      smart: {
        title: `Transform data without limits`,
        desc: `Connect, transform, and combine data from multiple surveys with confidence. NexusPortal validates every step so even complex workflows run safely and reliably.`,
      },
      repeat: {
        title: 'From impossible to intuitive',
        desc: `Forget complex workarounds for repeated survey sections. NexusPortal presents them in a way that's easy to analyze.`,
      },
    },
  },
  faq: {
    title: `Questions? Answers.`,
    list: [
      {
        question: `Why was ${appName} created?`,
        answer: `
          <p>
            ${appName} was first initiated within <b>Danish Refugee Council's</b> (DRC) Ukraine mission to overcome the challenges of traditional <b>Information Management Systems</b>.
          </p>
          <p>
            Over more than two years, it was continuously developed and improved, until it became clear that the solution could benefit organizations far beyond DRC. 
            The platform has since been redesigned to work across organizations, in a flexible and fully generic way.
          </p>
        `,
      },
      {
        question: `What is the added value of ${appName} compared to existing solutions?`,
        answer: `
          <p>
            Most information management workflows today are fragmented across multiple tools that were never designed to work together. 
          </p>
          <p>
            For example, data might be collected in KoboToolbox, exported to Excel, and then visualized in Power BI - therefore without proper access management or a reliable single source of truth. 
          </p>
          <p>
            This often leads to <b>scattered</b> systems, corrupted data and a <b>loss of the overall picture</b>. 
            ${appName} solves this by bringing collection, integration, management, and visualization together into one secure, cohesive platform.
          </p>
        `,
      },
      //   {
      //     question: `When will the final product be launched?`,
      //     answer: `${appName} is currently in its final stages of development.
      // We plan to open early access to selected partners within the coming months, with a wider public launch expected later this year.
      // Join the waitlist to stay informed and get early updates.`,
      //   },
      {
        question: `How data is protected?`,
        answer: `
          <p>
            Data protection is at the core of ${appName}. 
            All data is encrypted both in transit and at rest, and stored on secure, <b>GDPR-compliant infrastructure</b>.
          </p> 
          <p> 
            Access rights can be finely managed to ensure that only authorized users can view or edit sensitive information. 
          </p> 
          <p> 
            We follow industry best practices to safeguard your data and your users' privacy.
          </p> 
          <p> 
            NexusPortal does not sell, trade, or monetize user data in any form.
          </p>
        `,
      },
      {
        question: `Is NexusPortal free?`,
        answer: `
          <p>
            Yes. <b>A free tier</b> will be available for personal use and small teams. 
            For larger organizations, we will offer affordable pricing plans designed to cover infrastructure costs and ensure the long-term sustainability of the platform.          
          </p>
         `,
      },
      {
        question: `Which data sources does NexusPortal support?`,
        answer: `
          <p>
           NexusPortal can import <b>KoboToolbox</b> forms and keep them <b>automatically synchronized</b> as data evolves.
           It also supports importing data from <b>CSV and Excel (XLS/XLSX)</b> files, and allows teams to <b>collect data directly within the platform</b>.           
          </p>
         `,
      },
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
        question: `How data access is managed?`,
        answer: `
          <p>
            Access is managed through <b>organization accounts</b> (such as Microsoft 365), where user information like job title and location is <b>automatically retrieved and kept up to date</b>. When staff leave your organization or change roles, access permissions are updated automatically. <b>No manual changes</b> are required in NexusPortal.
          </p>
          <p>
            Access can also be restricted to <b>specific subsets of a dataset</b>, based on configurable filters. This makes NexusPortal suitable for <b>case management and sensitive data</b>, ensuring that only authorized staff can view the information relevant to them.
          </p>
         `,
        // Access is managed through <b>organization accounts</b> (such as Microsoft 365), ensuring user access stays up to date. Fine-grained permissions make it easy to control <b>who can view or edit specific parts of a dataset</b>, down to groups or job titles.
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
  // created: ``,
}
