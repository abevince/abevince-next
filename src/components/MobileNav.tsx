import * as React from 'react'
import { Menu, Transition, Popover } from '@headlessui/react'
import Link from 'next/link'

const MyLink = (
  props: { href: string; children: React.ReactNode },
  ref: React.Ref<HTMLAnchorElement>,
) => {
  let { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a ref={ref} {...rest} className="block px-4 py-2 text-lg">
        {children}
      </a>
    </Link>
  )
}

const MenuLink = React.forwardRef(MyLink)

const MobileNav = () => (
  <Menu as="div" className="relative inline-block text-left md:hidden z-10">
    <div>
      <Menu.Button className="inline-flex justify-center items-center gap-1 min-w-min backdrop-blur-sm bg-zinc-600/30 px-4 py-2 rounded-full border-2 border-neutral-700">
        Menu
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Menu.Button>
    </div>

    <Transition
      as={React.Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        as="section"
        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-sm shadow-neutral-700 backdrop-blur-md bg-zinc-600/30 border-2 border-neutral-700 border-opacity-5 focus:outline-none"
      >
        <div className="py-1">
          <Menu.Item>
            <MenuLink href="/">Home</MenuLink>
          </Menu.Item>
          <Menu.Item>
            <MenuLink href="/about">About</MenuLink>
          </Menu.Item>
          <Menu.Item>
            <MenuLink href="/articles">Articles</MenuLink>
          </Menu.Item>
          <Menu.Item>
            <MenuLink href="/projects">Projects</MenuLink>
          </Menu.Item>
          <Menu.Item>
            <MenuLink href="/learnings">Learnings</MenuLink>
          </Menu.Item>
          <Menu.Item>
            <MenuLink href="/uses">Uses</MenuLink>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
)

export default MobileNav
