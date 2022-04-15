import React from 'react'
import { useState } from 'react'
import SidebarAccordionItem from './SidebarAccordionItem'

/*
Let's receive a set of objects like this:
[{
  title: 'Title',
  children: <ul><li>Child1</li><li>Child2</li></ul>
}]
*/

type Accordee = {
  title: string | React.ReactNode
  children: React.ReactNode
}

export default function AccordionContainer({ accordees }: { accordees: Accordee[] }) {
  // detect which element is active
  const [openElement, setOpenElement] = useState<number | null>(null)
  // toggle function to be passed to AccordionItem
  const toggle = (index: number) =>
    openElement === index ? setOpenElement(null) : setOpenElement(index)
  // detector for active element
  const isOpen = (index: number) => openElement === index
  return (
    <div className="mt-15 gap-4 flex flex-col md:mb-auto md:mt-[120px] ">
      {accordees.map((accordee, index) => (
        <SidebarAccordionItem
          isOpen={isOpen(index)}
          toggle={toggle}
          index={index}
          title={accordee.title}
          key={index}
        >
          {accordee.children}
        </SidebarAccordionItem>
      ))}
    </div>
  )
}
