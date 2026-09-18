export type PricingCta = {
  label: string;
  to: string;
};

export type PricingPackage = {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  priceLabel: string;
  cta: PricingCta;
  visual: 'pipeline' | 'flow' | 'window';
  emphasis?: boolean;
};

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'foundation',
    category: 'Foundation',
    title: 'GoHighLevel Setup',
    description: 'CRM setup, pipeline build, and one automated follow-up sequence.',
    price: '$497',
    priceLabel: 'starting at',
    cta: { label: 'Get started', to: '/contact' },
    visual: 'pipeline',
  },
  {
    id: 'ongoing',
    category: 'Ongoing',
    title: 'GoHighLevel Managed Retainer',
    description: 'Ongoing management, automation, and support for a system that keeps improving.',
    price: '$400',
    priceLabel: '/ month',
    cta: { label: 'Talk about support', to: '/contact' },
    visual: 'flow',
    emphasis: true,
  },
  {
    id: 'custom',
    category: 'Custom build',
    title: 'Websites, stores & software',
    description: 'WordPress, Shopify, AI tools, and custom coding shaped around your goals.',
    price: 'Contact us',
    priceLabel: 'for a starting price',
    cta: { label: 'Get a custom quote', to: '/contact' },
    visual: 'window',
  },
];
