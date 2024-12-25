import type { MetadataRoute } from 'next'
import { DATA } from '@/data/resume'
import { getBlogPosts } from '@/data/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = DATA.url

  const blogs = await getBlogPosts()

  return [
    {
      url: baseUrl,
    },
    ...blogs.files.map((blog) => ({ url: `${baseUrl}${blog.slug}` })),
  ]
}
