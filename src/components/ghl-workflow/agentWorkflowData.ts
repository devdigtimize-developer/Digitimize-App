export type WorkflowId = 'booking' | 'voice' | 'followup';

export type AgentId =
  | 'customer'
  | 'intake'
  | 'qualify'
  | 'calendar'
  | 'crm'
  | 'followup'
  | 'voice';

export type AgentStatus =
  | 'idle'
  | 'receiving'
  | 'analyzing'
  | 'executing'
  | 'completed'
  | 'passing';

export type PreviewKind =
  | 'lead'
  | 'decision'
  | 'calendar'
  | 'crm'
  | 'automation'
  | 'messages'
  | 'voice'
  | 'chat'
  | 'complete'
  | null;

export type AgentDef = {
  id: AgentId;
  name: string;
  shortName: string;
  detail: string;
  icon: string;
};

export type ActivityEvent = {
  label: string;
};

export type AgentStep = {
  /** Primary agent this step focuses on */
  agent: AgentId;
  status: AgentStatus;
  task: string;
  result?: string;
  duration: number;
  activity?: string;
  /** Reset other agents to idle except those listed as completed */
  completedAgents?: AgentId[];
  handoffTo?: AgentId;
  handoffLabel?: string;
  preview?: PreviewKind;
  calendarState?: 'idle' | 'checking' | 'selected' | 'booked';
  crmStage?: 'new' | 'qualified' | 'booked' | 'followup';
  lead?: {
    source: string;
    intent: string;
    name: string;
    request: string;
  };
  decision?: {
    input: string;
    intent: string;
    quality: string;
    interest: string;
  };
  messages?: {
    sms: { state: 'preparing' | 'sending' | 'sent'; text: string };
    email: { state: 'preparing' | 'sending' | 'sent'; text: string };
  };
  voiceState?: 'listening' | 'understanding' | 'qualifying' | 'booking' | 'speaking';
  chatLine?: { role: 'customer' | 'ai'; text: string };
  systemNote?: string;
};

export type AgentWorkflow = {
  id: WorkflowId;
  tabLabel: string;
  tabNumber: string;
  leftEyebrow: string;
  leftTitle: string;
  leftBody: string;
  agents: AgentId[];
  steps: AgentStep[];
};

export const DEFAULT_LEFT = {
  eyebrow: 'GOHIGHLEVEL AUTOMATION',
  title: 'GoHighLevel Setup & Automation That Actually Captures Every Lead',
  body: 'We build the CRM, pipelines, and follow-up systems inside GoHighLevel so you stop losing leads to slow or missed follow-up.',
};

export const AGENT_CATALOG: Record<AgentId, AgentDef> = {
  customer: {
    id: 'customer',
    name: 'Customer',
    shortName: 'Customer',
    detail: 'A prospect requests a consultation from your site.',
    icon: 'user',
  },
  intake: {
    id: 'intake',
    name: 'Lead Intake Agent',
    shortName: 'Intake',
    detail: 'Detects and accepts new leads as they arrive.',
    icon: 'inbox',
  },
  qualify: {
    id: 'qualify',
    name: 'AI Qualification Agent',
    shortName: 'Qualify',
    detail: 'Analyzes intent and decides if the lead is ready to book.',
    icon: 'spark',
  },
  calendar: {
    id: 'calendar',
    name: 'Calendar Agent',
    shortName: 'Calendar',
    detail: 'Checks availability and creates appointments automatically.',
    icon: 'calendar',
  },
  crm: {
    id: 'crm',
    name: 'CRM Agent',
    shortName: 'CRM',
    detail: 'Creates contacts and updates pipeline stages in GoHighLevel.',
    icon: 'database',
  },
  followup: {
    id: 'followup',
    name: 'Follow-Up Agent',
    shortName: 'Follow-up',
    detail: 'Sends confirmations, reminders, and keeps leads moving.',
    icon: 'send',
  },
  voice: {
    id: 'voice',
    name: 'Voice / Conversation Agent',
    shortName: 'Voice',
    detail: 'Visual demonstration of listening, understanding, and booking.',
    icon: 'mic',
  },
};

