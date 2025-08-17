export const caseStudies = {
  tupi: {
    title: 'Tupi',
    tldr: [
      'Built ecological gamification app with 64% D7 retention (industry avg: 20-30%)',
      'Achieved NPS of 52 through user-centered iteration and feedback loops',
      'Secured 2nd place at Epitech Experiences pitch competition with 120+ beta users'
    ],
    problem: 'People want to be more ecological but struggle with motivation and building sustainable habits. Existing apps either focus on education (boring) or are too complex for daily use.',
    users: 'Environmentally-conscious millennials and Gen Z who want to make a difference but need structure and motivation. JTBD: "Help me turn my good intentions into consistent, rewarding ecological actions."',
    successMetrics: 'NSM: Daily Active Habit Completion Rate. Guardrails: User satisfaction (NPS), Time-to-First-Value, Retention curves.',
    mvp: 'Duolingo-style streaks + bite-sized ecological challenges + social validation. Core loop: Choose challenge → Complete action → Photo proof → Earn points/streaks → Share with community → Unlock new challenges.',
    experiments: [
      {
        hypothesis: 'Adding photo proof will increase completion rates',
        metric: 'Challenge completion rate',
        result: '+23% completion rate',
        decision: 'Ship to all users'
      },
      {
        hypothesis: 'Prompt Engine v1 will improve habit formation',
        metric: 'NSM (habit completion)',
        result: '+38% improvement',
        decision: 'Double down on AI prompts'
      },
      {
        hypothesis: 'Social sharing increases retention',
        metric: 'D7 retention',
        result: '+12% retention',
        decision: 'Expand social features'
      },
      {
        hypothesis: 'Personalized challenges reduce churn',
        metric: 'Weekly churn rate',
        result: '-15% churn',
        decision: 'Invest in recommendation engine'
      }
    ],
    myRole: 'Founded the project, led product strategy, and managed a team of 4 developers. Owned user research, roadmap prioritization, A/B test design, and stakeholder communication. Pitched to judges and managed the beta launch.',
    nextSteps: 'At Meta, I would focus on: 1) Scaling the recommendation engine using ML, 2) Building community features to drive viral growth, 3) Expanding to corporate wellness programs for B2B revenue.',
    links: {
      prd: '#need_data',
      demo: 'https://tupi-app.com/',
      figma: '#need_data'
    }
  },
  valyo: {
    title: 'Valyo',
    tldr: [
      'Co-founded fintech platform for wealth visualization with AI-powered data enrichment',
      'Defined MVP and 4-month roadmap through user discovery and market validation',
      'Integrated complex financial data sources into intuitive wealth dashboard'
    ],
    problem: 'Wealth managers and high-net-worth individuals lack a unified view of their portfolio across different asset classes and institutions. Current tools are either too technical or too simplistic.',
    users: 'Wealth managers (B2B) and affluent individuals (B2C) who have complex portfolios. JTBD: "Help me understand my complete financial picture and make better investment decisions."',
    successMetrics: 'NSM: Monthly Active Portfolio Reviews. Guardrails: Data accuracy, Time-to-insight, User trust scores.',
    mvp: 'Unified dashboard connecting bank accounts, investment platforms, and crypto wallets. AI enriches transaction data with categorization and insights. Real-time net worth tracking with historical trends.',
    experiments: [
      {
        hypothesis: 'AI categorization will reduce manual data entry',
        metric: 'Time-to-complete portfolio setup',
        result: 'Need data - in progress',
        decision: 'Continue development'
      },
      {
        hypothesis: 'Real-time alerts drive daily engagement',
        metric: 'Daily active users',
        result: 'Need data - in progress',
        decision: 'A/B testing notifications'
      },
      {
        hypothesis: 'Simplified onboarding increases conversion',
        metric: 'Trial-to-paid conversion',
        result: 'Need data - designing test',
        decision: 'Prioritize UX research'
      }
    ],
    myRole: 'Co-founder responsible for product strategy, user research, and UI/UX design. Conducted user interviews, defined the value proposition, and created the 4-month technical roadmap. Currently leading AI integration planning.',
    nextSteps: 'At Meta, I would apply these skills to: 1) Building financial tools for creators, 2) Integrating payment systems across Meta platforms, 3) Developing AI-powered insights for business accounts.',
    links: {
      prd: '#need_data',
      demo: 'https://preview--valyo-glass-launch.lovable.app/',
      figma: '#need_data'
    }
  },
  sifokab: {
    title: 'Sifokab',
    tldr: [
      'Built data-driven CRM for ESN companies with validated market demand',
      'Conducted quantitative and qualitative surveys to validate KPIs with target users',
      'Delivered full-stack prototype with data visualization capabilities'
    ],
    problem: 'ESN companies struggle with fragmented data collection and lack actionable insights for business decisions. Current tools are either too generic or too expensive.',
    users: 'ESN company managers who need data-driven insights for operations. JTBD: "Help me collect, visualize, and act on business data to improve company performance."',
    successMetrics: 'NSM: Weekly data interactions. Guardrails: Data accuracy, Time-to-insight, User adoption rate.',
    mvp: 'React-based dashboard + Node.js backend + data visualization charts. Automated data collection from multiple sources with real-time updates.',
    experiments: [
      {
        hypothesis: 'Survey validation will confirm market need',
        metric: 'Market validation score',
        result: '85% positive feedback',
        decision: 'Continue product development'
      },
      {
        hypothesis: 'Real-time visualizations drive engagement',
        metric: 'Dashboard interaction rate',
        result: 'Need data - prototype phase',
        decision: 'Prioritize visualization features'
      },
      {
        hypothesis: 'Automated data collection saves time',
        metric: 'Time spent on manual entry',
        result: 'Need data - testing with users',
        decision: 'Focus on integration APIs'
      }
    ],
    myRole: 'Project Manager and Full-stack Developer. Owned user research, roadmap definition, and technical implementation. Conducted market surveys, designed user stories, and built the prototype.',
    nextSteps: 'At Meta, I would apply these skills to: 1) Building analytics tools for small businesses, 2) Creating data visualization for creator insights, 3) Developing B2B SaaS products.',
    links: {
      prd: '#need_data',
      technical: '#need_data'
    }
  },
  creativelab: {
    title: 'CreativeLab',
    tldr: [
      'Founded hardware innovation lab serving 50+ students with 20+ completed projects',
      'Established sustainable association model for accessing cutting-edge hardware tools',
      'Created mentorship program connecting students with industry professionals'
    ],
    problem: 'Students at Epitech lacked access to advanced hardware tools needed for innovative projects, limiting their ability to build physical prototypes and explore IoT/hardware opportunities.',
    users: 'Students interested in hardware innovation and physical computing. JTBD: "Give me access to tools and guidance so I can build hardware projects and learn from experienced mentors."',
    successMetrics: 'NSM: Active project completions. Guardrails: Student satisfaction, Tool utilization rate, Community growth.',
    mvp: 'Physical lab space + tool inventory management + mentorship matching + project showcase events. Simple booking system for equipment access.',
    experiments: [
      {
        hypothesis: 'Mentorship program increases project success',
        metric: 'Project completion rate',
        result: '+60% completion rate',
        decision: 'Expand mentor network'
      },
      {
        hypothesis: 'Showcase events drive engagement',
        metric: 'Monthly active users',
        result: '+40% user growth',
        decision: 'Monthly showcases'
      },
      {
        hypothesis: 'Tool training reduces equipment damage',
        metric: 'Equipment damage incidents',
        result: '-70% damage rate',
        decision: 'Mandatory training program'
      }
    ],
    myRole: 'Co-founder responsible for community building, mentorship program, and operations. Led the association creation, secured funding, established partnerships, and managed day-to-day operations.',
    nextSteps: 'At Meta, I would apply this experience to: 1) Building internal innovation labs, 2) Creating community programs for developers, 3) Designing mentorship platforms.',
    links: {
      prd: '#need_data',
      impact: '#need_data'
    }
  }
};