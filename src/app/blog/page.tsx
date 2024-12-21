import BlurFade from '@/components/magicui/blur-fade'
import { getBlogPosts } from '@/data/blog'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Blog',
  description: 'My thoughts on software development, life, and more.',
}

const BLUR_FADE_DELAY = 0.04

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className='font-bold text-4xl mb-8 tracking-tighter'>Blog</h1>
      </BlurFade>
      <div className='divide-y divide-secondary'>
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1
            }
            return 1
          })
          .map((post, id) => (
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
    </section>
  )
}
