export type RoadmapPhase = {
  n: string;
  name: string;
  summary: string;
  activities: string[];
  deliverable: string;
};

export type SeniorProfile = {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  tags: string[];
  initials: string;
  linkedin: string;
  photo?: string;
  placeholder: boolean;
};

export const ROADMAP: RoadmapPhase[] = [
  {
    n: '01',
    name: 'Discover',
    summary: 'We learn about your business, goals, audience, and what success should look like.',
    activities: ['Project consultation', 'Requirements gathering', 'Goal definition'],
    deliverable: 'Clear project direction',
  },
  {
    n: '02',
    name: 'Strategy',
    summary: 'We define direction, scope, technology, and priorities before any build starts.',
    activities: ['Scope and timeline', 'Stack and approach', 'Transparent pricing'],
    deliverable: 'Plan and proposal',
  },
  {
    n: '03',
    name: 'Design',
    summary: 'We shape the visual direction, structure, and interface around how people will actually use it.',
    activities: ['Wireframes', 'User experience', 'Interface design'],
    deliverable: 'Approved design direction',
  },
  {
    n: '04',
    name: 'Build',
    summary: 'We develop the website, store, automation, app, or custom software in clear stages.',
    activities: ['Development sprints', 'Integrations', 'Regular progress updates'],
    deliverable: 'Working product in stages',
  },
  {
    n: '05',
    name: 'Test & refine',
    summary: 'We check functionality, responsiveness, performance, and the experience before launch.',
    activities: ['QA and device checks', 'Performance review', 'Fixes and polish'],
    deliverable: 'Launch-ready build',
  },
  {
    n: '06',
    name: 'Launch',
    summary: 'We deploy the project and complete the setup needed to go live.',
    activities: ['Deployment', 'Final configuration', 'Handover'],
    deliverable: 'Live project',
  },
  {
    n: '07',
    name: 'Grow',
    summary: 'When agreed, we stay on for improvements, optimization, and technical support after launch.',
    activities: ['Post-launch support', 'Improvements', 'Ongoing guidance'],
    deliverable: 'A system that keeps moving',
  },
];

export const SENIOR_PROFILES: SeniorProfile[] = [
  {
    id: 'ghl',
    name: 'Name to replace',
    role: 'Senior GHL specialist',
    specialty: 'GHL & business automation',
    bio: 'CRM workflows, pipelines, funnels, and follow-up systems in GoHighLevel.',
    tags: ['GoHighLevel', 'CRM', 'Funnels', 'Follow-up'],
    initials: 'GHL',
    linkedin: 'https://www.linkedin.com/',
    placeholder: true,
  },
  {
    id: 'web',
    name: 'Name to replace',
    role: 'Senior web developer',
    specialty: 'Web & application development',
    bio: 'Responsive websites and web applications shaped around usability and performance.',
    tags: ['React', 'Next.js', 'WordPress'],
    initials: 'WEB',
    linkedin: 'https://www.linkedin.com/',
    placeholder: true,
  },
  {
    id: 'mobile',
    name: 'Name to replace',
    role: 'Senior mobile developer',
    specialty: 'Mobile app development',
    bio: 'iOS and Android products with mobile UI and API integration into existing systems.',
    tags: ['iOS', 'Android', 'APIs'],
    initials: 'APP',
    linkedin: 'https://www.linkedin.com/',
    placeholder: true,
  },
  {
    id: 'shopify',
    name: 'Name to replace',
    role: 'Senior ecommerce specialist',
    specialty: 'Shopify & ecommerce',
    bio: 'Shopify stores and conversion-focused buying journeys, checkout, and useful integrations.',
    tags: ['Shopify', 'WooCommerce', 'Checkout'],
    initials: 'SHOP',
    linkedin: 'https://www.linkedin.com/',
    placeholder: true,
  },
  {
    id: 'ai',
    name: 'Name to replace',
    role: 'Senior AI specialist',
    specialty: 'AI & automation',
    bio: 'Chatbots, smart search, and AI features wired into the tools a team already uses.',
    tags: ['AI tools', 'RAG', 'Workflows'],
    initials: 'AI',
    linkedin: 'https://www.linkedin.com/',
    placeholder: true,
  },
  {
    id: 'software',
    name: 'Name to replace',
    role: 'Senior software engineer',
    specialty: 'Custom software',
    bio: 'Dashboards, backend systems, APIs, and custom platforms around real operations.',
    tags: ['Backend', 'APIs', 'Internal tools'],
    initials: 'SYS',
    linkedin: 'https://www.linkedin.com/',
    placeholder: true,
  },
];
