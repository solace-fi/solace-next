import { ReactNode } from 'react'

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="text-4xl sm:text-5xl font-title">{children}</h2>
}
