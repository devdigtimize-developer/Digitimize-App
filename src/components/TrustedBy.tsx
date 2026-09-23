type TrustedBrand = {
  name: string;
  file: string;
};

const brands: TrustedBrand[] = [
  { name: 'Reception Remote', file: 'reception-remote.png' },
  { name: 'DiscoverU', file: 'discoveru.png' },
  { name: 'Dr. Rashieda Timpson', file: 'dr-rashieda-timpson.png' },
  { name: 'Roadsense', file: 'roadsense-mark.png' },
  { name: 'FI Braids & Scalp Care', file: 'fi-braids.png' },
  { name: 'Dream Esthetiques MD', file: 'dream-esthetiques.png' },
  { name: 'American Heroes Medical Services', file: 'ahms.png' },
  { name: 'Chosen Family Home Care', file: 'chosen-family.png' },
  { name: 'Modern Day Monk', file: 'modern-day-monk.png' },
  { name: 'Pinpoint Property Purchases', file: 'pinpoint.png' },
  { name: 'Magnetic Fitness Coach', file: 'magnetic-fitness-coach.png' },
  { name: "She's The Total Package", file: 'shes-the-total-package.png' },
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
              <article className="trusted-card">
                <img
                  className="trusted-logo-img"
                  src={`/images/clientslogo/${brand.file}`}
                  alt=""
                  width={220}
                  height={88}
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
