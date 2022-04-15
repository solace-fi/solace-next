import SolaceLogoSmall from '@/resources/svg/solace-logo-white-small.svg'
import Burger from '@/resources/svg/tsx/Burger'
import Image from 'next/image'
import Link from 'next/link'
import AccordionContainer from './AccordionContainer'

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

export default function SidebarLeft() {
  return (
    <div className="ml-7.5 my-7.5 inline-block fixed min-h-[calc(100vh_-_60px)]">
      <div className="absolute top-0 left-0">
        <Burger className="h-6 w-6" />
      </div>
      <div className="flex flex-col w-[200px] items-start select-none">
        <Link href="/" passHref={undefined}>
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={SolaceLogoSmall}
            className="ml-7.5 select-none cursor-pointer"
            alt="Small Solace Logo."
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
                      className="block font-normal text-gray-700 hover:text-gray-900 hover:underline underline-offset-2"
                      key={title}
                    >
                      {title}
                    </a>
                  )
                case 'internal':
                  return (
                    <Link href={`/${link}`} key={title}>
                      <a className="block font-normal text-gray-700 hover:text-gray-900 hover:underline underline-offset-2">
                        {title}
                      </a>
                    </Link>
                  )
                case 'external':
                  return (
                    <a
                      href={link}
                      className="block font-normal text-gray-700 hover:text-gray-900 hover:underline underline-offset-2"
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
        {/* <div className="mt-7.5 font-semibold cursor-pointer hover:font-bold">Products</div>
        <div className="mt-4 font-semibold cursor-pointer hover:font-bold">Developers</div>
        <div className="mt-4 font-semibold cursor-pointer hover:font-bold">About</div> */}
      </div>
    </div>
  )
}
