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
    id: 'saif',
    name: 'Saifullah Qaiser',
    role: 'GoHighLevel & Automations Expert',
    specialty: 'GHL & business automation',
    bio: 'CRM workflows, pipelines, funnels, and follow-up systems in GoHighLevel.',
    tags: ['GoHighLevel', 'CRM', 'Automation', 'Follow-up'],
    initials: 'SQ',
    linkedin: '',
    photo: '/images/saif.jpeg',
    placeholder: false,
  },
  {
    id: 'abdullah',
    name: 'Abdullah Qaiser',
    role: 'Software Engineer',
    specialty: 'Software engineering',
    bio: 'Web and software builds shaped around usability, performance, and clear delivery.',
    tags: ['React', 'Next.js', 'Software'],
    initials: 'AQ',
    linkedin: 'https://www.linkedin.com/in/abdullahqaisar-',
    photo: '/images/Abdullah.png',
    placeholder: false,
  },
  {
    id: 'tayyab',
    name: 'Tayyab Farooq',
    role: 'Custom AI Developer',
    specialty: 'AI & automation',
    bio: 'Custom AI features, assistants, and smart workflows wired into real business tools.',
    tags: ['AI tools', 'Automation', 'Workflows'],
    initials: 'TF',
    linkedin: '',
    placeholder: true,
  },
  {
    id: 'taimoor',
    name: 'Muhammad Taimoor',
    role: 'Website Developer',
    specialty: 'Web development',
    bio: 'Clear, responsive websites built around how customers find and contact a business.',
    tags: ['Websites', 'WordPress', 'Frontend'],
    initials: 'MT',
    linkedin: '',
    photo: '/images/taimoor.png',
    placeholder: false,
  },
  {
    id: 'khubaib',
    name: 'Khubaib Waseem',
    role: 'GoHighLevel Expert',
    specialty: 'GHL & lead systems',
    bio: 'GoHighLevel setup for pipelines, follow-up, and day-to-day sales operations.',
    tags: ['GoHighLevel', 'CRM', 'Funnels'],
    initials: 'KW',
    linkedin: '',
    photo: '/images/khubab.png',
    placeholder: false,
  },
];
