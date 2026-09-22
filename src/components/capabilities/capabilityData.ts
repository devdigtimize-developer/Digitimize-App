export type CapabilityCta = {
  label: string;
  to: string;
};

export type CapabilityLeaf = {
  id: string;
  label: string;
  x: number;
  y: number;
};

export type CapabilityBranch = {
  id: string;
  label: string;
  lines: [string, string];
  panelTitle: string;
  description: string;
  cta: CapabilityCta;
  items: string[];
  x: number;
  y: number;
  anchor: 'top' | 'right' | 'bottom' | 'left';
  leaves: CapabilityLeaf[];
};

const CX = 460;
const CY = 350;

function pt(r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return {
    x: Math.round((CX + r * Math.cos(rad)) * 10) / 10,
    y: Math.round((CY + r * Math.sin(rad)) * 10) / 10,
  };
}

function fan(labels: string[], r: number, centerDeg: number, spread: number): CapabilityLeaf[] {
  const start = centerDeg - spread / 2;
  const step = labels.length === 1 ? 0 : spread / (labels.length - 1);
  return labels.map((label, index) => ({
    id: label.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    label,
    ...pt(r, start + index * step),
  }));
}

export const CAPABILITY_HUB = {
  id: 'digtimize',
  label: 'DIGTIMIZE',
  x: CX,
  y: CY,
};

export const CAPABILITY_DEFAULT = {
  title: 'Connected Capabilities',
  description: 'Digtimize connects AI, automation, web platforms, and custom software into one operating system for the business, not a pile of disconnected tools.',
  items: ['AI & machine learning', 'Web & app development', 'GoHighLevel automation', 'Custom software'],
  cta: { label: 'Get a free project quote', to: '/contact' } satisfies CapabilityCta,
};

export const CAPABILITY_BRANCHES: CapabilityBranch[] = [
  {
    id: 'ai',
    label: 'AI / Machine Learning',
    lines: ['AI / MACHINE', 'LEARNING'],
    panelTitle: 'AI & Machine Learning',
    description: 'Useful AI wired into the systems your team already runs, not a demo chatbot sitting on the side of the site.',
    cta: { label: 'Explore an AI project', to: '/contact' },
    items: ['AI Chatbots', 'RAG Systems', 'LLM Integrations', 'AI Agents', 'Smart Search', 'Recommendations'],
    ...pt(178, -90),
    anchor: 'top',
    leaves: fan(['AI Chatbots', 'RAG', 'LLM Integration', 'AI Agents', 'Smart Search', 'Recommendations'], 298, -90, 76),
  },
  {
    id: 'web',
    label: 'Web & App Development',
    lines: ['WEB & APP', 'DEVELOPMENT'],
    panelTitle: 'Web & App Development',
    description: 'Custom, responsive digital products shaped around the business, never a generic template.',
    cta: { label: 'Explore web & app', to: '/services/web-development' },
    items: ['React', 'Next.js', 'Responsive Web', 'Applications', 'API Integration'],
    ...pt(214, 6),
    anchor: 'right',
    leaves: fan(['React', 'Next.js', 'Responsive Web', 'Applications', 'API Integration'], 326, 6, 64),
  },
  {
    id: 'custom',
    label: 'Custom Software',
    lines: ['CUSTOM', 'SOFTWARE'],
    panelTitle: 'Custom Software',
    description: 'When off-the-shelf tools cannot carry the workflow, we build the application around how the team actually works.',
    cta: { label: 'Discuss your project', to: '/services/custom-software' },
    items: ['Web Applications', 'API Integrations', 'Internal Dashboards', 'Automation Systems', 'Custom Backend'],
    ...pt(178, 90),
    anchor: 'bottom',
    leaves: fan(['Web Applications', 'APIs', 'Dashboards', 'Internal Tools', 'Backend Systems', 'Automation'], 298, 90, 76),
  },
  {
    id: 'ghl',
    label: 'GHL / Automation',
    lines: ['GHL /', 'AUTOMATION'],
    panelTitle: 'GoHighLevel Automation',
    description: 'CRM, pipelines, funnels, and follow-up systems that keep every opportunity moving without extra manual work.',
    cta: { label: 'Explore GHL services', to: '/services/gohighlevel-automation' },
    items: ['CRM', 'Pipelines', 'Funnels', 'Follow-up Automation', 'SMS / Email', 'Calendar Automation', 'Integrations'],
    ...pt(214, 186),
    anchor: 'left',
    leaves: fan(['CRM', 'Pipelines', 'Funnels', 'Follow-up Automation', 'SMS / Email', 'Calendar', 'Integrations'], 326, 186, 58),
  },
];

export const CAPABILITY_VIEWBOX = '-110 -55 1100 800';
export const CAPABILITY_HUB_POINT = { x: CX, y: CY };

export function curvePath(
  from: { x: number; y: number },
  to: { x: number; y: number },
  bend = 0.18,
) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const cx = mx - dy * bend;
  const cy = my + dx * bend;
  return `M ${from.x} ${from.y} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${to.x} ${to.y}`;
}
