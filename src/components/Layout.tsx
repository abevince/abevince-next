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

const DarkModeToggle = () => {
  const [isDark, setIsDark] = React.useState<boolean>(false)

  React.useEffect(() => {
    try {
      setIsDark(
        localStorage.theme === 'dark' ||
          (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
      )
    } catch (_) {}
  }, [])

  const toggleDarkMode = () => {
    if (!isDark) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('theme', 'dark')
    }
  }

  const toggleLightMode = () => {
    if (isDark) {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('theme', 'light')
    }
  }
  return (
    <button
      aria-label="Dark and light mode toggle"
      aria-labelledby="theme-mode-toggle"
      className="min-w-min backdrop-blur-sm bg-zinc-300/70  dark:bg-zinc-600/30 px-4 py-2 rounded-full border-2 border-neutral-700"
      onClick={isDark ? toggleLightMode : toggleDarkMode}
    >
      {isDark ? (
        <svg width="24" height="24" fill="none" aria-hidden="true" className="h-6 w-6">
          <path
            d="M18 15.63c-.977.52-1.945.481-3.13.481A6.981 6.981 0 0 1 7.89 9.13c0-1.185-.04-2.153.481-3.13C6.166 7.174 5 9.347 5 12.018A6.981 6.981 0 0 0 11.982 19c2.67 0 4.844-1.166 6.018-3.37ZM16 5c0 2.08-.96 4-3 4 2.04 0 3 .92 3 3 0-2.08.96-3 3-3-2.04 0-3-1.92-3-4Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
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
      )}
    </button>
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
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
            <DarkModeToggle />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout
