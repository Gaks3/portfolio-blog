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
import { DATA } from './resume'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image: string
}

function getMDXFiles(
  dir: string,
  page: number = 1,
  search: string | undefined
) {
  let files = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === '.mdx')

  if (search) {
    files = files.filter((name) => name.includes(search))
  }

  files = files
    .map((file) => ({
      name: file,
      time: fs.statSync(`${dir}/${file}`).birthtime.getTime(),
    }))
    .sort((a, b) => b.time - a.time)
    .map((file) => file.name)

  const startIndex = (page - 1) * DATA.blogsPerPage
  const endIndex = startIndex + DATA.blogsPerPage

  return {
    files: files.slice(startIndex, endIndex),
    total: files.length,
  }
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

async function getAllPosts(
  dir: string,
  page: number = 1,
  search: string | undefined
) {
  let { files, total } = getMDXFiles(dir, page, search)
  return {
    files: await Promise.all(
      files.map(async (file) => {
        let slug = path.basename(file, path.extname(file))
        let { metadata, source } = await getPost(slug)
        return {
          metadata,
          slug,
          source,
        }
      })
    ),
    total,
  }
}

export async function getBlogPosts(
  page: number = 1,
  search: string | undefined = undefined
) {
  return getAllPosts(path.join(process.cwd(), 'content'), page, search)
}
