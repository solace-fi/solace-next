// import Button from '@/components/atoms/Button'
// import { AboutFirstSection } from '@/components/MainPage/organisms/AboutFirstSection'
import DesktopScrollableArea from '@/components/MainPage/DesktopScrollableArea'
// import GlassCard from '@/components/MainPage/GlassCard'
import { useHomepageSections } from '@/components/MainPage/utils/useHomepageSections'
import SolaceGradientBackground from '@/components/atoms/SolaceGradientBackground'
import React from 'react'
import Sidebars from '@/components/Sidebars'

export default function Home() {
  const { HomepageSections } = useHomepageSections()
  const [visibleSection, setVisibleSection] = React.useState(0)
  return (
    <SolaceGradientBackground>
      <Sidebars />
      <div
        className="min-h-screen w-full ml-[200px]"
        style={{
          width: 'calc(100% - 200px)',
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
