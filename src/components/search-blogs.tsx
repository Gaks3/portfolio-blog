'use client'

import { SearchIcon } from 'lucide-react'
import { Input } from './ui/input'
import { useCallback, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Button } from './ui/button'

type Props = {
  search?: string
}

export default function SearchBlogsForm({ search }: Props) {
  const [value, setValue] = useState(search ?? '')

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const buildLink = useCallback(
    (search?: string) => {
      console.log(search)

      const key = 'search'
      if (!searchParams) return `${pathname}?${key}=${search}`

      const newSearchParams = new URLSearchParams(searchParams)
      newSearchParams.delete('page')

      if (!search) {
        newSearchParams.delete('search')
      }

      newSearchParams.set(key, String(search))
      return `${pathname}?${newSearchParams.toString()}`
    },
    [searchParams, pathname]
  )

  const onSearch = () => {
    if (!value || value?.trim() == '') return

    const link = buildLink(value)

    return router.push(link)
  }

  return (
    <div className='flex gap-3'>
      <div className='w-full relative'>
        <SearchIcon className='w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400' />
        <Input
          type='search'
          placeholder='Search'
          className='p-5 pl-8'
          value={value}
          onChange={(value) => setValue(value.target.value)}
          onKeyUp={(event) => {
            if (event.code === 'Enter') {
              onSearch()
            }
          }}
        />
      </div>
      <Button onClick={onSearch} className='h-auto'>
        Search
      </Button>
    </div>
  )
}
