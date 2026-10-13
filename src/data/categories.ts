// Knowledge Hub categories. Keep in sync with the `category` select options in public/admin/config.yml.
export const CATEGORIES = [
  'Income Tax',
  'VAT',
  'TDS',
  'Company Law',
  'Labour & Payroll',
  'Startups',
  'Budget Updates',
  'Deadlines',
] as const;

export type Category = (typeof CATEGORIES)[number];

export const categorySlug = (category: string) =>
  category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
