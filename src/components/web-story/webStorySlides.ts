export type WebStorySlide = {
  id: string;
  label: string;
  caption: string;
  title: string;
  lede: string;
  points: string[];
};

export const webStorySlides: WebStorySlide[] = [
  {
    id: 'structure',
    label: 'Structure',
    caption: 'Sitemap agreed before pixels',
    title: 'Information architecture',
    lede: 'We map the site around how people actually move through your business, so every page has a job before design or code begins.',
    points: [
      'Sitemap agreed before design starts',
      'Every page has a job and a next step',
      'Navigation mapped to real user paths',
      'Content types defined before layout',
    ],
  },
  {
    id: 'architecture',
    label: 'Architecture',
    caption: 'Pages, CMS, and data in layers',
    title: 'Website architecture',
    lede: 'The stack is chosen for how you will edit and grow the site — frontend, CMS, and connections sitting in clear layers, not a tangle.',
    points: [
      'Frontend, CMS, and data in clear layers',
      'WordPress or React chosen for how you edit',
      'Forms and CRM connected from the start',
      'Room to add pages without rebuilding',
    ],
  },
  {
    id: 'design',
    label: 'Design system',
    caption: 'Type, color, and components',
    title: 'Design system',
    lede: 'Type, color, and components are set as a system so new pages stay on-brand without starting from a blank canvas each time.',
    points: [
      'Type, color, and spacing locked as a system',
      'Reusable components instead of one-off pages',
      'Desktop and mobile designed together',
      'Brand applied without fighting the layout',
    ],
  },
  {
    id: 'build',
    label: 'Build',
    caption: 'Visible progress, one phase at a time',
    title: 'Build process',
    lede: 'We build in visible phases your team can review, so progress is clear and scope does not drift in the middle of the work.',
    points: [
      'Work ships in visible phases',
      'CMS and pages built together',
      'Reviews at each stage before the next',
      'No surprise scope in the middle',
    ],
  },
  {
    id: 'launch',
    label: 'Launch',
    caption: 'Test, go live, then hand over',
    title: 'Launch and handover',
    lede: 'Launch is a checklist, not a hope. Performance, SEO, and CMS training are done so your team can run the site after we go live.',
    points: [
      'Performance, SEO, and redirects checked',
      'Analytics live on day one',
      'Your team trained to update content',
      'Go-live checklist before we flip the switch',
    ],
  },
];
