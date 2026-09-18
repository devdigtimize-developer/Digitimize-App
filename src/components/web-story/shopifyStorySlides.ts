import type { WebStorySlide } from './webStorySlides';

export const shopifyStorySlides: WebStorySlide[] = [
  {
    id: 'theme',
    label: 'Theme',
    caption: 'A theme that fits the brand',
    title: 'Theme foundation',
    lede: 'We start from a Shopify theme shaped around your catalog and brand, not a look you cannot edit later.',
    points: [
      'Theme chosen for how you sell',
      'Brand applied without fighting Liquid',
      'Sections your team can rearrange',
      'Speed kept in view from the start',
    ],
  },
  {
    id: 'sections',
    label: 'Sections',
    caption: 'Custom sections, not one-off pages',
    title: 'Custom sections',
    lede: 'Templates and sections are built so new campaigns and collections do not need a developer every time.',
    points: [
      'Custom sections for the pages you use',
      'Product templates that convert',
      'Collection layouts that scale',
      'Content your team can change in Shopify',
    ],
  },
  {
    id: 'checkout',
    label: 'Checkout',
    caption: 'Checkout that holds on every device',
    title: 'Checkout experience',
    lede: 'Checkout, payments, and shipping are set up so the last step is short and stable.',
    points: [
      'Payments and shipping configured',
      'Trust shown before they pay',
      'Mobile checkout that does not break',
      'Apps that help, not clutter',
    ],
  },
  {
    id: 'apps',
    label: 'Apps',
    caption: 'Only the apps the store needs',
    title: 'Apps and integrations',
    lede: 'Email, reviews, subscriptions, and fulfillment plug in without turning the store into an app pile.',
    points: [
      'Klaviyo, reviews, and support where useful',
      'Fulfillment and inventory connected',
      'Subscriptions when the product needs them',
      'No extra apps just because they exist',
    ],
  },
  {
    id: 'handoff',
    label: 'Handoff',
    caption: 'A store your team can own',
    title: 'Handoff and support',
    lede: 'You get a Shopify store the team can merchandise, plus a clear path for the next round of improvements.',
    points: [
      'CMS training in the Shopify admin',
      'Speed and conversion pass before launch',
      'Redirects and tracking in place',
      'Support after go-live when you need it',
    ],
  },
];
