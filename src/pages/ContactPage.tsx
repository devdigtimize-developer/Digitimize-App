import { useEffect, useState, type FormEvent } from 'react';
import { ArrowLeft, ArrowRight, Check, Globe2, Mail, Phone } from 'lucide-react';
import { sendQuoteEmails } from '@/lib/sendQuoteEmails';

const services = [
  'Website / WordPress',
  'Shopify store',
  'GoHighLevel automation',
  'AI tools',
  'Custom software',
  'Other',
];

const COUNTRIES = [
  { iso: 'PK', name: 'Pakistan', code: '+92' },
  { iso: 'US', name: 'United States', code: '+1' },
  { iso: 'GB', name: 'United Kingdom', code: '+44' },
  { iso: 'AE', name: 'United Arab Emirates', code: '+971' },
  { iso: 'SA', name: 'Saudi Arabia', code: '+966' },
  { iso: 'QA', name: 'Qatar', code: '+974' },
  { iso: 'KW', name: 'Kuwait', code: '+965' },
  { iso: 'BH', name: 'Bahrain', code: '+973' },
  { iso: 'OM', name: 'Oman', code: '+968' },
  { iso: 'IN', name: 'India', code: '+91' },
  { iso: 'BD', name: 'Bangladesh', code: '+880' },
  { iso: 'CA', name: 'Canada', code: '+1' },
  { iso: 'AU', name: 'Australia', code: '+61' },
  { iso: 'DE', name: 'Germany', code: '+49' },
  { iso: 'FR', name: 'France', code: '+33' },
  { iso: 'NL', name: 'Netherlands', code: '+31' },
  { iso: 'IT', name: 'Italy', code: '+39' },
  { iso: 'ES', name: 'Spain', code: '+34' },
  { iso: 'SE', name: 'Sweden', code: '+46' },
  { iso: 'NO', name: 'Norway', code: '+47' },
  { iso: 'DK', name: 'Denmark', code: '+45' },
  { iso: 'IE', name: 'Ireland', code: '+353' },
  { iso: 'SG', name: 'Singapore', code: '+65' },
  { iso: 'MY', name: 'Malaysia', code: '+60' },
  { iso: 'ID', name: 'Indonesia', code: '+62' },
  { iso: 'PH', name: 'Philippines', code: '+63' },
  { iso: 'TH', name: 'Thailand', code: '+66' },
  { iso: 'TR', name: 'Turkey', code: '+90' },
  { iso: 'EG', name: 'Egypt', code: '+20' },
  { iso: 'ZA', name: 'South Africa', code: '+27' },
  { iso: 'NG', name: 'Nigeria', code: '+234' },
  { iso: 'KE', name: 'Kenya', code: '+254' },
  { iso: 'NZ', name: 'New Zealand', code: '+64' },
  { iso: 'JP', name: 'Japan', code: '+81' },
  { iso: 'KR', name: 'South Korea', code: '+82' },
  { iso: 'CN', name: 'China', code: '+86' },
  { iso: 'BR', name: 'Brazil', code: '+55' },
  { iso: 'MX', name: 'Mexico', code: '+52' },
];

const budgets = [
  'Under $1,000',
  '$2,000 – $3,000',
  '$3,000 – $4,000',
  '$5,000+',
];

function withCountryCode(iso: string, phone: string) {
  const next = COUNTRIES.find((item) => item.iso === iso) ?? COUNTRIES[0];
  const matched = COUNTRIES
    .filter((item) => phone.startsWith(item.code))
    .sort((a, b) => b.code.length - a.code.length)[0];
  const rest = (matched ? phone.slice(matched.code.length) : phone.replace(/^\+\d+\s*/, '')).trim();
  return rest ? `${next.code} ${rest}` : `${next.code} `;
}

const process = [
  { n: '01', title: 'Tell us what you need', text: 'A few details are enough to understand the project.' },
  { n: '02', title: 'We review your project', text: 'We look at the requirements and identify the best next step.' },
  { n: '03', title: 'We get back to you', text: 'A clear response with scope, direction, and next steps.' },
];

const STEPS = 5;

type Fields = {
  name: string;
  email: string;
  country: string;
  service: string;
  details: string;
  phone: string;
  company: string;
  budget: string;
};

