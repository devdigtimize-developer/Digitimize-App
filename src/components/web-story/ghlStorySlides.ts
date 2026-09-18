import type { WebStorySlide } from './webStorySlides';

export const ghlStorySlides: WebStorySlide[] = [
  {
    id: 'pipeline',
    label: 'Pipeline',
    caption: 'One view of every opportunity',
    title: 'Lead pipeline',
    lede: 'We set up GoHighLevel around how you actually sell, so every lead has a stage, an owner, and a next step.',
    points: [
      'Stages mapped to your real sales motion',
      'Lost leads stop disappearing in inboxes',
      'The team sees the same pipeline',
      'Reporting without a spreadsheet chase',
    ],
  },
  {
    id: 'followup',
    label: 'Follow-up',
    caption: 'SMS and email that keep moving',
    title: 'Automated follow-up',
    lede: 'Sequences fire after the first conversation so follow-up does not wait on someone remembering to send it.',
    points: [
      'SMS and email from the same pipeline',
      'Timing based on what the lead did',
      'Stop-loss when they book or reply',
      'Copy your team can actually edit',
    ],
  },
  {
    id: 'funnels',
    label: 'Funnels',
    caption: 'Pages that capture, then continue',
    title: 'Funnels and pages',
    lede: 'Landing pages and forms dump into the CRM immediately, so the next step is already in motion.',
    points: [
      'Forms write straight into GoHighLevel',
      'Thank-you paths that book the call',
      'UTM and source tracking kept intact',
      'Pages your team can update',
    ],
  },
  {
    id: 'calendar',
    label: 'Calendar',
    caption: 'Booking without the back-and-forth',
    title: 'Calendar automation',
    lede: 'Availability, reminders, and no-shows are handled in the same system as the pipeline.',
    points: [
      'Booking linked to the opportunity',
      'Reminders by SMS and email',
      'No-show follow-up already written',
      'Round-robin when the team is larger',
    ],
  },
  {
    id: 'connect',
    label: 'Connect',
    caption: 'Wired into the tools you already run',
    title: 'Integrations',
    lede: 'Webhooks, Zapier, and the rest of the stack stay connected so GoHighLevel is not another island.',
    points: [
      'Website and ads feeding the CRM',
      'Webhooks for the tools you keep',
      'Clean fields, not duplicate contacts',
      'Handover so your team can operate it',
    ],
  },
];
