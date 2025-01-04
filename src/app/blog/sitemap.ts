import type { MetadataRoute } from 'next'
import { DATA } from '@/data/resume'
import { getBlogPosts } from '@/data/blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = DATA.url

  const blogs = await getBlogPosts()

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...blogs.files.map((blog) => ({
      url: `${baseUrl}${blog.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
  ]
}
