// import Button from '@/components/atoms/Button'
// import { AboutFirstSection } from '@/components/MainPage/organisms/AboutFirstSection'
import DesktopScrollableArea from '@/components/organisms/pages/index/DesktopScrollableArea'
// import GlassCard from '@/components/MainPage/GlassCard'
import { useHomepageSections } from '@/components/organisms/pages/index/utils/useHomepageSections'
import SolaceGradientBackground from '@/components/atoms/SolaceGradientBackground'
import React from 'react'
import Sidebars from '@/components/organisms/Sidebars'

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
