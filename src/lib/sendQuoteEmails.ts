export type QuotePayload = {
  name: string;
  email: string;
  country: string;
  phone: string;
  service: string;
  details: string;
  budget: string;
  company: string;
};

const INBOX = import.meta.env.VITE_QUOTE_INBOX || 'info@digtimize.com';

export async function sendQuoteEmails(data: QuotePayload) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(INBOX)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      _subject: `New project quote — ${data.name} (${data.service})`,
      _template: 'box',
      _replyto: data.email,
      name: data.name,
      email: data.email,
      phone: data.phone,
      country: data.country,
      company: data.company || '—',
      service: data.service,
      budget: data.budget,
      details: data.details,
    }),
  });

  const result = (await response.json().catch(() => null)) as { success?: string | boolean; message?: string } | null;

  if (!response.ok || result?.success === false || result?.success === 'false') {
    throw new Error(result?.message || 'The quote could not be sent. Please email info@digtimize.com.');
  }
}
