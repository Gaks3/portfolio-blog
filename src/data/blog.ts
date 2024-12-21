import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import withSlugs from 'rehype-slug'
import withToc from '@stefanprobst/rehype-extract-toc'
import { notFound } from 'next/navigation'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image: string
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: 'min-light',
        dark: 'min-dark',
      },
      keepBackground: false,
      transformers: [transformerCopyButton()],
    })
    .use(withSlugs)
    .use(withToc)
    .use(rehypeStringify)
    .process(markdown)

  return p.toString()
}

export async function getPost(slug: string) {
  const filePath = path.join('content', `${slug}.mdx`)
  let source = null

  try {
    source = fs.readFileSync(filePath, 'utf-8')
  } catch (error) {
    console.error(error)
    return notFound()
  }

  const { content: rawContent, data: metadata } = matter(source)
  const content = await markdownToHTML(rawContent)
  return {
    source: content,
    metadata,
    slug,
  } as {
    source: string
    metadata: Metadata
    slug: string
  }
}

async function getAllPosts(dir: string) {
  let mdxFiles = getMDXFiles(dir)
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file))
      let { metadata, source } = await getPost(slug)
      return {
        metadata,
        slug,
        source,
      }
    })
  )
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), 'content'))
}