const empty: Fields = {
  name: '',
  email: '',
  country: 'PK',
  service: '',
  details: '',
  phone: '+92 ',
  company: '',
  budget: '',
};

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [fields, setFields] = useState<Fields>(empty);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [dir, setDir] = useState<'next' | 'back'>('next');

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  const set = (key: keyof Fields, value: string) => {
    setFields((current) => ({ ...current, [key]: value }));
    setError('');
  };

  const validate = (current: number) => {
    if (current === 1) {
      if (!fields.name.trim()) return 'Please add your name.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) return 'Please add a valid email.';
      if (!fields.country) return 'Please choose your country.';
      if (fields.phone.replace(/\D/g, '').length < 8) return 'Please add a valid contact number.';
    }
    if (current === 2 && !fields.service) return 'Choose what you need.';
    if (current === 3 && fields.details.trim().length < 8) return 'A few lines about the project will help us reply.';
    if (current === 4 && !fields.budget) return 'Choose a budget range.';
    return '';
  };

  const goNext = () => {
    const message = validate(step);
    if (message) {
      setError(message);
      return;
    }
    setDir('next');
    setStep((n) => Math.min(STEPS, n + 1));
  };

  const goBack = () => {
    setError('');
    setDir('back');
    setStep((n) => Math.max(1, n - 1));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = validate(STEPS);
    if (message) {
      setError(message);
      return;
    }

    const countryName = COUNTRIES.find((item) => item.iso === fields.country)?.name ?? fields.country;
    setSending(true);
    setError('');

    try {
      await sendQuoteEmails({
        name: fields.name.trim(),
        email: fields.email.trim(),
        country: countryName,
        phone: fields.phone.trim(),
        service: fields.service,
        details: fields.details.trim(),
        budget: fields.budget,
        company: fields.company.trim(),
      });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'The quote could not be sent. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFields(empty);
    setStep(1);
    setError('');
  };

  return (
    <section className={`section contact-section quote-page${reduceMotion ? ' is-reduced' : ''}`} id="contact">
      <div className="quote-atmosphere" aria-hidden="true" />
      <svg className="quote-wires" viewBox="0 0 1440 900" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="quote-wire" x1="0" y1="80" x2="1440" y2="720" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c4b0f4" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="#9b7ae8" stopOpacity="0.32" />
            <stop offset="1" stopColor="#7a5cf0" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <path className="quote-wire quote-wire-pulse is-fast" d="M -40 180 C 180 120, 280 260, 520 220 C 740 184, 820 300, 1100 240 C 1280 200, 1380 280, 1500 220" />
        <path className="quote-wire" d="M -20 420 C 160 360, 340 480, 560 430 C 820 370, 900 520, 1180 460 C 1340 420, 1420 500, 1520 470" />
        <path className="quote-wire quote-wire-pulse" d="M 40 640 C 260 580, 380 720, 640 650 C 900 580, 980 740, 1280 680" />
        <path className="quote-wire" d="M 200 80 C 360 160, 420 40, 620 120 C 820 200, 940 60, 1200 140" />
        <path className="quote-wire quote-wire-pulse is-slow" d="M 80 300 C 300 340, 360 220, 620 280 C 900 350, 1020 240, 1400 310" />
        <path className="quote-wire quote-wire-pulse is-slower" d="M 100 760 C 380 700, 520 820, 820 740 C 1080 670, 1180 820, 1480 760" />
        <path className="quote-wire" d="M 480 500 C 640 440, 720 560, 920 500 C 1080 450, 1180 560, 1380 510" />
        {!reduceMotion && (
          <>
            <circle r="3" className="quote-spark">
              <animateMotion dur="16s" repeatCount="indefinite" path="M 80 300 C 300 340, 360 220, 620 280 C 900 350, 1020 240, 1400 310" />
            </circle>
            <circle r="3" className="quote-spark">
              <animateMotion dur="21s" repeatCount="indefinite" path="M 40 640 C 260 580, 380 720, 640 650 C 900 580, 980 740, 1280 680" />
            </circle>
            <circle r="2.5" className="quote-spark">
              <animateMotion dur="26s" repeatCount="indefinite" path="M -40 180 C 180 120, 280 260, 520 220 C 740 184, 820 300, 1100 240 C 1280 200, 1380 280, 1500 220" />
            </circle>
          </>
        )}
      </svg>

      <div className="container quote-grid">
        <div className="quote-copy">
          <p className="eyebrow"><span className="eyebrow-dot" />Let's talk</p>
          <h1>
            Let's build something<br />
            <span className="hero-story-accent">worth talking about.</span>
          </h1>
          <p>
            You do not need technical language. Tell us what you want to achieve — a website, a store, better follow-up, an app, or a custom tool — and we will suggest a clear next step.
          </p>

          <ol className="quote-process">
            {process.map((item) => (
              <li key={item.n}>
                <span>{item.n}</span>
                <div>
                  <b>{item.title}</b>
                  <small>{item.text}</small>
                </div>
              </li>
            ))}
          </ol>

          <div className="quote-details">
            <a href="mailto:info@digtimize.com"><Mail size={16} /> info@digtimize.com</a>
            <a href="tel:+923220739653"><Phone size={16} /> +92 322 0739653</a>
            <a href="tel:+923098180851"><Phone size={16} /> +92 309 8180851</a>
            <span><Globe2 size={16} /> Pakistan · Working worldwide</span>
          </div>
        </div>

        <form className="quote-form" onSubmit={onSubmit} noValidate>
          {submitted ? (
            <div className="quote-success">
              <span className="quote-success-mark"><Check size={26} /></span>
              <h2>You're on our radar.</h2>
              <p>Thanks for sharing your project. We have received your details and will get back to you with a clear next step.</p>
              <p className="quote-success-kicker">What happens next?</p>
              <ol>
                <li><b>01</b> We review what you shared</li>
                <li><b>02</b> We suggest the best starting point</li>
                <li><b>03</b> We contact you</li>
              </ol>
              <button type="button" className="quote-ghost" onClick={resetForm}>Send another message</button>
            </div>
          ) : (
            <>
              <div className="quote-progress" aria-hidden="true">
                {Array.from({ length: STEPS }, (_, i) => i + 1).map((n) => (
                  <span key={n} className={n <= step ? 'is-on' : undefined}>
                    0{n}
                    {n < STEPS ? <i /> : null}
                  </span>
                ))}
              </div>
              <p className="quote-step-label">Step {step} of {STEPS}</p>

              <div key={step} className={`quote-pane is-${dir}`}>
                {step === 1 && (
                  <>
                    <h2>Tell us about you</h2>
                    <label htmlFor="quote-name">
                      Name
                      <input
                        id="quote-name"
                        name="name"
                        autoComplete="name"
                        value={fields.name}
                        onChange={(e) => set('name', e.target.value)}
                        placeholder="Your name"
                      />
                    </label>
                    <label htmlFor="quote-email">
                      Email
                      <input
                        id="quote-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={fields.email}
                        onChange={(e) => set('email', e.target.value)}
                        placeholder="you@company.com"
                      />
                    </label>
                    <div className="quote-phone">
                      <label htmlFor="quote-country">
                        Country
                        <select
                          id="quote-country"
                          name="country"
                          autoComplete="country"
                          value={fields.country}
                          onChange={(e) => {
                            const iso = e.target.value;
                            setFields((current) => ({
                              ...current,
                              country: iso,
                              phone: withCountryCode(iso, current.phone),
                            }));
                            setError('');
                          }}
                        >
                          {COUNTRIES.map((item) => (
                            <option key={item.iso} value={item.iso}>
                              {item.name} ({item.code})
                            </option>
                          ))}
                        </select>
                      </label>
                      <label htmlFor="quote-phone">
                        Contact number
                        <input
                          id="quote-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={fields.phone}
                          onChange={(e) => {
                            const code = COUNTRIES.find((item) => item.iso === fields.country)?.code ?? '+92';
                            let value = e.target.value;
                            if (!value.startsWith(code)) {
                              const digits = value.replace(/\D/g, '');
                              const codeDigits = code.replace(/\D/g, '');
                              const local = digits.startsWith(codeDigits) ? digits.slice(codeDigits.length) : digits;
                              value = local ? `${code} ${local}` : `${code} `;
                            }
                            set('phone', value);
                          }}
                          placeholder={COUNTRIES.find((item) => item.iso === fields.country)?.code ?? '+92'}
                        />
                      </label>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h2>Tell us about the project</h2>
                    <fieldset className="quote-choices">
                      <legend>What do you need?</legend>
                      <div className="quote-options">
                        {services.map((item) => (
                          <button
                            key={item}
                            type="button"
                            className={fields.service === item ? 'is-active' : undefined}
                            onClick={() => set('service', item)}
                          >
                            {fields.service === item ? <Check size={14} /> : null}
                            {item}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                    <input type="hidden" name="service" value={fields.service} />
                  </>
                )}

                {step === 3 && (
                  <>
                    <h2>What are you looking to achieve?</h2>
                    <label htmlFor="quote-details">
                      Project details
                      <textarea
                        id="quote-details"
                        name="details"
                        rows={6}
                        value={fields.details}
                        onChange={(e) => set('details', e.target.value)}
                        placeholder="What are you trying to launch or fix? Timeline, tools you already use, and anything we should know."
                      />
                    </label>
                  </>
                )}

                {step === 4 && (
                  <>
                    <h2>What’s your budget?</h2>
                    <p className="quote-hint">Pick the range that feels closest. We can refine it after we review.</p>
                    <fieldset className="quote-choices">
                      <legend>Budget range</legend>
                      <div className="quote-pills">
                        {budgets.map((item) => (
                          <button
                            key={item}
                            type="button"
                            className={fields.budget === item ? 'is-active' : undefined}
                            onClick={() => set('budget', item)}
                          >
                            {fields.budget === item ? <Check size={14} /> : null}
                            {item}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                    <input type="hidden" name="budget" value={fields.budget} />
                  </>
                )}

                {step === 5 && (
                  <>
                    <h2>Anything else we should know?</h2>
                    <label htmlFor="quote-company">
                      Company <em>(optional)</em>
                      <input
                        id="quote-company"
                        name="company"
                        autoComplete="organization"
                        value={fields.company}
                        onChange={(e) => set('company', e.target.value)}
                        placeholder="Company name"
                      />
                    </label>
                  </>
                )}
              </div>

              {error ? <p className="quote-error" role="alert">{error}</p> : null}

              <div className="quote-actions">
                {step > 1 ? (
                  <button type="button" className="quote-back" onClick={goBack}>
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <span />
                )}
                {step < STEPS ? (
                  <button type="button" className="button button-primary" onClick={goNext} disabled={sending}>
                    Continue <ArrowRight size={16} />
                  </button>
                ) : (
                  <button type="submit" className="button button-primary" disabled={sending}>
                    {sending ? 'Sending…' : 'Send my project'} {!sending ? <ArrowRight size={16} /> : null}
                  </button>
                )}
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
