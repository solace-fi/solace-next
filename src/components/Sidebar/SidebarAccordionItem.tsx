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
    <div className={`group flex flex-col ${isOpen ? '' : 'h-0 transition duration-200'}`}>
      <div className="font-semibold cursor-pointer hover:font-bold" onClick={() => toggle(index)}>
        {title}
      </div>
      <div className="flex-1 mt-2.5 flex gap-2.5 flex-col item-container">
        <style jsx>{`
          .item-container a {
            font-weight: 600;
          }
        `}</style>
        {isOpen && children}
      </div>
    </div>
  )
}
