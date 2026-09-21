import type { WebStorySlide } from './webStorySlides';

export const mobileStorySlides: WebStorySlide[] = [
  {
    id: 'flows',
    label: 'Flows',
    caption: 'Journeys mapped before screens',
    title: 'Product flows',
    lede: 'We map how people move through the app: open, act, return, so every screen has a job before design or engineering starts.',
    points: [
      'Core journeys agreed before UI work',
      'Each screen has a job and a next step',
      'Empty, error, and return states planned',
      'Navigation that matches real use',
    ],
  },
  {
    id: 'ux',
    label: 'UX',
    caption: 'Designed for thumbs, not just screens',
    title: 'UX and interface',
    lede: 'Interfaces are designed around how people actually hold and use a phone, then built by the same team that ships the code.',
    points: [
      'Discovery with the people who will use it',
      'Prototypes tested before engineering commits',
      'Components coded, not handed over as files',
      'Accessibility built into every flow',
    ],
  },
  {
    id: 'native',
    label: 'Platform',
    caption: 'iOS, Android, one product',
    title: 'Platform architecture',
    lede: 'The app is wired to the systems you already run: APIs, accounts, notifications, so it feels like part of the business, not a sidecar.',
    points: [
      'React Native for iOS and Android',
      'APIs and auth connected from the start',
      'Push and analytics in the first build',
      'Room to add features without a rewrite',
    ],
  },
  {
    id: 'build',
    label: 'Build',
    caption: 'Visible stages, one after another',
    title: 'Build process',
    lede: 'We ship in visible phases your team can review, so progress is clear and scope does not drift mid-build.',
    points: [
      'Work lands in reviewable stages',
      'Design and engineering move together',
      'QA on real devices before release',
      'No surprise scope in the middle',
    ],
  },
  {
    id: 'store',
    label: 'Launch',
    caption: 'Store-ready, then handed over',
    title: 'Launch and handover',
    lede: 'Release is a checklist: store listing, devices, analytics, and a team that can keep the product moving after we ship.',
    points: [
      'Store listing and assets prepared',
      'Tested on the devices that matter',
      'Analytics live on day one',
      'Handover so your team can iterate',
    ],
  },
];
