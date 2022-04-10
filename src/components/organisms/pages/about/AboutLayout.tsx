import AboutMainSubtitle from '@/components/atoms/Typography/AboutMainSubtitle'
import AboutMainTitle from '@/components/atoms/Typography/AboutMainTitle'
import Sidebars from '@/components/organisms/Sidebars'

export default function AboutLayout({
  title,
  subtitle,
  cards,
  children,
}: {
  title: string
  subtitle: string
  cards: JSX.Element[]
  children: React.ReactNode
}) {
  return (
    <div className="pretty-weirdly-shaped-gradient flex">
      <style jsx>{`
        .pretty-weirdly-shaped-gradient {
          background-image: url('/images/header-bg.svg');
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: top;
        }
      `}</style>
      <Sidebars />
      <main className="w-full min-h-screen max-w-[1440px] mx-auto pl-[264px] pt-24 flex flex-col">
        <section className="flex flex-col gap-17.5">
          <header className="flex flex-col gap-2">
            <AboutMainTitle>{title}</AboutMainTitle>
            <AboutMainSubtitle>{subtitle}</AboutMainSubtitle>
          </header>
          <div
            className={`grid ${
              { 4: 'grid-cols-2 mr-[264px]', 6: 'grid-cols-3 mr-[147px]' }[cards.length] || ''
            } gap-6`}
          >
            {cards}
          </div>
        </section>
        <section className="text-dark">{children}</section>
      </main>
    </div>
  )
}
