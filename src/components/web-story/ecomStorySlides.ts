import type { WebStorySlide } from './webStorySlides';

export const ecomStorySlides: WebStorySlide[] = [
  {
    id: 'catalog',
    label: 'Catalog',
    caption: 'Products arranged to sell',
    title: 'Catalog architecture',
    lede: 'Collections, variants, and merchandising are shaped around what people actually buy — not a dump of SKUs.',
    points: [
      'Collections that match how people shop',
      'Variants that do not confuse checkout',
      'Search and filters that find product',
      'Room to grow the catalog later',
    ],
  },
  {
    id: 'journey',
    label: 'Journey',
    caption: 'From product to paid order',
    title: 'Product journey',
    lede: 'The path from browse to buy is short, clear, and stable on desktop and mobile.',
    points: [
      'Product pages built to convert',
      'Trust and shipping shown early',
      'Mobile shopping that does not fight thumbs',
      'Related products that earn their place',
    ],
  },
  {
    id: 'checkout',
    label: 'Checkout',
    caption: 'Fewer steps, fewer drop-offs',
    title: 'Checkout',
    lede: 'Checkout is treated as a product: payments, shipping, and errors handled so the order actually completes.',
    points: [
      'Payment and shipping set up cleanly',
      'Guest checkout when it helps conversion',
      'Error states that do not lose the cart',
      'Mobile checkout that holds together',
    ],
  },
  {
    id: 'ops',
    label: 'Ops',
    caption: 'Store connected to operations',
    title: 'Store operations',
    lede: 'Inventory, fulfillment, and marketing tools sit behind the storefront so the team can run the business.',
    points: [
      'Inventory and shipping wired in',
      'Email and SMS tools connected',
      'Analytics on the products that sell',
      'Handover your team can operate',
    ],
  },
  {
    id: 'launch',
    label: 'Launch',
    caption: 'Go live, then keep improving',
    title: 'Launch',
    lede: 'Launch is a checklist: payments, redirects, tracking, and a store the team can update after we ship.',
    points: [
      'Payments tested before go-live',
      'Redirects and SEO basics in place',
      'Tracking on day one',
      'Training so you can keep merchandising',
    ],
  },
];
