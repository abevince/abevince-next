import Head from 'next/head'
import Link from 'next/link'
import * as React from 'react'
import MobileNav from './MobileNav'

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <li>
    <Link href={href}>
      <a className="hover:underline underline-offset-4 decoration-2">{children}</a>
    </Link>
  </li>
)

const DesktopNav = () => (
  <nav className="hidden md:block min-w-min backdrop-blur-sm bg-zinc-300/70 dark:bg-zinc-600/30 px-6 py-2 rounded-full border-2 border-neutral-600">
    <ul className="flex flex-row gap-8 text-lg">
      <NavLink href="/about">About</NavLink>
      <NavLink href="/articles">Articles</NavLink>
      <NavLink href="/projects">Projects</NavLink>
      <NavLink href="/learnings">Learnings</NavLink>
      <NavLink href="/uses">Uses</NavLink>
    </ul>
  </nav>
)

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = React.useState<boolean>(true)
  return (
    <div className={`${darkMode ? 'dark' : ''} `}>
      <Head>
        <title>Home | Vincent Abesamis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hi! This is Vince and this is my personal site."></meta>
        <meta
          property="og:description"
          content="Hi! This is Vince and this is my personal site."
          key="ogdesc"
        />
        <meta property="og:image" content="/me-banner.png" key="ogimage" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="abevince.dev" />
        <meta name="twitter:creator" content="@abevince_dev" />
        <meta name="twitter:title" content="Home | Vincent Abesamis" />
        <meta
          name="twitter:description"
          content="Hi! This is Vince and this is my personal site."
        />
        <meta name="twitter:image" content="/me-banner.png" />
      </Head>
      <div className="transition-colors duration-200 w-full min-h-screen flex items-center bg-neutral-200 text-zinc-800  dark:text-neutral-200 dark:bg-neutral-900 bg-[url('/texture.png')] bg-repeat py-8 flex-col">
        <div className="flex flex-row w-full lg:w-[1024px] justify-between items-center px-4">
          <div className="font-mono text-xl tracking-wide font-medium">
            <Link href="/">
              <a>{`{abevince}`}</a>
            </Link>
          </div>
          <DesktopNav />
          <div className="flex flex-row justify-between items-center gap-2">
            <MobileNav />
            <button
              className="min-w-min backdrop-blur-sm bg-zinc-300/70  dark:bg-zinc-600/30 px-4 py-2 rounded-full border-2 border-neutral-700"
              onClick={() => {
                console.log(darkMode)
                setDarkMode(!darkMode)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout
