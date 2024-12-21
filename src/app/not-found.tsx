import { CodeIcon } from '@radix-ui/react-icons'

export default function NotFound() {
  return (
    <div className='h-[calc(100vh_-_6rem)] sm:h-[calc(100vh_-_12rem)] flex items-center justify-center flex-col'>
      <CodeIcon className='size-12' />
      <h1 className='font-bold text-3xl'>404</h1>
      <h2>Page Not Found</h2>
    </div>
  )
}
