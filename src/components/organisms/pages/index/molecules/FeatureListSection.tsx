import { SectionTitle } from './SectionTitle'

export default function FeatureListSection(
  ref: React.MutableRefObject<HTMLDivElement | null>,
  Title: JSX.Element,
  Theses: JSX.Element,
  id: string
): JSX.Element {
  return (
    <div
      className="flex flex-col pr-10 sm:pr-36 justify-center ml-24 min-h-screen"
      ref={ref}
      id={id}
    >
      <SectionTitle>{Title}</SectionTitle>
      <div className="flex flex-col gap-17.5 mt-17.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-17.5 max-w-max">{Theses}</div>
      </div>
    </div>
  )
}
