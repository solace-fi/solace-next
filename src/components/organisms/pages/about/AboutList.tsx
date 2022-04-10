import TechyGradientText from '@/components/atoms/Typography/TechyGradientText'

export function AboutListItem({ decorator, text }: { decorator: string; text: string }) {
  return (
    <li className="text-2xl flex items-center gap-4" key={text + decorator}>
      <div className="text-light bg-gradient-to-br from-techyGradientA to-techyGradientB rounded-full h-12 w-12 flex items-center justify-center text-2xl ">
        {decorator}
      </div>
      <TechyGradientText>{text}</TechyGradientText>
    </li>
  )
}

export default function AboutList({ items }: { items: string[] }) {
  return (
    <ul className="gap-15 flex flex-col font-semibold ">
      {items.map((text, i) => (
        <AboutListItem text={text} decorator={String(i + 1)} key={text + String(i)} />
      ))}
    </ul>
  )
}
