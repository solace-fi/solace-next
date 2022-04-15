export default function SecondSectionSubtitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <p className={'text-base md:text-2xl' + ' ' + (className ?? '')}>{children}</p>
}
