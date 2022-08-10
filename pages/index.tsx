import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="w-full lg:w-[1024px] px-4 mt-36 flex flex-col gap-8 mx-auto">
      <div className="rounded-full bg-slate-300 h-32 w-32 relative overflow-hidden">
        <Image src="/me-min.jpeg" layout="fill" objectFit="cover" alt="My image in the beach" />
      </div>
      <h1 className="text-5xl tracking-wide">
        Optimizing the web, <br className="hidden md:block" /> one component at a time.
      </h1>
      <p className="text-xl">
        Hi! I am Vince, a software engineer from the Philippines. <br className="hidden md:block" />{' '}
        I am passionate about anything related to web. I specialize in creating interactive{' '}
        <br className="hidden md:block" /> experiences and functional interfaces using{' '}
        <span className="font-bold">React</span> and different technologies applicable.
      </p>
      <section className="flex gap-8 py-6">
        <Link href="https://github.com/abevince" target="_blank passHref">
          <a target="_blank">
            <Image src="/icons/gh.svg" width={26} height={26} alt="Github logo" />
          </a>
        </Link>
        <Link href="https://twitter.com/abevince_dev" target="_blank passHref">
          <a target="_blank">
            <Image src="/icons/tw.svg" width={26} height={26} alt="Twitter logo" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/abevince" target="_blank passHref">
          <a target="_blank">
            <Image src="/icons/ig.svg" width={26} height={26} alt="Instagram logo" />
          </a>
        </Link>
        <Link href="https://www.facebook.com/wirednew3" target="_blank passHref">
          <a target="_blank">
            <Image src="/icons/fb.svg" width={26} height={26} alt="Facebook logo" />
          </a>
        </Link>
      </section>
    </div>
  )
}

export default Home
