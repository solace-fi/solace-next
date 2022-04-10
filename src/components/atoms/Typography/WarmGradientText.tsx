export default function WarmGradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-b from-warmGradientA to-warmGradientB">
      {children}
    </span>
  )
}
