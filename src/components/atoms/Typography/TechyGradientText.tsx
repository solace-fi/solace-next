export default function TechyGradientText({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={
        'bg-clip-text text-transparent bg-gradient-to-b from-techyGradientA to-techyGradientB' +
        ' ' +
        (className ?? '')
      }
    >
      {children}
    </span>
  )
}
