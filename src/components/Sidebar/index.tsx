import SolaceLogoSmall from '@/resources/svg/solace-logo-white-small.svg'
import Image from 'next/image'
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
    // developers: docs, sdk
    title: 'Developers',
    children: [
      {
        title: 'Docs',
        link: 'https://docs.solace.com/',
        type: 'external',
      },
      {
        title: 'SDK',
        link: 'https://docs.solace.com/developer/sdk/',
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

export default function Sidebar() {
  return (
    <div className="ml-7.5 my-7.5 inline-block fixed">
      <div className="flex flex-col w-[200px] items-start select-none">
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image src={SolaceLogoSmall} className="ml-7.5" alt="Small Solace Logo." />
        <AccordionContainer
          accordees={sidebarContent.map(({ title, children }) => ({
            title,
            // eslint-disable-next-line @typescript-eslint/no-shadow
            children: children.map(({ title, link, type }) =>
              type === 'hash' ? (
                <a
                  href={`#${link}`}
                  className="block font-normal text-gray-700 hover:text-gray-900 hover:underline underline-offset-2"
                  key={title}
                >
                  {title}
                </a>
              ) : (
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
            ),
          }))}
        />
        {/* <div className="mt-7.5 font-semibold cursor-pointer hover:font-bold">Products</div>
        <div className="mt-4 font-semibold cursor-pointer hover:font-bold">Developers</div>
        <div className="mt-4 font-semibold cursor-pointer hover:font-bold">About</div> */}
      </div>
    </div>
  )
}
