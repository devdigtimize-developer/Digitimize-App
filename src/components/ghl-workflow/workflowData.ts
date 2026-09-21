export type WorkflowId = 'booking' | 'ai' | 'followup';

export type NodeKind =
  | 'default'
  | 'ai'
  | 'calendar'
  | 'crm'
  | 'automation'
  | 'sms'
  | 'email'
  | 'pipeline'
  | 'customer';

export type WorkflowNodeDef = {
  id: string;
  title: string;
  icon: string;
  detail: string;
  kind: NodeKind;
  x: number;
  y: number;
};

export type WorkflowStep = {
  activate: string[];
  statuses?: Record<string, string>;
  particleFrom?: string;
  particleTo?: string;
  preview?: 'calendar' | 'crm' | 'automation' | 'chat' | null;
  calendarState?: 'idle' | 'available' | 'selected' | 'booked';
  crmStage?: 'new' | 'booked' | 'confirmed' | 'followup';
  aiState?: 'listening' | 'qualifying' | 'booking';
  chatLine?: { role: 'customer' | 'ai'; text: string };
  timeline?: { time: string; label: string };
  duration: number;
};

export type WorkflowDef = {
  id: WorkflowId;
  tabLabel: string;
  tabNumber: string;
  leftEyebrow: string;
  leftTitle: string;
  leftBody: string;
  nodes: WorkflowNodeDef[];
  connections: [string, string][];
  steps: WorkflowStep[];
};

export const DEFAULT_LEFT = {
  eyebrow: 'GOHIGHLEVEL AUTOMATION',
  title: 'GoHighLevel Setup & Automation That Actually Captures Every Lead',
  body: 'We build the CRM, pipelines, and follow-up systems inside GoHighLevel so you stop losing leads to slow or missed follow-up.',
};

