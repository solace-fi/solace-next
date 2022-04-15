import SolaceGradientBackground from '@/components/atoms/SolaceGradientBackground'
import SolaceLogoSmall from '@/resources/svg/solace-logo-white-small.svg'
import Burger from '@/resources/svgx/Burger'
import Link from 'next/link'
import { useState } from 'react'
import AccordionContainer from './AccordionContainer'
import classNames from 'classnames'
import OwnImage from '@/components/atoms/OwnImage'

const sidebarContent = [
  {
    // products -> coverage, bonding, staking
    title: 'Products',
    children: [
      {
        title: 'Coverage',
        link: 'cover',
        type: 'hash',
      },
      {
        title: 'Bonding',
        link: 'bond',
        type: 'hash',
      },
      {
        title: 'Staking',
        link: 'staking',
        type: 'hash',
      },
    ],
  },
  {
    // products -> coverage, bonding, staking
    title: 'Governance',
    children: [
      {
        title: 'Token',
        link: 'token',
        type: 'internal',
      },
      {
        title: 'DAO',
        link: 'dao',
        type: 'internal',
      },
    ],
  },
  {
    // developers: docs, sdk
    title: 'Developers',
    children: [
      {
        title: 'Docs',
        link: 'https://docs.solace.fi/',
        type: 'external',
      },
      {
        title: 'SDK',
        link: 'https://docs.solace.fi/developer/sdk/',
        type: 'external',
      },
    ],
  },
  {
    // about: roadmap, investors, advisors, contributors
    title: 'About',
    children: [
      {
        title: 'Roadmap',
        link: 'roadmap',
        type: 'hash',
      },
      {
        title: 'Investors',
        link: 'investors',
        type: 'hash',
      },
      {
        title: 'Advisors',
        link: 'advisors',
        type: 'hash',
      },
      {
        title: 'Contributors',
        link: 'contributors',
        type: 'hash',
      },
    ],
  },
]

function Bar({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={
        (!isOpen
          ? 'hidden md:block opacity-0 md:opacity-100'
          : 'opacity-100 flex items-center justify-center w-full h-full') +
        ' duration-300  transition md:mr-0 md:ml-7.5 my-7.5 md:inline-block fixed min-h-[calc(100vh_-_60px)]'
      }
    >
      <div className="flex flex-col w-[200px] items-center justify-between h-[calc(100%_-_120px)] md:h-[calc(100vh-120px)] md:items-start select-none">
        {/* mobile */}
        <Link href="/" passHref={undefined}>
          <OwnImage
            className="block md:hidden ml-5 md:ml-7.5 select-none cursor-pointer"
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={SolaceLogoSmall}
            alt="Small Solace Logo."
            width="132.57px"
            height="0"
          />
        </Link>
        {/* desktop */}
        <Link href="/" passHref={undefined}>
          <OwnImage
            className="hidden md:block select-none cursor-pointer"
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={SolaceLogoSmall}
            alt="Small Solace Logo."
            width="132.57px"
            height="0"
          />
        </Link>
        <AccordionContainer
          accordees={sidebarContent.map(({ title, children }) => ({
            title,
            // eslint-disable-next-line @typescript-eslint/no-shadow
            children: children.map(({ title, link, type }) => {
              switch (type) {
                case 'hash':
                  return (
                    <a
                      href={`#${link}`}
                      className="block font-normal hover:underline underline-offset-2"
                      key={title}
                    >
                      {title}
                    </a>
                  )
                case 'internal':
                  return (
                    <Link href={`/${link}`} key={title}>
                      <a className="block font-normal hover:underline underline-offset-2">
                        {title}
                      </a>
                    </Link>
                  )
                case 'external':
                  return (
                    <a
                      href={link}
                      className="block font-normal hover:underline underline-offset-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      key={title}
                    >
                      {title}
                    </a>
                  )
                default:
                  return null
              }
            }),
          }))}
        />
        {/* items: We're Hiring!, Help & Support, Terms & Conditions, 5 svg icons: discord, twitter, github, medium and defipulse */}
        <div className="flex flex-col items-center md:items-start justify-center gap-2.5">
          <a
            href="https://docs.solace.fi/hiring/"
            className="block font-semibold hover:underline underline-offset-2"
          >
            We&apos;re Hiring!
          </a>
          <a
            href="https://docs.solace.fi/help/"
            className="block font-normal hover:underline underline-offset-2"
          >
            Help & Support
          </a>
          <a
            href="https://docs.solace.fi/terms/"
            className="block font-normal hover:underline underline-offset-2"
          >
            Terms & Conditions
          </a>
          <div className="flex justify-between w-full mt-2.5">
            <a
              href="https://discord.gg/QWZQWZQ"
              className="block font-normal hover:underline underline-offset-2"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 12.22c0 .04-.01.07-.01.11 0 3.77-3.02 7.25-7.26 7.25a7.25 7.25 0 01-7.25-7.25c0-3.77 3.02-7.25 7.25-7.25.04 0 .07.01.11.01a7.25 7.25 0 017.25 7.25zm-1.88 0c0-2.52-2.04-4.56-4.58-4.56a4.57 4.57 0 00-4.56 4.56c0 2.52 2.04 4.56 4.56 4.56 2.53 0 4.57-2.04 4.57-4.56zM12 7.77a2.78 2.78 0 012.78 2.78 2.78 2.78 0 01-2.78 2.78 2.78 2.78 0 01-2.78-2.78 2.78 2.78 0 012.78-2.78zm0 5.66a1.78 1.78 0 100-3.56 1.78 1.78 0 000 3.56z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/solacefi"
              className="block font-normal hover:underline underline-offset-2"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="https://github.com/solace-fi"
              className="block font-normal hover:underline underline-offset-2"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
              </svg>
            </a>
            <a
              href="https://medium.com/solace-fi"
              className="block font-normal hover:underline underline-offset-2"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 00-7.75 0" />
              </svg>
            </a>
            <a
              href="https://defipulse.com"
              className="block font-normal hover:underline underline-offset-2"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function CloseButton({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) {
  return (
    <button
      className={classNames(
        { 'fixed left-5 top-5 h-12 w-12 z-20 md:hidden': true },
        { hidden: !isOpen }
      )}
      onClick={toggle}
      type="button"
      aria-label="Close"
    >
      <svg className="h-12 w-12" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      </svg>
    </button>
  )
}

export default function SidebarLeft() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <nav className="hidden md:inline-block absolute">
        <Bar isOpen={isOpen} />
      </nav>
      <Burger className="fixed md:hidden top-4 left-4 h-12 w-12" onClick={toggle} />
      <CloseButton toggle={toggle} isOpen={isOpen} />
      <nav className={!isOpen ? 'hidden' : 'md:hidden fixed h-screen w-screen z-10 bg-white'}>
        <SolaceGradientBackground className="z-20 h-screen w-screen">
          <Bar isOpen={isOpen} />
        </SolaceGradientBackground>
      </nav>
    </>
  )
}
