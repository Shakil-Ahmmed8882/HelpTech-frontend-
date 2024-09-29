

import { Button } from '@nextui-org/button'
import { Input } from '@nextui-org/input'
import Link from 'next/link'
import { SearchIcon } from '../components/icons'


export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full p-6">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-default-500 animate-pulse">404</h1>
          <h2 className="mt-4 text-3xl font-semibold text-gray-700 dark:text-gray-300">Page Not Found</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Sorry, we couldn't find the page you're looking for.</p>
        </div>

        <div className="mt-8">
          <form className="flex items-center space-x-2 max-w-[500px] mx-auto">
            <Input 
              type="search" 
              placeholder="Search for pages..." 
              className="flex-grow"
              aria-label="Search for pages"
            />
            <Button>
              <SearchIcon className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/">
            <Button className="flex items-center space-x-2">
              <span>Go Home</span>
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button className="flex items-center space-x-2">
              <span>Contact Support</span>
            </Button>
          </Link>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          If you believe this is a mistake, please contact our support team.
        </p>
      </div>
    </div>
  )
}