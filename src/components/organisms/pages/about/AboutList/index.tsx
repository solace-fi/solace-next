import AboutListItem from '@/components/organisms/pages/about/AboutList/AboutListItem'

export default function AboutList({ items }: { items: string[] }) {
  return (
    <ul className="gap-12 flex flex-col font-semibold ">
      {items.map((text, i) => (
        <AboutListItem
          text={text}
          decorator={String(i + 1)}
          key={text + String(i)}
          bulletType={'techy'}
          textType={'techy'}
        />
      ))}
    </ul>
  )
}
