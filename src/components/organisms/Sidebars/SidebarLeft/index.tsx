import SolaceGradientBackground from '@/components/atoms/SolaceGradientBackground'
import SolaceLogoSmall from '@/resources/svg/solace-logo-white-small.svg'
import Burger from '@/resources/svgx/Burger'
import Link from 'next/link'
import { useState } from 'react'
import AccordionContainer from './AccordionContainer'
import classNames from 'classnames'
import OwnImage from '@/components/atoms/OwnImage'
import DiscordIcon from '@/resources/svgx/sidebarIcons/sidebar-icons/Discord'
import TwitterIcon from '@/resources/svgx/sidebarIcons/sidebar-icons/Twitter'
import GithubIcon from '@/resources/svgx/sidebarIcons/sidebar-icons/Github'
import MediumIcon from '@/resources/svgx/sidebarIcons/sidebar-icons/Medium'
import DefiPulseIcon from '@/resources/svgx/sidebarIcons/sidebar-icons/DefiPulse'

const sidebarContent = [
  {
    // products -> coverage, bonding, staking
    title: 'Products',
    children: [
      {
        title: 'Coverage',
        link: 'about/cover',
        type: 'internal',
      },
      {
        title: 'Bonding',
        link: 'about/tokenomics',
        type: 'internal',
      },
      {
        title: 'Staking',
        link: 'about/staking',
        type: 'internal',
      },
    ],
  },
  {
    // products -> coverage, bonding, staking
    title: 'Governance',
    children: [
      {
        title: 'Token',
        link: 'https://etherscan.io/token/0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40',
        type: 'external',
      },
      {
        title: 'DAO',
        link: 'https://forum.solace.fi/',
        type: 'external',
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
        link: 'https://docs.solace.fi/docs/dev-docs/sdk/getting-started',
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
        link: 'coreContributors',
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
      <div className="flex flex-col w-[200px] items-center justify-between h-[calc(100%_-_120px)] md:h-[calc(100vh-60px)] md:items-start select-none">
        {/* mobile */}
        <div className="">
          <Link href="/" passHref={undefined}>
            <OwnImage
              className="block md:hidden ml-5 md:ml-7.5 select-none cursor-pointer"
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              src={SolaceLogoSmall}
              alt="Small Solace Logo."
              width="132.57px"
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
            />
          </Link>
        </div>
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
            href="https://www.notion.so/Solace-16cc777c403a46c8a2ffaba68008fcd9"
            className="block font-semibold hover:underline underline-offset-2"
          >
            We&apos;re Hiring!
          </a>
          <a
            href="https://discord.gg/XKrQgwAjBa"
            className="block font-normal hover:underline underline-offset-2"
          >
            Help & Support
          </a>
          <Link href="https://app.solace.fi/terms">
            <a className="block font-normal hover:underline underline-offset-2">
              Terms & Conditions
            </a>
          </Link>
          <div className="flex justify-between w-full mt-2.5">
            <a
              href="https://discord.com/channels/@me/918588744402096178/964626220476162189"
              className="block font-normal hover:underline underline-offset-2"
            >
              <DiscordIcon className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/solacefi"
              className="block font-normal hover:underline underline-offset-2"
            >
              <TwitterIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/solace-fi"
              className="block font-normal hover:underline underline-offset-2"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href="https://medium.com/solace-fi"
              className="block font-normal hover:underline underline-offset-2"
            >
              <MediumIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.defipulse.com/defi-list"
              className="block font-normal hover:underline underline-offset-2"
            >
              <DefiPulseIcon className="h-4 w-4" />
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