const LEAD_ALEX = {
  source: 'Website',
  intent: 'Consultation',
  name: 'Alex',
  request: 'Book a strategy call',
};

export const agentWorkflows: AgentWorkflow[] = [
  {
    id: 'booking',
    tabLabel: 'Book a Call',
    tabNumber: '01',
    leftEyebrow: 'BOOKING AUTOMATION',
    leftTitle: 'A customer books a call.',
    leftBody:
      'Agents capture the lead, qualify intent, book the appointment, update the CRM, and start follow-up — without manual chasing.',
    agents: ['customer', 'intake', 'qualify', 'calendar', 'crm', 'followup'],
    steps: [
      {
        agent: 'customer',
        status: 'executing',
        task: "I'd like to book a consultation.",
        duration: 1100,
        activity: 'Customer request received',
        preview: 'chat',
        chatLine: { role: 'customer', text: "I'd like to book a consultation." },
        lead: LEAD_ALEX,
      },
      {
        agent: 'customer',
        status: 'passing',
        task: 'New lead detected',
        result: 'Passing to Intake',
        duration: 900,
        activity: 'New lead detected',
        handoffTo: 'intake',
        handoffLabel: 'Lead packet',
        preview: 'lead',
        lead: LEAD_ALEX,
      },
      {
        agent: 'intake',
        status: 'receiving',
        task: 'Receiving lead…',
        duration: 900,
        activity: 'Intake Agent started',
        completedAgents: ['customer'],
        preview: 'lead',
        lead: LEAD_ALEX,
      },
      {
        agent: 'intake',
        status: 'analyzing',
        task: 'Reading lead data…',
        duration: 1000,
        activity: 'Reading lead information',
        completedAgents: ['customer'],
        preview: 'lead',
        lead: LEAD_ALEX,
      },
      {
        agent: 'intake',
        status: 'executing',
        task: 'Identifying intent…',
        result: 'Contact detected ✓',
        duration: 1000,
        activity: 'Intent identified',
        completedAgents: ['customer'],
        preview: 'lead',
        lead: LEAD_ALEX,
      },
      {
        agent: 'intake',
        status: 'passing',
        task: 'Lead accepted ✓',
        result: 'Passing to AI Qualification',
        duration: 1000,
        activity: 'Lead accepted',
        completedAgents: ['customer'],
        handoffTo: 'qualify',
        handoffLabel: 'Qualified intake',
        preview: 'lead',
        lead: LEAD_ALEX,
      },
      {
        agent: 'qualify',
        status: 'receiving',
        task: 'Task received',
        duration: 800,
        activity: 'Qualification Agent woke up',
        completedAgents: ['customer', 'intake'],
        preview: 'decision',
        decision: {
          input: 'New lead',
          intent: '—',
          quality: 'Analyzing…',
          interest: '—',
        },
      },
      {
        agent: 'qualify',
        status: 'analyzing',
        task: 'Analyzing lead…',
        duration: 1200,
        activity: 'AI analyzing intent',
        completedAgents: ['customer', 'intake'],
        preview: 'decision',
        decision: {
          input: 'New lead',
          intent: 'Consultation',
          quality: 'Evaluating…',
          interest: 'Automation',
        },
      },
      {
        agent: 'qualify',
        status: 'executing',
        task: 'Decision: Qualified ✓',
        result: 'Send to Calendar Agent',
        duration: 1100,
        activity: 'Lead qualified',
        completedAgents: ['customer', 'intake'],
        preview: 'decision',
        decision: {
          input: 'New lead',
          intent: 'Consultation',
          quality: 'Qualified ✓',
          interest: 'Automation',
        },
      },
      {
        agent: 'qualify',
        status: 'passing',
        task: 'Qualification complete ✓',
        result: 'Passing booking request',
        duration: 900,
        activity: 'Handoff to Calendar Agent',
        completedAgents: ['customer', 'intake'],
        handoffTo: 'calendar',
        handoffLabel: 'Book consultation',
        preview: 'decision',
        decision: {
          input: 'New lead',
          intent: 'Consultation',
          quality: 'Qualified ✓',
          interest: 'Automation',
        },
      },
      {
        agent: 'calendar',
        status: 'receiving',
        task: 'Checking availability…',
        duration: 1000,
        activity: 'Calendar Agent checking slots',
        completedAgents: ['customer', 'intake', 'qualify'],
        preview: 'calendar',
        calendarState: 'checking',
      },
      {
        agent: 'calendar',
        status: 'executing',
        task: '11:30 selected',
        duration: 1100,
        activity: 'Appointment slot selected',
        completedAgents: ['customer', 'intake', 'qualify'],
        preview: 'calendar',
        calendarState: 'selected',
      },
      {
        agent: 'calendar',
        status: 'passing',
        task: 'Appointment created ✓',
        result: 'Passing to CRM Agent',
        duration: 1000,
        activity: 'Appointment created',
        completedAgents: ['customer', 'intake', 'qualify'],
        handoffTo: 'crm',
        handoffLabel: 'Booking result',
        preview: 'calendar',
        calendarState: 'booked',
      },
      {
        agent: 'crm',
        status: 'receiving',
        task: 'Creating contact…',
        duration: 900,
        activity: 'CRM creating contact',
        completedAgents: ['customer', 'intake', 'qualify', 'calendar'],
        preview: 'crm',
        crmStage: 'new',
        lead: LEAD_ALEX,
      },
      {
        agent: 'crm',
        status: 'executing',
        task: 'Updating pipeline…',
        result: 'New → Qualified → Booked',
        duration: 1100,
        activity: 'Pipeline updated',
        completedAgents: ['customer', 'intake', 'qualify', 'calendar'],
        preview: 'crm',
        crmStage: 'booked',
        lead: LEAD_ALEX,
      },
      {
        agent: 'crm',
        status: 'passing',
        task: 'CRM updated ✓',
        result: 'Passing to Follow-Up Agent',
        duration: 900,
        activity: 'CRM updated',
        completedAgents: ['customer', 'intake', 'qualify', 'calendar'],
        handoffTo: 'followup',
        handoffLabel: 'Confirmation job',
        preview: 'crm',
        crmStage: 'booked',
        lead: LEAD_ALEX,
      },
      {
        agent: 'followup',
        status: 'receiving',
        task: 'Preparing confirmation…',
        duration: 900,
        activity: 'Follow-Up Agent started',
        completedAgents: ['customer', 'intake', 'qualify', 'calendar', 'crm'],
        preview: 'messages',
        messages: {
          sms: { state: 'preparing', text: 'Your consultation is confirmed for 11:30 AM.' },
          email: { state: 'preparing', text: 'Your appointment has been scheduled.' },
        },
      },
      {
        agent: 'followup',
        status: 'executing',
        task: 'Sending SMS + email…',
        duration: 1100,
        activity: 'Confirmation sending',
        completedAgents: ['customer', 'intake', 'qualify', 'calendar', 'crm'],
        preview: 'messages',
        messages: {
          sms: { state: 'sending', text: 'Your consultation is confirmed for 11:30 AM.' },
          email: { state: 'sending', text: 'Your appointment has been scheduled.' },
        },
      },
      {
        agent: 'followup',
        status: 'executing',
        task: 'Confirmations sent ✓',
        result: 'Reminder scheduled',
        duration: 1100,
        activity: 'Confirmation sent',
        completedAgents: ['customer', 'intake', 'qualify', 'calendar', 'crm'],
        preview: 'messages',
        messages: {
          sms: { state: 'sent', text: 'Your consultation is confirmed for 11:30 AM.' },
          email: { state: 'sent', text: 'Your appointment has been scheduled.' },
        },
      },
      {
        agent: 'followup',
        status: 'completed',
        task: 'Follow-up active ✓',
        result: 'Automation complete',
        duration: 1600,
        activity: 'Automation complete',
        completedAgents: ['customer', 'intake', 'qualify', 'calendar', 'crm', 'followup'],
        preview: 'complete',
        systemNote: 'System running automatically',
      },
      {
        agent: 'followup',
        status: 'completed',
        task: 'Follow-up active ✓',
        result: 'Automation continues',
        duration: 1400,
        activity: 'Reminder workflow queued',
        completedAgents: ['customer', 'intake', 'qualify', 'calendar', 'crm', 'followup'],
        preview: 'automation',
      },
    ],
  },
  {
    id: 'voice',
    tabLabel: 'AI Voice Agent',
    tabNumber: '02',
    leftEyebrow: 'AI VOICE AGENT',
    leftTitle: 'Conversation handled by an intelligent agent.',
    leftBody:
      'A visual demonstration of listening, understanding, qualifying, and booking — shown as a product workflow, not a live call.',
    agents: ['customer', 'voice', 'qualify', 'calendar', 'crm', 'followup'],
    steps: [
      {
        agent: 'customer',
        status: 'executing',
        task: 'Incoming consultation request',
        duration: 1000,
        activity: 'Customer call started (demo)',
        preview: 'chat',
        chatLine: { role: 'customer', text: "I'd like to book a consultation." },
      },
      {
        agent: 'customer',
        status: 'passing',
        task: 'Routing to Voice Agent',
        duration: 800,
        activity: 'Routed to Voice Agent',
        handoffTo: 'voice',
        handoffLabel: 'Audio stream',
        preview: 'voice',
        voiceState: 'listening',
      },
      {
        agent: 'voice',
        status: 'receiving',
        task: 'Listening…',
        duration: 1200,
        activity: 'Voice Agent listening',
        completedAgents: ['customer'],
        preview: 'voice',
        voiceState: 'listening',
      },
      {
        agent: 'voice',
        status: 'analyzing',
        task: 'Understanding request…',
        result: 'Customer wants a consultation',
        duration: 1200,
        activity: 'Understanding request',
        completedAgents: ['customer'],
        preview: 'voice',
        voiceState: 'understanding',
        chatLine: { role: 'ai', text: 'Absolutely. What day works for you?' },
      },
      {
        agent: 'voice',
        status: 'executing',
        task: 'Qualifying…',
        duration: 1000,
        activity: 'Voice Agent qualifying',
        completedAgents: ['customer'],
        preview: 'voice',
        voiceState: 'qualifying',
      },
      {
        agent: 'voice',
        status: 'passing',
        task: 'Booking appointment…',
        result: 'Passing to Calendar',
        duration: 1000,
        activity: 'Voice Agent booking',
        completedAgents: ['customer'],
        handoffTo: 'calendar',
        handoffLabel: 'Preferred time',
        preview: 'voice',
        voiceState: 'booking',
      },
      {
        agent: 'calendar',
        status: 'executing',
        task: '11:30 confirmed',
        duration: 1100,
        activity: 'Appointment booked',
        completedAgents: ['customer', 'voice'],
        preview: 'calendar',
        calendarState: 'booked',
      },
      {
        agent: 'calendar',
        status: 'passing',
        task: 'Booking complete ✓',
        result: 'Passing to CRM',
        duration: 900,
        activity: 'Handoff to CRM Agent',
        completedAgents: ['customer', 'voice'],
        handoffTo: 'crm',
        handoffLabel: 'Booking record',
        preview: 'calendar',
        calendarState: 'booked',
      },
      {
        agent: 'crm',
        status: 'executing',
        task: 'Lead created in GHL',
        duration: 1100,
        activity: 'CRM lead created',
        completedAgents: ['customer', 'voice', 'calendar'],
        preview: 'crm',
        crmStage: 'booked',
        lead: LEAD_ALEX,
      },
      {
        agent: 'crm',
        status: 'passing',
        task: 'CRM updated ✓',
        result: 'Passing to Follow-Up',
        duration: 900,
        activity: 'CRM handoff complete',
        completedAgents: ['customer', 'voice', 'calendar'],
        handoffTo: 'followup',
        handoffLabel: 'Confirm job',
        preview: 'crm',
        crmStage: 'booked',
      },
      {
        agent: 'followup',
        status: 'executing',
        task: 'Confirmations sent ✓',
        duration: 1200,
        activity: 'SMS + email sent',
        completedAgents: ['customer', 'voice', 'calendar', 'crm'],
        preview: 'messages',
        messages: {
          sms: { state: 'sent', text: 'Your consultation is confirmed for 11:30 AM.' },
          email: { state: 'sent', text: 'Your appointment has been scheduled.' },
        },
      },
      {
        agent: 'followup',
        status: 'completed',
        task: 'Follow-up active ✓',
        result: 'Demo cycle complete',
        duration: 1600,
        activity: 'Voice workflow complete',
        completedAgents: ['customer', 'voice', 'calendar', 'crm', 'followup'],
        preview: 'complete',
        systemNote: 'Visual demonstration only',
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
    agents: ['intake', 'crm', 'qualify', 'followup', 'calendar'],
    steps: [
      {
        agent: 'intake',
        status: 'receiving',
        task: 'New lead landed',
        duration: 1000,
        activity: 'Lead created',
        preview: 'lead',
        lead: { ...LEAD_ALEX, request: 'Requested a callback' },
      },
      {
        agent: 'intake',
        status: 'passing',
        task: 'Lead accepted ✓',
        result: 'Passing to CRM',
        duration: 900,
        activity: 'Intake complete',
        handoffTo: 'crm',
        handoffLabel: 'New contact',
        preview: 'lead',
        lead: LEAD_ALEX,
      },
      {
        agent: 'crm',
        status: 'executing',
        task: 'Contact saved',
        duration: 1000,
        activity: 'CRM contact created',
        completedAgents: ['intake'],
        preview: 'crm',
        crmStage: 'new',
        lead: LEAD_ALEX,
      },
      {
        agent: 'crm',
        status: 'passing',
        task: 'Triggering automation',
        result: 'Passing to Follow-Up',
        duration: 900,
        activity: 'Automation trigger fired',
        completedAgents: ['intake'],
        handoffTo: 'followup',
        handoffLabel: 'Follow-up job',
        preview: 'automation',
      },
      {
        agent: 'followup',
        status: 'executing',
        task: 'SMS sent',
        duration: 1100,
        activity: 'SMS sent',
        completedAgents: ['intake', 'crm'],
        preview: 'messages',
        messages: {
          sms: { state: 'sent', text: 'Thanks for reaching out — when works for a quick call?' },
          email: { state: 'preparing', text: 'Here is a short overview of how we can help.' },
        },
      },
      {
        agent: 'followup',
        status: 'executing',
        task: 'Email sent',
        duration: 1100,
        activity: 'Email sent',
        completedAgents: ['intake', 'crm'],
        preview: 'messages',
        messages: {
          sms: { state: 'sent', text: 'Thanks for reaching out — when works for a quick call?' },
          email: { state: 'sent', text: 'Here is a short overview of how we can help.' },
        },
      },
      {
        agent: 'followup',
        status: 'analyzing',
        task: 'Next-day reminder queued',
        duration: 1100,
        activity: 'Reminder scheduled',
        completedAgents: ['intake', 'crm'],
        preview: 'automation',
      },
      {
        agent: 'crm',
        status: 'executing',
        task: 'Moved to Follow-up',
        duration: 1100,
        activity: 'Pipeline updated',
        completedAgents: ['intake', 'followup'],
        preview: 'crm',
        crmStage: 'followup',
        lead: LEAD_ALEX,
      },
      {
        agent: 'followup',
        status: 'completed',
        task: 'Follow-up active ✓',
        result: 'Sequence running',
        duration: 1600,
        activity: 'Follow-up sequence active',
        completedAgents: ['intake', 'crm', 'followup'],
        preview: 'complete',
        systemNote: 'Running without manual intervention',
      },
    ],
  },
];

export function getAgentWorkflow(id: WorkflowId): AgentWorkflow {
  return agentWorkflows.find((w) => w.id === id) ?? agentWorkflows[0];
}

/** Demo counters — visual only */
export const DEMO_SYSTEM = {
  agents: 5,
  tasks: 12,
  label: 'LIVE DEMO',
};
