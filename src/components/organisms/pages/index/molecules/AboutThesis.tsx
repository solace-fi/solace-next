import WhiteCircle from '../atoms/WhiteCircle'

export default function AboutThesis({
  title,
  text,
}: {
  title: string
  text: string | React.ReactNode
}): JSX.Element {
  return (
    <div className="flex mt-2.5 max-w-[370px]">
      <div className="min-w-[30px] mt-0.5">
        <WhiteCircle />
      </div>
      <div className="flex-col gap-2.5">
        <div className="font-title font-bold text-2xl leading-6">{title}</div>
        <div className="text-base leading-6 mt-2.5 ">{text}</div>
      </div>
    </div>
  )
}
