/**
 * Site content — edit this file to update the homepage without touching markup.
 * Sections are added here as we build them.
 */

export interface Stat {
  /** The headline number, e.g. "12+". */
  value: string;
  /** Short label under the number, e.g. "Yrs engineering". */
  label: string;
}

/**
 * Hero stats row.
 * Every value here has to be checkable by a client — the Upwork profile backs
 * the last three. Do not add a number nobody can verify.
 */
export const stats: Stat[] = [
  { value: '12+', label: 'Yrs engineering' },
  { value: '100%', label: 'Job success' },
  { value: '$200K+', label: 'Delivered' },
  /* Split across value/label: the full badge name on one 44px serif line
     overflows the column. */
  { value: 'Top Rated', label: 'Plus badge, Upwork' },
];

export interface Service {
  /** Outcome bucket, e.g. "Get more customers". */
  name: string;
  /** The concrete systems that deliver it. */
  description: string;
  /** Where it links to. */
  href: string;
  /** CTA label. */
  linkLabel?: string;
}

/**
 * "How I help" — the three outcome buckets everything I build maps to.
 * Every row goes to the contact CTA; these are conversations, not products.
 */
export const services: Service[] = [
  {
    name: 'Get more customers',
    description:
      'Lead qualification, automated follow-up, intake that never drops a lead.',
    href: '#contact',
    linkLabel: 'Talk it through',
  },
  {
    name: 'Make customers worth more',
    description: 'Onboarding that runs itself, CRM automation, lifecycle triggers.',
    href: '#contact',
    linkLabel: 'Talk it through',
  },
  {
    name: 'Cut costs',
    description:
      'Internal knowledge assistants, automated reporting, ticket triage.',
    href: '#contact',
    linkLabel: 'Talk it through',
  },
];

export interface Post {
  /** Post title. */
  title: string;
  /** Link to the article. */
  href: string;
  /** Optional category, e.g. "Automation". */
  category?: string;
  /** Optional date label, e.g. "Jul 2026". */
  date?: string;
}

/**
 * Recent writing. Empty hides the whole section — better than fake posts.
 * Add entries once the real articles exist. Queued, all from shipped work:
 *   - Why I let the AI say "I don't know" (confidence gate + review queue)
 *   - Let the AI do language, not math (the Marketplace rule)
 *   - One doorway, many rooms: safe multi-client AI access
 */
export const posts: Post[] = [];

/**
 * Link to the full blog index (used by the "All writing" CTA).
 * Unreachable while `posts` is empty — set it to a real URL before adding posts,
 * or the section comes back with a dead link.
 */
export const writingIndexHref = '#';

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'What do you build?',
    answer:
      'AI systems that do one of three things: bring in more customers, increase what each one is worth, or cut the hours your team spends on manual work. In practice that’s lead qualification and follow-up, onboarding and CRM automation, internal knowledge assistants, automated reporting, and connecting AI safely to internal tools.',
  },
  {
    question: 'How do you work with clients?',
    answer:
      'It starts with an audit — I map how work actually moves through your business and rank what’s worth automating by hours saved and build cost. From there we scope one system with a measurable outcome, I build and deploy it, and you get the source code and documentation. Most clients then move to a monthly retainer so the system stays monitored, tuned and extended.',
  },
  {
    question: 'What does a project cost?',
    answer:
      'Audits run $180–600. Most builds land between $900 and $4,500 depending on how many sources and integrations are involved. Ongoing support and iteration runs $1,500–2,500 a month. You’ll get a fixed price before any work starts — no hourly surprises.',
  },
  {
    question: 'Which tools and platforms do you use?',
    answer:
      'TypeScript and Python for the systems themselves, Claude and OpenAI for the AI layer, Trigger.dev for durable workflows that survive failures and retries, Postgres with pgvector for grounded retrieval, and n8n or Make where a visual tool genuinely fits. I integrate with the tools you already pay for rather than replacing them.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Credentials stay server-side and never reach the model. Access is scoped so a system can only reach the data it’s meant to. Everything can run on your own infrastructure if you need it to, and every decision the system makes is logged and auditable.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Book a call and bring one workflow that’s eating your team’s time. In 30 minutes you’ll know whether it’s worth automating, what it would take, and roughly what it would cost. You’ll get a written summary afterward either way.',
  },
];

export interface Tech {
  /** Icon key in techIcons (src/data/techIcons.ts). Omit to render the label as text. */
  slug?: string;
  /** Accessible label / tooltip shown on hover. */
  label: string;
}

/**
 * Tech stack (order shown). Each slug maps to a brand icon in techIcons.ts.
 * To add a tech: fetch its Simple Icons SVG into techIcons.ts, then add an entry here.
 * Trigger.dev and pgvector have no Simple Icons mark, so they run as text tiles.
 */
export const tech: Tech[] = [
  { slug: 'openai', label: 'OpenAI' },
  { slug: 'anthropic', label: 'Claude' },
  { label: 'Trigger.dev' },
  { slug: 'postgresql', label: 'PostgreSQL' },
  { label: 'pgvector' },
  { slug: 'supabase', label: 'Supabase' },
  { slug: 'n8n', label: 'n8n' },
  { slug: 'make', label: 'Make' },
  { slug: 'stripe', label: 'Stripe' },
  { slug: 'vercel', label: 'Vercel' },
  { slug: 'linear', label: 'Linear' },
  { slug: 'slack', label: 'Slack' },
];
