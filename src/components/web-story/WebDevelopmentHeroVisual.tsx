import { useEffect, useState } from 'react';
import {
  BarChart3,
  Bot,
  Code2,
  Globe2,
  Layers,
  ShoppingBag,
  Smartphone,
  Store,
  Workflow,
  Zap,
} from 'lucide-react';

type Card = {
  id: string;
  title: string;
  text: string;
  icon: typeof Code2;
  x: string;
  y: string;
  duration: string;
  mobile?: boolean;
};

const WEB_CARDS: Card[] = [
  { id: 'frontend', title: 'Frontend', text: 'React / Next.js', icon: Code2, x: '2%', y: '8%', duration: '7s', mobile: true },
  { id: 'cms', title: 'CMS', text: 'WordPress', icon: Globe2, x: '58%', y: '2%', duration: '9s', mobile: true },
  { id: 'ecom', title: 'E-commerce', text: 'Shopify / WooCommerce', icon: Store, x: '72%', y: '28%', duration: '8s', mobile: true },
  { id: 'perf', title: 'Performance', text: 'Speed / SEO', icon: Zap, x: '70%', y: '58%', duration: '11s', mobile: true },
  { id: 'responsive', title: 'Responsive', text: 'Mobile / Desktop', icon: Smartphone, x: '42%', y: '78%', duration: '8.5s' },
  { id: 'analytics', title: 'Analytics', text: 'Tracking that informs', icon: BarChart3, x: '4%', y: '68%', duration: '10s' },
  { id: 'stack', title: 'Typed stack', text: 'TypeScript', icon: Layers, x: '0%', y: '38%', duration: '9.5s' },
];

const HOME_CARDS: Card[] = [
  { id: 'frontend', title: 'GoHighLevel', text: 'CRM, pipelines, follow-up', icon: Workflow, x: '2%', y: '8%', duration: '7s', mobile: true },
  { id: 'cms', title: 'Websites', text: 'WordPress / React', icon: Globe2, x: '58%', y: '2%', duration: '9s', mobile: true },
  { id: 'ecom', title: 'Shopify', text: 'Stores that convert', icon: Store, x: '72%', y: '28%', duration: '8s', mobile: true },
  { id: 'perf', title: 'Mobile apps', text: 'iOS / Android', icon: Smartphone, x: '70%', y: '58%', duration: '11s', mobile: true },
  { id: 'responsive', title: 'AI & automation', text: 'Chat, search, RAG', icon: Bot, x: '42%', y: '78%', duration: '8.5s' },
  { id: 'analytics', title: 'Ecommerce', text: 'Catalog to checkout', icon: ShoppingBag, x: '4%', y: '68%', duration: '10s' },
  { id: 'stack', title: 'Custom software', text: 'Tools your team runs', icon: Code2, x: '0%', y: '38%', duration: '9.5s' },
];

const PATHS: { id: string; d: string; delay: string }[] = [
  { id: 'frontend', delay: '0s', d: 'M 78 92 C 120 168, 210 96, 268 188 C 304 240, 292 248, 320 268' },
  { id: 'cms', delay: '1.2s', d: 'M 390 48 C 360 110, 420 150, 388 210 C 368 244, 348 252, 334 268' },
  { id: 'ecom', delay: '2.1s', d: 'M 548 198 C 500 168, 470 220, 428 248 C 392 268, 362 262, 338 278' },
  { id: 'perf', delay: '0.6s', d: 'M 536 348 C 488 372, 450 320, 412 318 C 378 316, 356 292, 338 286' },
  { id: 'responsive', delay: '1.8s', d: 'M 360 478 C 348 420, 400 390, 368 348 C 348 322, 340 308, 332 292' },
  { id: 'analytics', delay: '2.8s', d: 'M 96 412 C 160 448, 210 360, 248 340 C 286 320, 300 300, 318 288' },
  { id: 'stack', delay: '0.9s', d: 'M 48 248 C 110 220, 168 280, 230 272 C 276 266, 300 278, 318 282' },
];

const PULSES = ['frontend', 'ecom', 'perf', 'analytics', 'cms', 'responsive', 'stack'];

type Props = {
  scope?: 'home' | 'web';
};

export default function WebDevelopmentHeroVisual({ scope = 'web' }: Props) {
  const [hover, setHover] = useState<string | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const cards = scope === 'home' ? HOME_CARDS : WEB_CARDS;

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return (
    <div
      className={`wd-eco${reduceMotion ? ' is-reduced' : ''}${hover ? ' is-hovering' : ''}`}
      data-hover={hover ?? undefined}
      aria-hidden="true"
    >
      <div className="wd-eco-atmosphere" />

      <svg className="wd-eco-svg" viewBox="0 0 640 560" fill="none">
        <defs>
          <linearGradient id={`wd-eco-stroke-${scope}`} x1="40" y1="40" x2="600" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9b7ae8" stopOpacity="0.55" />
            <stop offset="0.55" stopColor="#7a5cf0" stopOpacity="0.42" />
            <stop offset="1" stopColor="#5b6bf5" stopOpacity="0.28" />
          </linearGradient>
        </defs>

        {PATHS.map((path) => (
          <g
            key={path.id}
            className={`wd-eco-path-group${hover === path.id ? ' is-active' : ''}${['frontend', 'cms', 'ecom', 'perf'].includes(path.id) ? ' is-priority' : ''}`}
            data-path={path.id}
          >
            <path
              id={`wd-eco-motion-${scope}-${path.id}`}
              className="wd-eco-path"
              d={path.d}
              style={{ stroke: `url(#wd-eco-stroke-${scope})` }}
            />
            {PULSES.includes(path.id) ? (
              <path className="wd-eco-pulse" d={path.d} style={{ animationDelay: path.delay }} />
            ) : null}
          </g>
        ))}

        {!reduceMotion &&
          PULSES.map((id, index) => (
            <circle key={id} r="3.2" className="wd-eco-particle">
              <animateMotion dur={`${11 + index}s`} repeatCount="indefinite">
                <mpath href={`#wd-eco-motion-${scope}-${id}`} />
              </animateMotion>
            </circle>
          ))}
      </svg>

      <div className={`wd-eco-core${hover ? ' is-lit' : ''}${scope === 'home' ? ' is-home' : ''}`}>
        {scope === 'home' ? (
          <>
            <span>Digtimize</span>
            <strong>Growth systems</strong>
          </>
        ) : (
          <>
            <span>Web</span>
            <strong>Development</strong>
          </>
        )}
      </div>

      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <article
            key={card.id}
            className={`wd-eco-card${card.mobile ? ' is-priority' : ''}`}
            style={{ left: card.x, top: card.y, animationDuration: card.duration }}
            onMouseEnter={() => setHover(card.id)}
            onMouseLeave={() => setHover(null)}
          >
            <span className="wd-eco-card-icon">
              <Icon size={15} />
            </span>
            <div>
              <b>{card.title}</b>
              <small>{card.text}</small>
            </div>
          </article>
        );
      })}
    </div>
  );
}
