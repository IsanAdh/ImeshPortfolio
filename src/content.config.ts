import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES } from './data/categories';

// The CMS saves a cleared optional date as "" — treat that as "not set".
const optionalDate = z.preprocess((v) => (v === '' || v === null ? undefined : v), z.coerce.date().optional());

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: optionalDate,
    category: z.enum(CATEGORIES),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    author: z.string().default('CA Imesh Adhikari'),
    draft: z.boolean().default(false),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['Checklist', 'Template', 'Guide', 'Calendar', 'Presentation', 'Other']),
    category: z.enum(CATEGORIES),
    // "download": file is downloadable directly. "whatsapp": visitor requests it on WhatsApp (lead capture).
    access: z.enum(['download', 'whatsapp']).default('download'),
    file: z.string().optional(),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number().default(99),
    highlights: z.array(z.string()).default([]),
  }),
});

// Free-form pages edited in the CMS: About and the legal pages.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, resources, services, pages };
