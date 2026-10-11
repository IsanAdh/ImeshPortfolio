import rss from '@astrojs/rss';
import site from '../data/site.json';
import { getPublishedPosts } from '../lib/content';

export async function GET(context) {
  const posts = await getPublishedPosts();
  return rss({
    title: `${site.name} | Knowledge Hub`,
    description: site.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      categories: [post.data.category, ...post.data.tags],
      link: `/blog/${post.id}/`,
    })),
  });
}
