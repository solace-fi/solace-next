// import Button from '@/components/atoms/Button'
// import { AboutFirstSection } from '@/components/MainPage/organisms/AboutFirstSection'
import DesktopScrollableArea from '@/components/organisms/pages/index/DesktopScrollableArea'
// import GlassCard from '@/components/MainPage/GlassCard'
import { useHomepageSections } from '@/components/organisms/pages/index/utils/useHomepageSections'
import SolaceGradientBackground from '@/components/atoms/SolaceGradientBackground'
import React, { useEffect } from 'react'
import Sidebars from '@/components/organisms/Sidebars'
import classNames from 'classnames'
import CloseTechy from '@/resources/svgx/CloseTechy'

export default function Home() {
  const { HomepageSections } = useHomepageSections()
  const [visibleSection, setVisibleSection] = React.useState(0)
  const [promoBannerIsOpen, setPromoBannerIsOpen] = React.useState(true)
  const handleCloseSPIPromoBanner = () => {
    // set to state
    setPromoBannerIsOpen(false)
    // set to local storage
    localStorage.setItem('spiPromoBannerIsOpen', 'false')
  }
  useEffect(() => {
    const spiPromoBannerIsOpen = localStorage.getItem('spiPromoBannerIsOpen')
    if (spiPromoBannerIsOpen === 'false') {
      setPromoBannerIsOpen(false)
    }
  }, [])

  return (
    <div>
      {promoBannerIsOpen && (
        <div className="h-[51px] px-4 bg-white flex font-semibold md:justify-center text-dark items-center relative pr-[51px] md:pr-0">
          <div className="flex gap-6 items-center">
            <div className="text-xs md:text-base text-transparent bg-gradient-to-br bg-clip-text from-techyGradientA to-techyGradientB">
              Solace Portfolio Insurance is upgraded to version 3!
            </div>
            <a
              className={classNames(
                'text-white bg-gradient-to-br from-techyGradientA to-techyGradientB',
                'rounded-full py-1.5 px-8 text-xs md:text-sm',
                'hover:opacity-80 transition-color duration-200 ease-out cursor-pointer select-none',
                'shrink-0'
              )}
              href="https://www.google.com"
              target={'_blank'}
              rel={'noopener noreferrer'}
            >
              Learn more
            </a>
          </div>
          <div
            className="absolute top-0 right-0 h-full w-[51px] flex items-center justify-center cursor-pointer hover:bg-[#EEE] bg-white transition-colors duration-200 ease-in-out"
            onClick={handleCloseSPIPromoBanner}
          >
            <CloseTechy className="h-[17px] w-[17px]" />
          </div>
        </div>
      )}
      <SolaceGradientBackground>
        <Sidebars />
        <div className="min-h-screen w-full ml-0 pb-12.5 md:ml-[200px] md:w-[calc(100%_-_200px)]">
          <DesktopScrollableArea
            HomepageSections={HomepageSections}
            visibleSection={visibleSection}
            setVisibleSection={setVisibleSection}
          />
        </div>
      </SolaceGradientBackground>
    </div>
  )
}