export const workflows: WorkflowDef[] = [
  {
    id: 'booking',
    tabLabel: 'Book a Call',
    tabNumber: '01',
    leftEyebrow: 'BOOKING AUTOMATION',
    leftTitle: 'A customer books a call.',
    leftBody:
      'The system captures the lead, updates the CRM, confirms the appointment and starts the follow-up workflow.',
    nodes: [
      { id: 'customer', title: 'Customer', icon: 'user', detail: 'A prospect books a call from your calendar or form.', kind: 'customer', x: 12, y: 8 },
      { id: 'calendar', title: 'Calendar', icon: 'calendar', detail: 'Let prospects choose available appointments automatically.', kind: 'calendar', x: 48, y: 8 },
      { id: 'crm', title: 'GHL CRM', icon: 'database', detail: 'Capture and organize incoming leads inside your CRM.', kind: 'crm', x: 84, y: 8 },
      { id: 'automation', title: 'Automation', icon: 'zap', detail: 'Trigger follow-up actions based on lead activity.', kind: 'automation', x: 30, y: 42 },
      { id: 'sms', title: 'SMS', icon: 'message', detail: 'Send confirmation and reminder texts automatically.', kind: 'sms', x: 12, y: 76 },
      { id: 'email', title: 'Email', icon: 'mail', detail: 'Deliver booking details and reminders by email.', kind: 'email', x: 48, y: 76 },
      { id: 'pipeline', title: 'Sales Pipeline', icon: 'kanban', detail: 'Move the lead through clear pipeline stages.', kind: 'pipeline', x: 84, y: 76 },
    ],
    connections: [
      ['customer', 'calendar'],
      ['calendar', 'crm'],
      ['crm', 'automation'],
      ['automation', 'sms'],
      ['automation', 'email'],
      ['sms', 'pipeline'],
      ['email', 'pipeline'],
    ],
    steps: [
      { activate: ['customer'], statuses: { customer: 'Books a call' }, duration: 1400 },
      {
        activate: ['customer', 'calendar'],
        statuses: { customer: 'Request sent', calendar: 'Slot available' },
        particleFrom: 'customer',
        particleTo: 'calendar',
        preview: 'calendar',
        calendarState: 'available',
        duration: 1500,
      },
      {
        activate: ['customer', 'calendar'],
        statuses: { calendar: '12:00 selected' },
        preview: 'calendar',
        calendarState: 'selected',
        duration: 1200,
      },
      {
        activate: ['customer', 'calendar'],
        statuses: { calendar: 'Appointment created' },
        preview: 'calendar',
        calendarState: 'booked',
        duration: 1200,
      },
      {
        activate: ['calendar', 'crm'],
        statuses: { crm: 'Lead created' },
        particleFrom: 'calendar',
        particleTo: 'crm',
        preview: 'crm',
        crmStage: 'new',
        duration: 1400,
      },
      {
        activate: ['crm', 'automation'],
        statuses: { automation: 'Workflow triggered' },
        particleFrom: 'crm',
        particleTo: 'automation',
        preview: 'automation',
        duration: 1400,
      },
      {
        activate: ['automation', 'sms', 'email'],
        statuses: { sms: 'Confirmation sent', email: 'Confirmation sent' },
        particleFrom: 'automation',
        particleTo: 'sms',
        duration: 1500,
      },
      {
        activate: ['sms', 'email', 'pipeline'],
        statuses: {
          sms: 'Reminder ready',
          email: 'Reminder scheduled',
          pipeline: 'New Lead → Booked',
        },
        particleFrom: 'email',
        particleTo: 'pipeline',
        preview: 'crm',
        crmStage: 'booked',
        duration: 1400,
      },
      {
        activate: ['pipeline', 'crm'],
        statuses: { pipeline: 'Confirmed', crm: 'Follow-up active' },
        preview: 'crm',
        crmStage: 'confirmed',
        duration: 1600,
      },
    ],
  },
  {
    id: 'ai',
    tabLabel: 'AI Lead Handling',
    tabNumber: '02',
    leftEyebrow: 'AI LEAD HANDLING',
    leftTitle: 'Let intelligent assistants handle first contact.',
    leftBody:
      'Initial conversations, qualification, and appointment booking — shown here as a product demonstration of the workflow.',
    nodes: [
      { id: 'customer', title: 'Customer', icon: 'user', detail: 'A prospect reaches out asking to book a consultation.', kind: 'customer', x: 12, y: 12 },
      { id: 'ai', title: 'AI Agent', icon: 'bot', detail: 'An assistant qualifies the lead and helps book a time. Visual demo only.', kind: 'ai', x: 48, y: 12 },
      { id: 'qualify', title: 'Qualification', icon: 'list', detail: 'Capture intent, timing, and fit before the sales conversation.', kind: 'default', x: 84, y: 12 },
      { id: 'calendar', title: 'Calendar', icon: 'calendar', detail: 'Book an available slot without manual back-and-forth.', kind: 'calendar', x: 30, y: 48 },
      { id: 'crm', title: 'GHL CRM', icon: 'database', detail: 'Create the lead record with conversation context attached.', kind: 'crm', x: 70, y: 48 },
      { id: 'confirm', title: 'Confirmation', icon: 'check', detail: 'SMS and email confirmations go out automatically.', kind: 'sms', x: 30, y: 82 },
      { id: 'followup', title: 'Follow-up', icon: 'refresh', detail: 'Keep the conversation moving after the booking.', kind: 'pipeline', x: 70, y: 82 },
    ],
    connections: [
      ['customer', 'ai'],
      ['ai', 'qualify'],
      ['qualify', 'calendar'],
      ['calendar', 'crm'],
      ['crm', 'confirm'],
      ['confirm', 'followup'],
    ],
    steps: [
      {
        activate: ['customer'],
        statuses: { customer: 'New enquiry' },
        preview: 'chat',
        chatLine: { role: 'customer', text: "I'd like to book a consultation." },
        duration: 1400,
      },
      {
        activate: ['customer', 'ai'],
        statuses: { ai: 'Listening…' },
        particleFrom: 'customer',
        particleTo: 'ai',
        preview: 'chat',
        aiState: 'listening',
        chatLine: { role: 'ai', text: 'Absolutely. What day works for you?' },
        duration: 1600,
      },
      {
        activate: ['ai', 'qualify'],
        statuses: { ai: 'Qualifying lead…', qualify: 'Details captured' },
        particleFrom: 'ai',
        particleTo: 'qualify',
        aiState: 'qualifying',
        duration: 1400,
      },
      {
        activate: ['ai', 'calendar'],
        statuses: { ai: 'Booking appointment…', calendar: 'Slot offered' },
        particleFrom: 'ai',
        particleTo: 'calendar',
        preview: 'calendar',
        calendarState: 'selected',
        aiState: 'booking',
        duration: 1500,
      },
      {
        activate: ['calendar'],
        statuses: { calendar: 'Booking confirmed' },
        preview: 'calendar',
        calendarState: 'booked',
        duration: 1200,
      },
      {
        activate: ['calendar', 'crm'],
        statuses: { crm: 'Lead created' },
        particleFrom: 'calendar',
        particleTo: 'crm',
        preview: 'crm',
        crmStage: 'booked',
        duration: 1400,
      },
      {
        activate: ['crm', 'confirm'],
        statuses: { confirm: 'SMS + email sent' },
        particleFrom: 'crm',
        particleTo: 'confirm',
        duration: 1300,
      },
      {
        activate: ['confirm', 'followup'],
        statuses: { followup: 'Automation complete' },
        particleFrom: 'confirm',
        particleTo: 'followup',
        preview: 'crm',
        crmStage: 'confirmed',
        duration: 1600,
      },
    ],
  },
  {
    id: 'followup',
    tabLabel: 'Follow-Up',
    tabNumber: '03',
    leftEyebrow: 'AUTOMATED FOLLOW-UP',
    leftTitle: 'Keep leads moving automatically.',
    leftBody:
      'SMS, email, reminders, and pipeline updates keep every lead from going quiet after the first touch.',
    nodes: [
      { id: 'lead', title: 'New Lead', icon: 'user', detail: 'A new lead lands in your system from a form, ad, or call.', kind: 'customer', x: 50, y: 4 },
      { id: 'crm', title: 'GHL CRM', icon: 'database', detail: 'The contact is created and tagged with source and status.', kind: 'crm', x: 18, y: 28 },
      { id: 'automation', title: 'Automation', icon: 'zap', detail: 'A trigger starts the follow-up sequence instantly.', kind: 'automation', x: 82, y: 28 },
      { id: 'sms', title: 'SMS', icon: 'message', detail: 'A timely text reaches the lead within minutes.', kind: 'sms', x: 18, y: 56 },
      { id: 'email', title: 'Email', icon: 'mail', detail: 'A branded email follows with next-step details.', kind: 'email', x: 82, y: 56 },
      { id: 'reminder', title: 'Reminder', icon: 'bell', detail: 'A next-day reminder keeps the conversation warm.', kind: 'default', x: 18, y: 84 },
      { id: 'pipeline', title: 'Pipeline', icon: 'kanban', detail: 'The lead moves into a Follow-up stage for your team.', kind: 'pipeline', x: 82, y: 84 },
    ],
    connections: [
      ['lead', 'crm'],
      ['lead', 'automation'],
      ['crm', 'sms'],
      ['automation', 'email'],
      ['sms', 'reminder'],
      ['email', 'pipeline'],
      ['reminder', 'pipeline'],
    ],
    steps: [
      {
        activate: ['lead'],
        statuses: { lead: 'Incoming' },
        timeline: { time: '10:01', label: 'Lead created' },
        duration: 1300,
      },
      {
        activate: ['lead', 'crm'],
        statuses: { crm: 'Contact saved' },
        particleFrom: 'lead',
        particleTo: 'crm',
        preview: 'crm',
        crmStage: 'new',
        timeline: { time: '10:01', label: 'Lead created' },
        duration: 1300,
      },
      {
        activate: ['crm', 'automation'],
        statuses: { automation: 'Trigger fired' },
        particleFrom: 'crm',
        particleTo: 'automation',
        preview: 'automation',
        duration: 1300,
      },
      {
        activate: ['automation', 'sms'],
        statuses: { sms: 'SMS sent' },
        particleFrom: 'automation',
        particleTo: 'sms',
        timeline: { time: '10:02', label: 'SMS sent' },
        duration: 1400,
      },
      {
        activate: ['sms', 'email'],
        statuses: { email: 'Email sent' },
        particleFrom: 'sms',
        particleTo: 'email',
        timeline: { time: '10:05', label: 'Email sent' },
        duration: 1400,
      },
      {
        activate: ['email', 'reminder'],
        statuses: { reminder: 'Next day reminder' },
        particleFrom: 'email',
        particleTo: 'reminder',
        timeline: { time: 'Next day', label: 'Reminder' },
        duration: 1500,
      },
      {
        activate: ['reminder', 'pipeline'],
        statuses: { pipeline: 'Moved to Follow-up' },
        particleFrom: 'reminder',
        particleTo: 'pipeline',
        preview: 'crm',
        crmStage: 'followup',
        timeline: { time: 'Done', label: 'Pipeline updated' },
        duration: 1700,
      },
    ],
  },
];

export function getWorkflow(id: WorkflowId): WorkflowDef {
  return workflows.find((w) => w.id === id) ?? workflows[0];
}
