export type HeroCta = {
  label: string;
  to: string;
};

export type HeroSlideData = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  primary: HeroCta;
  secondary: HeroCta;
  image: string;
  alt: string;
};

/* Original generated stills, stored locally under public/images/hero. */
export const HERO_SLIDES: HeroSlideData[] = [
  {
    id: 'web-development',
    eyebrow: 'Websites that work for your business',
    title: 'Websites built around your business, not a template.',
    accent: 'not a template',
    description: 'A clear site that explains what you do and helps visitors take the next step: contact you, book a call, or buy.',
    primary: { label: 'Tell us about your business', to: '/contact' },
    secondary: { label: 'Explore how we work', to: '/work' },
    image: '/images/hero/web-development.webp',
    alt: 'A dark studio with a large monitor showing a refined website layout.',
  },
  {
    id: 'ghl-automation',
    eyebrow: 'Lead follow-up & automation',
    title: 'Stop losing leads to slow follow-up.',
    accent: 'slow follow-up',
    description: 'We set up systems that welcome new enquiries, guide them through clear stages, and keep conversations moving, without more manual chasing.',
    primary: { label: "Let's discuss your project", to: '/contact' },
    secondary: { label: 'Explore automation', to: '/services/gohighlevel-automation' },
    image: '/images/hero/ghl-automation.webp',
    alt: 'A large display showing a connected CRM and automation workflow.',
  },
  {
    id: 'ai-automation',
    eyebrow: 'Practical AI for your business',
    title: 'Helpful answers, without more busywork.',
    accent: 'without more busywork',
    description: 'Practical AI helpers that support your website or team using information you already have, so customers get answers faster.',
    primary: { label: 'Start your digital journey', to: '/contact' },
    secondary: { label: 'Explore our services', to: '/services' },
    image: '/images/hero/ai-automation.webp',
    alt: 'A laptop showing a restrained business AI chat interface on a dark desk.',
  },
  {
    id: 'ecommerce',
    eyebrow: 'Online stores that sell',
    title: 'Stores built to turn browsing into buying.',
    accent: 'browsing into buying',
    description: 'Clean product pages, simple checkout, and the connections your shop needs to run smoothly as you grow.',
    primary: { label: 'Get a custom store solution', to: '/contact' },
    secondary: { label: 'Explore Shopify', to: '/services/shopify-development' },
    image: '/images/hero/ecommerce.webp',
    alt: 'A laptop showing a fashion storefront beside a leather bag on a dark surface.',
  },
  {
    id: 'custom-software',
    eyebrow: 'Tools built for how you work',
    title: 'When spreadsheets can no longer carry the work.',
    accent: 'no longer carry',
    description: 'Simple dashboards and internal tools built around your real workflow, not generic software you have to fight.',
    primary: { label: 'Discuss your project', to: '/contact' },
    secondary: { label: 'Explore custom software', to: '/services/custom-software' },
    image: '/images/hero/custom-software.webp',
    alt: 'An ultrawide monitor showing a calm internal operations dashboard.',
  },
];
