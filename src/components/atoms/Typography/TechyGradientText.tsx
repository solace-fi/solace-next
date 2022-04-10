export default function TechyGradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-b from-techyGradientA to-techyGradientB">
      {children}
    </span>
  )
}
