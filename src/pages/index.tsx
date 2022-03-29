import Button from '@/components/atoms/Button'
import { AboutFirstSection } from '@/components/MainPage/organisms/AboutFirstSection'
import Sidebar from '@/components/Sidebar'
import SolaceGradientBackground from '@/components/SolaceGradientBackground'

export default function Home() {
  return (
    <SolaceGradientBackground>
      {/* Sidebar */}
      <Sidebar />
      <div className="flex">
        <div className="min-h-screen flex w-full ml-[200px]">
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
          <AboutFirstSection />
        </div>
      </div>
    </SolaceGradientBackground>
  )
}
