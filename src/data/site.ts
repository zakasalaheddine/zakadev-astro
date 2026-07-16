/**
 * Site content — edit this file to update the homepage without touching markup.
 * Sections are added here as we build them.
 */

export interface Stat {
  /** The headline number, e.g. "20+". */
  value: string;
  /** Short label under the number, e.g. "Systems deployed". */
  label: string;
}

/**
 * Hero stats row.
 * TODO: These are PLACEHOLDERS — replace the values/labels with real numbers.
 */
export const stats: Stat[] = [
  { value: '20+', label: 'Systems deployed' },
  { value: '30+', label: 'Automations live' },
  { value: '5+', label: 'Years building' },
  { value: '10k+', label: 'Hours saved / year' },
];

export interface Project {
  /** Project name / title. */
  name: string;
  /** One-line description of what it is and the outcome. */
  description: string;
  /** Where the card links to. */
  href: string;
  /** Optional small tag shown at the top, e.g. "Live", "Client system", "MIT". */
  meta?: string;
  /** Link label at the bottom of the card. */
  linkLabel?: string;
}

/**
 * Featured projects grid.
 * TODO: These are PLACEHOLDERS — swap in your real projects (name, description,
 * href, optional meta tag).
 */
export const projects: Project[] = [
  {
    name: 'Project One',
    description: 'One-line description of a system you built and the outcome it drives.',
    href: '#',
    meta: 'Client system',
    linkLabel: 'View project',
  },
  {
    name: 'Project Two',
    description: 'One-line description of a system you built and the outcome it drives.',
    href: '#',
    meta: 'Automation',
    linkLabel: 'View project',
  },
  {
    name: 'Project Three',
    description: 'One-line description of a system you built and the outcome it drives.',
    href: '#',
    meta: 'Internal tool',
    linkLabel: 'View project',
  },
];

export interface Offering {
  /** Product / community name. */
  name: string;
  /** One-line description. */
  description: string;
  /** Where it links to. */
  href: string;
  /** Badge shown next to the name, e.g. "$XX" (price) or "Free". */
  badge?: string;
  /** CTA label, e.g. "Get it", "Join free". */
  linkLabel?: string;
}

/**
 * Products & communities list.
 * TODO: PLACEHOLDERS — two paid digital products + one free community.
 * Set real names, descriptions, prices/badges, and hrefs.
 */
export const offerings: Offering[] = [
  {
    name: 'Digital Product One',
    description: 'A short line about the digital product and what the buyer gets.',
    href: '#',
    badge: '$XX',
    linkLabel: 'Get it',
  },
  {
    name: 'Digital Product Two',
    description: 'A short line about the digital product and what the buyer gets.',
    href: '#',
    badge: '$XX',
    linkLabel: 'Get it',
  },
  {
    name: 'Free Community',
    description: 'Where you gather your audience and share what you build.',
    href: '#',
    badge: 'Free',
    linkLabel: 'Join free',
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
 * Recent writing.
 * TODO: PLACEHOLDERS — replace with your real posts (title, href, optional
 * category/date). Empty the array to hide the section.
 */
export const posts: Post[] = [
  {
    title: 'How I automated an entire marketing workflow with AI',
    href: '#',
    category: 'Automation',
    date: 'Jul 2026',
  },
  {
    title: 'The system I use to ship content on autopilot',
    href: '#',
    category: 'Systems',
    date: 'Jun 2026',
  },
  {
    title: 'Turning a manual process into a self-running engine',
    href: '#',
    category: 'Workflow',
    date: 'May 2026',
  },
];

/** Link to the full blog index (used by the "All writing" CTA). */
export const writingIndexHref = '#';

export interface Faq {
  question: string;
  answer: string;
}

/**
 * Frequently asked questions.
 * TODO: PLACEHOLDERS — replace with your real questions and answers.
 */
export const faqs: Faq[] = [
  {
    question: 'What do you build?',
    answer:
      'Placeholder answer — describe the kinds of systems you build and the outcomes they drive for clients.',
  },
  {
    question: 'How do you work with clients?',
    answer:
      'Placeholder answer — outline your engagement process, from first call to delivery and handover.',
  },
  {
    question: 'What does a project cost?',
    answer:
      'Placeholder answer — explain your pricing model (fixed scope, retainer, etc.) and typical ranges.',
  },
  {
    question: 'Which tools and platforms do you use?',
    answer:
      'Placeholder answer — mention the core stack you build on and how you integrate with existing tools.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Placeholder answer — tell people the exact next step, e.g. book a call or send a message.',
  },
];

export interface Tech {
  /** Icon key — must exist in techIcons (src/data/techIcons.ts). */
  slug: string;
  /** Accessible label / tooltip shown on hover. */
  label: string;
}

/**
 * Tech stack (order shown). Each slug maps to a brand icon in techIcons.ts.
 * To add a tech: fetch its Simple Icons SVG into techIcons.ts, then add an entry here.
 */
export const tech: Tech[] = [
  { slug: 'openai', label: 'OpenAI' },
  { slug: 'anthropic', label: 'Claude' },
  { slug: 'n8n', label: 'n8n' },
  { slug: 'make', label: 'Make' },
  { slug: 'notion', label: 'Notion' },
  { slug: 'postgresql', label: 'PostgreSQL' },
  { slug: 'supabase', label: 'Supabase' },
  { slug: 'stripe', label: 'Stripe' },
  { slug: 'vercel', label: 'Vercel' },
  { slug: 'linear', label: 'Linear' },
  { slug: 'google', label: 'Google' },
  { slug: 'slack', label: 'Slack' },
];
