/**
 * Site content — edit this file to update the homepage without touching markup.
 * Sections are added here as we build them.
 */

/**
 * Where every "Book a call" on the site points. Set this to the real booking
 * page (Cal.com / Calendly) and the nav, hero, service rows and footer all
 * follow. Until then it jumps to the footer CTA, which books nothing.
 * TODO: replace with the booking URL.
 */
export const bookingHref = '#contact';

export interface SocialLink {
  label: string;
  href: string;
}

/**
 * Footer "Elsewhere" column. Upwork leads: the stats row cites Top Rated Plus
 * and 100% job success, and this is the profile that proves both.
 */
export const socials: SocialLink[] = [
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/zakadev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zakasalaheddine' },
  { label: 'GitHub', href: 'https://github.com/zakasalaheddine' },
  { label: 'Email', href: 'mailto:zakasalaheddine@gmail.com' },
];

export interface Stat {
  /** The headline number, e.g. "12+". */
  value: string;
  /** Short label under the number, e.g. "Years engineering". */
  label: string;
  /** Set for word values: they need a smaller size to hold one line. */
  words?: boolean;
}

/**
 * Hero stats row.
 * Every value here has to be checkable by a client. The Upwork profile backs
 * the last three. Do not add a number nobody can verify.
 */
export const stats: Stat[] = [
  { value: '12+', label: 'Years engineering' },
  { value: '100%', label: 'Job success' },
  { value: '$200K+', label: 'Client billings' },
  { value: 'Top Rated Plus', label: 'Upwork status', words: true },
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
    description: 'Lead qualification, follow-up that never forgets, intake that drops nothing.',
    href: bookingHref,
    linkLabel: 'Book a call',
  },
  {
    name: 'Make customers worth more',
    description: 'Onboarding that runs itself, CRM automation, lifecycle triggers.',
    href: bookingHref,
    linkLabel: 'Book a call',
  },
  {
    name: 'Cut costs',
    description: 'Internal knowledge assistants, automated reporting, ticket triage.',
    href: bookingHref,
    linkLabel: 'Book a call',
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
      'AI systems that do one of three things: bring in more customers, raise what each one is worth, or cut the hours your team spends on manual work. In practice that means lead qualification and follow-up, onboarding and CRM automation, internal knowledge assistants, automated reporting, and safe connections between AI and the tools you already run.',
  },
  {
    question: 'How do you work with clients?',
    answer:
      'It starts with an audit. I map how work actually moves through your business, then rank what is worth automating by hours saved against build cost. We scope one system with a measurable outcome, I build and deploy it, and you get the source code and the documentation. Most clients move to a monthly retainer after that, so the system stays monitored, tuned and extended.',
  },
  {
    question: 'What does a project cost?',
    answer:
      'Audits run $180 to $600. Most builds land between $900 and $4,500, depending on how many sources and integrations are involved. Ongoing support and iteration runs $1,500 to $2,500 a month. You get a fixed price before any work starts, so there are no hourly surprises.',
  },
  {
    question: 'Which tools and platforms do you use?',
    answer:
      'TypeScript and Python for the systems themselves. Claude and OpenAI for the AI layer. Trigger.dev for durable workflows that survive failures and retries. Postgres with pgvector for grounded retrieval. n8n or Make where a visual tool genuinely fits. I integrate with the tools you already pay for rather than replacing them.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Credentials stay server-side and never reach the model. Access is scoped, so a system can only read the data it is meant to. Everything can run on your own infrastructure, and every decision the system makes is logged and auditable.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Book a call and bring one workflow that is eating your team’s time. In 30 minutes you will know whether it is worth automating, what it would take, and roughly what it would cost. You get a written summary either way.',
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
 * pgvector is a Postgres extension with no mark of its own, so it rides on the
 * Postgres tile rather than sitting there as a text tile.
 */
export const tech: Tech[] = [
  { slug: 'openai', label: 'OpenAI' },
  { slug: 'anthropic', label: 'Claude' },
  { slug: 'triggerdotdev', label: 'Trigger.dev' },
  { slug: 'postgresql', label: 'Postgres + pgvector' },
  { slug: 'supabase', label: 'Supabase' },
  { slug: 'n8n', label: 'n8n' },
  { slug: 'make', label: 'Make' },
  { slug: 'stripe', label: 'Stripe' },
  { slug: 'vercel', label: 'Vercel' },
  { slug: 'linear', label: 'Linear' },
  { slug: 'slack', label: 'Slack' },
];
