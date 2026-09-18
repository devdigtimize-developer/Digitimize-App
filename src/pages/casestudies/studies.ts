export type CaseStudy = {
  company: string;
  product: string;
  category: string;
  to: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    company: 'Northline Retail',
    product: 'Shopify storefront and checkout',
    category: 'Shopify',
    to: '/case-studies/northline-retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80',
  },
  {
    company: 'BrightPath Agency',
    product: 'GoHighLevel lead system',
    category: 'Automation',
    to: '/case-studies/brightpath-agency',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    company: 'Harbor & Co',
    product: 'Custom WordPress website',
    category: 'WordPress',
    to: '/case-studies/harbor',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
  },
  {
    company: 'Pulse Fitness',
    product: 'Mobile booking experience',
    category: 'Mobile',
    to: '/work',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    company: 'Lumen Labs',
    product: 'AI support assistant',
    category: 'AI',
    to: '/work',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
  },
  {
    company: 'Oak & Ember',
    product: 'Product catalog and store',
    category: 'Ecommerce',
    to: '/work',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1400&q=80',
  },
];
