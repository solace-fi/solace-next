import AboutListItem from '@/components/organisms/pages/about/AboutList/AboutListItem'

export default function BoxedAboutList({
  items,
  identifier,
  bulletType,
  textType,
  textSize,
}: {
  items: string[] | JSX.Element[]
  identifier: string
  bulletType: 'white' | 'techy'
  textType: 'dark' | 'white' | 'techy'
  textSize: 'small' | 'large'
}) {
  return (
    <ul className="gap-8 flex flex-col ">
      {items.map((text, i) => (
        <AboutListItem
          text={text}
          decorator={String(i + 1)}
          key={identifier}
          bulletType={bulletType}
          textType={textType}
          textSize={textSize}
        />
      ))}
    </ul>
  )
}
