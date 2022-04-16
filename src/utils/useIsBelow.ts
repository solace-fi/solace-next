import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function useIsBelow(id: string) {
  const router = useRouter()
  // get current relative path
  const currentPath = router.pathname
  // check if current path is one of the following: /about/cover, /about/tokenomics, /about/staking
  const isProductPage = currentPath.includes('/about/')
  // state for current position in viewport of the element
  const [currentPosition, setCurrentPosition] = useState<number>(0)
  // state for height of the element
  const [elementHeight, setElementHeight] = useState<number | undefined>(0)
  // state to know if the element is below the background
  const [isBelow, setIsBelow] = useState<boolean>(false)
  // useEffect to detect scrolling and updating currentPosition
  useEffect(() => {
    const handleScroll = () => {
      // detect current position in viewport
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      // detect height of the element
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const updatedElementHeight = document.getElementById(id)?.clientHeight
      // update currentPosition
      setCurrentPosition(Math.floor(scrollTop))
      setElementHeight(updatedElementHeight)
    }
    // add event listener
    window.addEventListener('scroll', handleScroll)

    // remove event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [id])

  useEffect(() => {
    // check if the element is on below the background (300px tall)
    if (currentPosition > 300) {
      setIsBelow(true)
    } else setIsBelow(false)
  }, [currentPosition])

  return {
    isBelow,
    elementHeight,
    isProductPage,
  }
}
