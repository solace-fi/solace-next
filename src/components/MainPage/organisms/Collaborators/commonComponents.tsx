import React from 'react'

export function TeamMember({
  name,
  role,
  twitter,
}: {
  name: string
  role: string
  twitter?: {
    username: string
    url: string
  }
}): JSX.Element {
  return (
    <div className="flex-col gap-[3px]">
      <div className="font-bold font-title leading-[1.2] text-xl">{name}</div>
      <div className="text-sm">{role}</div>
      {twitter && (
        <div className="underline text-xs mt-[3px]">
          <a href={twitter.url} target="_blank" rel="noreferrer">
            @{twitter.username}
          </a>
        </div>
      )}
    </div>
  )
}

export function HardcodedGrid({ children }: { children: React.ReactNode[] }): JSX.Element {
  return <div className="grid gap-x-15 gap-y-7.5 grid-cols-1 sm:grid-cols-3">{children}</div>
}

// export function HardcodedResponsiveFlex({ children }: { children: React.ReactNode }): JSX.Element {
//   return isMobile ? (
//     // <Flex col gap={50} px={60} mb={81}>
//     //   {children}
//     // </Flex>
//     <>{children}</>
//   ) : (
//     <Flex col stretch pr={70} gap={70}>
//       {children}
//     </Flex>
//   )
// }
// export {}
