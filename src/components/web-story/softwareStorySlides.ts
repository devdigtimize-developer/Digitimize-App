import type { WebStorySlide } from './webStorySlides';

export const softwareStorySlides: WebStorySlide[] = [
  {
    id: 'audit',
    label: 'Audit',
    caption: 'See the work as it actually runs',
    title: 'Workflow audit',
    lede: 'We map the hidden steps, handoffs, and tools so the software is built around real work — not a guessed process.',
    points: [
      'Workflows documented with the people who run them',
      'Pain points ranked by time and risk',
      'A clear boundary for the first release',
      'No extra features that nobody will use',
    ],
  },
  {
    id: 'dashboard',
    label: 'Dashboards',
    caption: 'One place the team can trust',
    title: 'Internal dashboards',
    lede: 'Numbers, statuses, and exceptions live in one view so the team stops chasing spreadsheets and chat threads.',
    points: [
      'Views shaped around daily decisions',
      'Roles see only what they need',
      'Exceptions surface before they stall',
      'Export and audit when required',
    ],
  },
  {
    id: 'api',
    label: 'APIs',
    caption: 'Systems talking without extra work',
    title: 'Integrations',
    lede: 'APIs and databases connect so data is entered once and the rest of the stack stays in sync.',
    points: [
      'Existing tools stay in the loop',
      'Clean fields, not duplicate records',
      'Errors visible, not silent',
      'Room to add the next system later',
    ],
  },
  {
    id: 'access',
    label: 'Access',
    caption: 'The right people, the right actions',
    title: 'Roles and access',
    lede: 'Permissions follow how the team actually works, so sensitive actions stay controlled without slowing everyone down.',
    points: [
      'Role-based access from the start',
      'Approvals where the risk is real',
      'Activity that can be reviewed',
      'Handover the admin can operate',
    ],
  },
  {
    id: 'ship',
    label: 'Ship',
    caption: 'Live, measured, ready to improve',
    title: 'Launch and cloud',
    lede: 'The first release is deployed, monitored, and owned — then we keep improving from what the team actually uses.',
    points: [
      'Cloud deployment that the team can reach',
      'Logging for the failures that matter',
      'A path for the next workflow',
      'Support after go-live when you need it',
    ],
  },
];
