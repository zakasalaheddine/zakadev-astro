import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Long-form case studies rendered at /projects/<slug>. */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    role: z.string(),
    stack: z.string(),
    year: z.number(),
    /** Small tag on the homepage card, e.g. "Client system". */
    meta: z.string().optional(),
  }),
});

export const collections = { projects };
