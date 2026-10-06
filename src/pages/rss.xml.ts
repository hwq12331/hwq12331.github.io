import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { route } from '../data/profile';

export async function GET(context: APIContext) {
  const posts = await getCollection('journal', ({ data }) => !data.draft);
  return rss({
    title: 'Hussain Alqassab — Field Notes',
    description: 'Notes on business workflows, financial-data research and bilingual interfaces.',
    site: context.site!,
    items: posts.sort((a, b) => a.data.order - b.data.order).map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: route(`journal/${post.id}/`),
    })),
    customData: '<language>en-us</language>',
  });
}
