// import Button from '@/components/atoms/Button'
// import { AboutFirstSection } from '@/components/MainPage/organisms/AboutFirstSection'
import DesktopScrollableArea from '@/components/MainPage/DesktopScrollableArea'
// import GlassCard from '@/components/MainPage/GlassCard'
import { useHomepageSections } from '@/components/MainPage/utils/useHomepageSections'
import Sidebar from '@/components/Sidebar'
import SolaceGradientBackground from '@/components/atoms/SolaceGradientBackground'
import React from 'react'

function SidebarRight({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
  // return isOpen ? (
  return (
    <section
      className={`absolute ${
        isOpen ? 'right-0 top-0 w-[375px]' : '-right-[375px] -top-0 w-0 hidden'
      } flex flex-col bg-light h-screen transition-all duration-300 ease-out justify-between`}
    >
      {/* header */}
      <div className="flex mt-7.5 mx-7.5 justify-between items-center">
        {/* Connect Wallet button, 36pic wide + text, then to the right, an X to close the sidebar */}
        <div className="h-[52px] rounded-full gap-2 bg-gradient-to-br flex items-center from-techyGradientA to-techyGradientB select-none cursor-pointer hover:brightness-110 duration-200 ease-out group">
          {/* userpic h-9 w-9 m-2 */}
          <div className="h-9 w-9 m-2 bg-gradient-to-br from-warmGradientA to-warmGradientB rounded-full group-hover:animate-spin" />
          {/* text */}
          <div className="text-sm mr-4 mb-4 mt-4 font-bold">Connect Wallet</div>
        </div>
        {/* X */}
        <div
          className="mb-1 rounded-full justify-center text-dark font-title font-base text-5xl select-none cursor-pointer hover:text-select transition-color duration-200 ease-out"
          onClick={() => {
            toggleSidebar()
          }}
        >
          {/* x */}
          {/* x svg now */}
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
      {/* body buttons */}
      <ul className="">
        {[
          {
            title: 'Airdrop',
            link: 'https://app.solace.fi/airdrop',
            special: true,
          },
          {
            title: 'My Policy',
            link: 'https://app.solace.fi/cover',
          },
          {
            title: 'Bond',
            link: 'https://app.solace.fi/bond',
          },
          {
            title: 'Stake',
            link: 'https://app.solace.fi/stake',
          },
          {
            title: 'Farm',
            link: 'https://app.solace.fi/farm',
          },
          {
            title: 'Govern',
            link: 'https://app.solace.fi/govern',
          },
          {
            title: 'Legacy',
            link: 'https://app.solace.fi/legacy',
          },
        ].map(({ title, link, special }) => (
          <li key={title}>
            <a
              key={title}
              href={link}
              className={`flex flex-col justify-center items-center mb-4 ${
                special
                  ? 'bg-gradient-to-br from-warmGradientA to-techyGradientA font-semibold bg-clip-text text-transparent hover:font-bold'
                  : 'text-black hover:font-semibold'
              }`}
            >
              <div className="">{title}</div>
            </a>
          </li>
        ))}
      </ul>
      {/* footer */}
      <div className="flex justify-center items-center text-dark h-[82px]">
        <div>
          <a className="hover:font-semibold" href="https://app.solace.fi/terms">
            Terms
          </a>
        </div>
        <div className="ml-4">
          <a className="hover:font-semibold" href="https://app.solace.fi/privacy">
            Privacy
          </a>
        </div>
      </div>
    </section>
  )
  // ) : null
}

export default function Home() {
  const { HomepageSections } = useHomepageSections()
  const [visibleSection, setVisibleSection] = React.useState(0)
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false)
  const toggleSidebar = () => setSidebarIsOpen(!sidebarIsOpen)
  return (
    <SolaceGradientBackground>
      {/* Sidebar */}
      <Sidebar />
      {/* top right floating circle to toggle sidebar */}
      <div
        className="absolute top-5 right-5 h-12 w-12 rounded-full bg-light hover:brightness-90 flex items-center justify-center text-dark font-title font-bold text-lg select-none cursor-pointer"
        onClick={toggleSidebar}
      >
        ayy
      </div>
      <SidebarRight isOpen={sidebarIsOpen} toggleSidebar={toggleSidebar} />
      {/* right sidebar, 375px wide, flex col */}
      <div
        className="min-h-screen w-full ml-[200px]"
        style={{
          width: 'calc(100vw - 200px)',
        }}
      >
        <DesktopScrollableArea
          HomepageSections={HomepageSections}
          visibleSection={visibleSection}
          setVisibleSection={setVisibleSection}
        />
      </div>
    </SolaceGradientBackground>
  )
}
