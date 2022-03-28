import Sidebar from '@/components/Sidebar'
import SolaceGradientBackground from '@/components/SolaceGradientBackground'

export default function Home() {
  return (
    <SolaceGradientBackground>
      {/* Sidebar */}
      <Sidebar />
      <div className="flex">
        <div className="min-h-screen flex bg-dark w-full ml-[200px]">
          a in commerce, b in studies
        </div>
      </div>
    </SolaceGradientBackground>
  )
}
