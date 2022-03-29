import React, { RefObject, useEffect, useMemo } from 'react'
// import { Flex } from '../../../../components/atoms/Layout'
// import { Text } from '../../../../components/atoms/Typography'
// import { useWindowDimensions } from '../../../../hooks/internal/useWindowDimensions'
// import { Button } from '../../../../components/atoms/Button'
// import { HyperLink, StyledNavLink } from '../../../../components/atoms/Link'
import whiteLogo from '@/resources/svg/solace-logo-white.svg'
import Image from 'next/image'
import Button from '@/components/atoms/Button'
// import { useNetwork } from '../../../../context/NetworkManager'

// export const AboutFirstSection = <AboutFirstSectionFunction />

export function AboutFirstSection({
  // sectionRef: ref,
  // getScrollerForThisRef,
  // isVisible,
  useScrollingRef,
}: {
  useScrollingRef: () => React.MutableRefObject<HTMLDivElement | null>
  // sectionRef?: React.Ref<HTMLDivElement>
  // getScrollerForThisRef?: (
  //   ref: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement>
  // ) => () => void
  // isVisible?: boolean
}): JSX.Element {
  const ref = useScrollingRef()

  // const scroller = useMemo(
  //   () => (ref && getScrollerForThisRef ? getScrollerForThisRef(ref) : () => console.log('no ref')),
  //   [ref, getScrollerForThisRef]
  // )
  // useEffect(() => {
  //   if (isVisible) {
  //     scroller()
  //   }
  // }, [isVisible, scroller, ref])

  return (
    <div
      className="flex flex-col items-center px-12 sm:px-0 mt-0 sm:mt-24 sm:mr-28 sm:pt-24 sm:justify-center"
      ref={ref}
    >
      <div className="bg-[#585] w-[507px]">
        <div className="bg-warmGradientA h-[157px]">
          <Image src={whiteLogo} className="object-scale" width={507} height={157} />
        </div>
        <div className="mr-[78px]">
          <div className="mt-7.5 bg-select">
            Insurance protocol built to secure DeFi&apos;s future by solving complexity of risk
            management with user-friendly, intelligent and transparent tools.
          </div>
          <div className="flex gap-6 mt-15 flex-wrap justify-center">
            <Button type="warmgradient" href="https://app.solace.fi/cover">
              Buy Cover
            </Button>
            <Button type="techygradient" href="https://app.solace.fi/buy">
              Buy Solace Token
            </Button>
            <Button type="outline" href="https://app.solace.fi/bond">
              Underwrite Risk
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
