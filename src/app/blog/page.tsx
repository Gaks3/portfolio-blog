import BlurFade from '@/components/magicui/blur-fade'
import SearchBlogs from '@/components/search-blogs'
import { PaginationWithLinks } from '@/components/ui/pagination-with-link'
import { getBlogPosts } from '@/data/blog'
import { DATA } from '@/data/resume'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'My thoughts on software development, life, and more.',
}

const BLUR_FADE_DELAY = 0.04

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1
  const search = searchParams.search ?? undefined

  const { files, total } = await getBlogPosts(currentPage, search)

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className='font-bold text-4xl mb-8 tracking-tighter'>Blog</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <SearchBlogs search={search} />
      </BlurFade>
      <div className='divide-y divide-secondary'>
        {files.map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link className='flex flex-col py-10' href={`/blog/${post.slug}`}>
              <div className='flex w-full gap-5'>
                <div className='flex-1 flex justify-between flex-col'>
                  <div>
                    <h2 className='tracking-tight font-bold text-xl sm:text-2xl line-clamp-2'>
                      {post.metadata.title}
                    </h2>
                    <p className='line-clamp-2 text-muted-foreground'>
                      {post.metadata.summary}
                    </p>
                  </div>
                  <p className='h-6 text-xs text-muted-foreground mt-4'>
                    {post.metadata.publishedAt}
                  </p>
                </div>
                <div className='flex sm:items-center justify-center'>
                  <div className='bg-black w-[80px] h-[53px] aspect-[auto_80/53] sm:w-[160px] sm:h-[107px] sm:aspect-[auto_160/107] relative rounded'>
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      fill
                      sizes='(max-width: 639px) 100vw, (min-width: 640px) 160px 107px'
                      className='object-cover object-center'
                    />
                  </div>
                </div>
              </div>
            </Link>
          </BlurFade>
        ))}
      </div>
      <div className='mt-3 mb-16 md:mb-8 lg:mb-6'>
        <PaginationWithLinks
          page={currentPage}
          pageSize={DATA.blogsPerPage}
          totalCount={total}
        />
      </div>
    </section>
  )
}
