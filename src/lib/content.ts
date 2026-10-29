import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getServices() {
  const services = await getCollection('services');
  return services.sort((a, b) => a.data.order - b.data.order);
}

export async function getResources() {
  const resources = await getCollection('resources');
  return resources.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Published notices, newest first. */
export async function getNotices() {
  const notices = await getCollection('notices', ({ data }) => !data.draft);
  return notices.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function readingTime(post: CollectionEntry<'blog'>) {
  const words = (post.body ?? '').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
