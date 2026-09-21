type TrustedBrand = {
  name: string;
  slug: string;
};

/** Platforms Digtimize builds with shown as a selected-clients style grid. */
const brands: TrustedBrand[] = [
  { name: 'Shopify', slug: 'shopify' },
  { name: 'WordPress', slug: 'wordpress' },
  { name: 'Stripe', slug: 'stripe' },
  { name: 'HubSpot', slug: 'hubspot' },
  { name: 'Meta', slug: 'meta' },
  { name: 'Google', slug: 'google' },
  { name: 'Notion', slug: 'notion' },
  { name: 'Figma', slug: 'figma' },
];

export default function TrustedBy() {
  return (
    <section className="section trusted-section" id="trusted" aria-labelledby="trusted-heading">
      <div className="container">
        <div className="trusted-head">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            Selected clients
          </p>
          <h2 id="trusted-heading">Trusted by teams worldwide.</h2>
        </div>

        <ul className="trusted-grid">
          {brands.map((brand) => (
            <li key={brand.name}>
              <article className="trusted-card" aria-label={brand.name}>
                <img
                  className="trusted-logo-img"
                  src={`https://cdn.simpleicons.org/${brand.slug}`}
                  alt={brand.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                />
                <span className="trusted-name">{brand.name}</span>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
