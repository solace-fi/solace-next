import React from 'react'

type SidebarAccordionItemProps = {
  isOpen: boolean
  toggle: (index: number) => void
  index: number
  title: string | React.ReactNode
  children: React.ReactNode
}

export default function SidebarAccordionItem({
  isOpen,
  toggle,
  index,
  title,
  children,
}: SidebarAccordionItemProps) {
  return (
    <div className={`group flex flex-col ${isOpen ? '' : ''}`}>
      <div
        className="font-semibold cursor-pointer hover:font-bold w-40 flex justify-start gap-2 items-center"
        onClick={() => toggle(index)}
      >
        <div>{title}</div>
        <div
          className={`${
            isOpen ? '-rotate-180 -mt-[4px]' : 'rotate-0 mt-[4px]'
          } text-[7px] transition-all duration-300`}
        >
          ▼
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'max-h-24 mt-2.5' : 'max-h-0'
        } overflow-y-hidden transition-all duration-300 flex flex-col gap-2.5`}
      >
        {children}
      </div>
    </div>
  )
}
