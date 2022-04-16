export default function AboutMainTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-[38px] leading-[38px] md:text-[100px] md:leading-[100px] font-bold font-title">
      {children}
    </h1>
  )
}
