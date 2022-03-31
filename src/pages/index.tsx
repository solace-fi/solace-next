// import Button from '@/components/atoms/Button'
// import { AboutFirstSection } from '@/components/MainPage/organisms/AboutFirstSection'
import DesktopScrollableArea from '@/components/MainPage/DesktopScrollableArea'
import GlassCard from '@/components/MainPage/GlassCard'
import { useHomepageSections } from '@/components/MainPage/utils/useHomepageSections'
import Sidebar from '@/components/Sidebar'
import SolaceGradientBackground from '@/components/SolaceGradientBackground'
import React from 'react'

export default function Home() {
  const { HomepageSections } = useHomepageSections()
  const [visibleSection, setVisibleSection] = React.useState(0)
  return (
    <SolaceGradientBackground>
      {/* Sidebar */}
      <Sidebar />
      {/* <div className="flex"> */}
      <div
        className="min-h-screen w-full ml-[200px]"
        style={{
          width: 'calc(100vw - 200px)',
        }}
      >
        {/* <GlassCard
            title="Wallet coverage"
            body="Get your funds covered with a distinguished protection"
            url="/wallet-coverage"
          /> */}
        <DesktopScrollableArea
          HomepageSections={HomepageSections}
          visibleSection={visibleSection}
          setVisibleSection={setVisibleSection}
        />
      </div>
      {/* </GlassCard> */}
      {/* <Button
            type="warmgradient"
            href="https://app.solace.fi/cover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Cover
          </Button>
          <Button
            type="techygradient"
            href="https://app.solace.fi/buy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Solace Token
          </Button>
          <Button type="outline">Underwrite Risk</Button> */}
      {/* <AboutFirstSection /> */}
      {/* </div> */}
      {/* </div> */}
    </SolaceGradientBackground>
  )
}
