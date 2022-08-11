import FacebookIcon from '@components/svg/facebook-svg'
import GithubIcon from '@components/svg/github-svg'
import InstagramIcon from '@components/svg/instagram-svg'
import TwitterIcon from '@components/svg/twitter-svg'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import myImage from '../public/me-min.jpeg'

const Home: NextPage = () => {
  return (
    <div className="w-full lg:w-[1024px] px-4 mt-32 md:mt-36 flex flex-col gap-8 mx-auto">
      <div className="rounded-full bg-slate-300 h-32 w-32 relative overflow-hidden">
        <Image src={myImage} layout="fill" objectFit="cover" alt="My image in the beach" />
      </div>
      <h1 className="text-5xl tracking-wide leading-tight">
        Optimizing the web, <br className="hidden md:block" /> one component at a time.
      </h1>
      <p className="text-xl">
        Hi! I am Vince, a software engineer from the Philippines. <br className="hidden md:block" />
        I am passionate about anything related to web. I specialize in creating interactive{''}
        <br className="hidden md:block" /> experiences and functional interfaces using{' '}
        <span className="font-medium">
          React, TypeScript, Next.js,
          <br className="hidden md:block" /> TailwindCSS <span className="font-normal">and</span>{' '}
          GraphQL.
        </span>
      </p>
      <section className="flex gap-8 py-6">
        <Link href="https://github.com/abevince" target="_blank passHref" title="Github">
          <a target="_blank" title="Github">
            <GithubIcon />
          </a>
        </Link>
        <Link href="https://twitter.com/abevince_dev" target="_blank passHref" title="Twitter">
          <a target="_blank" title="Twitter">
            <TwitterIcon />
          </a>
        </Link>
        <Link href="https://www.instagram.com/abevince" target="_blank passHref" title="Instagram">
          <a target="_blank" title="Instagram">
            <InstagramIcon />
          </a>
        </Link>
        <Link href="https://www.facebook.com/wirednew3" target="_blank passHref" title="Facebook">
          <a target="_blank" title="Facebook">
            <FacebookIcon />
          </a>
        </Link>
      </section>
    </div>
  )
}

export default Home
