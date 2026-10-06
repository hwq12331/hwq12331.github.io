import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const journal = defineCollection({
  loader: glob({ base: './src/content/journal', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Digital transformation', 'Data & ML', 'Interfaces & UX']),
    published: z.coerce.date(),
    order: z.number(),
    cover: z.enum(['workflow', 'analytics', 'interface']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
