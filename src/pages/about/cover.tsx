import Sidebars from '@/components/Sidebars'

export function MainTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-[100px] font-bold font-title">{children}</div>
}

export function MainSubtitle({ children }: { children: React.ReactNode }) {
  return <div className="text-2xl">{children}</div>
}

export default function Cover() {
  return (
    <div className="pretty-weirdly-shaped-gradient w-full min-h-screen bg-dark">
      <Sidebars />
      <style jsx>{`
        .pretty-weirdly-shaped-gradient {
          background-image: url('/images/header-bg.svg');
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: top;
        }
      `}</style>
      <MainTitle>give me cheese</MainTitle>
      <MainSubtitle>if you can</MainSubtitle>
    </div>
  )
}
