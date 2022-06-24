import { useScrollY } from '@/components/organisms/Sidebars/SidebarRight'
import classNames from 'classnames'
import { useState, useEffect } from 'react'

export default function Burger({
  className,
  onClick,
}: {
  className?: string
  onClick?: () => void
}) {
  const scrollY = useScrollY()
  const [topOffset, setTopOffset] = useState(0)
  const [promoBannerIsOpen, setPromoBannerIsOpen] = useState(true)

  useEffect(() => {
    const spiPromoBannerIsOpen = localStorage.getItem('spiPromoBannerIsOpen')
    if (spiPromoBannerIsOpen === 'false') {
      setPromoBannerIsOpen(false)
    }
  }, [])

  useEffect(() => {
    // console.log('changing directions')
    const baseOffset = promoBannerIsOpen ? 51 : 0
    // get window scrollY and if it's between 0 and 51, set topOffset to 51 - scrollY, otherwise set topOffset to 0
    if (scrollY >= 0 && scrollY < baseOffset) {
      setTopOffset(baseOffset - scrollY)
    } else {
      setTopOffset(0)
    }
  }, [promoBannerIsOpen, scrollY])
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('sidebar-left', className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      onClick={onClick}
    >
      <style jsx>
        {`
          .sidebar-left {
            bottom: calc(100% - ${topOffset + 64}px);
          }
        `}
      </style>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}
