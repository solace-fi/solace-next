export default function SecondSectionTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h1
      className={
        'text-[38px] leading-[38px] md:text-[80px] md:leading-[80px] font-title mb-2 font-bold' +
        ' ' +
        (className ?? '')
      }
    >
      {children}
    </h1>
  )
}
