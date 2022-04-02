import React /* , { RefObject, useEffect, useMemo } */ from 'react'
import GlassCard from '../GlassCard'
// import { Flex } from '../../../../components/atoms/Layout'
// import { Text } from '../../../../components/atoms/Typography'
// import { useWindowDimensions } from '../../../../hooks/internal/useWindowDimensions'
// import { Button } from '../../../../components/atoms/Button'
// import { HyperLink, StyledNavLink } from '../../../../components/atoms/Link'
// import whiteLogo from '@/resources/svg/solace-logo-white.svg'
// import Image from 'next/image'
// import Button from '@/components/atoms/Button'
// import { useNetwork } from '../../../../context/NetworkManager'

// export const AboutFirstSection = <AboutFirstSectionFunction />

function SolaceStatsSection() {
  return (
    <section className="flex items-center gap-15 w-full justify-center pr-50">
      {[
        {
          title: 'Global Stake',
          amount: '4.78M',
          unit: 'SOLACE',
        },
        {
          title: 'Global APR',
          amount: '208%',
        },
        {
          title: 'Underwriting Pool',
          amount: '$4.13M',
        },
        {
          title: 'Active Cover Limit',
          amount: '$120.9',
        },
      ]
        .map(({ title, amount, unit }) => (
          <div className="flex flex-col items-center gap-0.5">
            <div className="font-semibold text-xs">{title}</div>
            {unit ? (
              <div className="flex gap-0.5 items-baseline">
                <div className="font-semibold">{amount}</div>
                <div className="text-[10px]">{unit}</div>
              </div>
            ) : (
              <div className="font-semibold">{amount}</div>
            )}
          </div>
        ))
        .reduce((prev, next) => (
          // join with vertical separator
          <>
            {prev}
            <div className="h-6 bg-light w-px" />
            {next}
          </>
        ))}
    </section>
  )
}

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
    <div className="min-h-screen" ref={ref}>
      <div className="inline-block mt-10 w-full">
        <div className="mx-24">
          <SolaceStatsSection />
          <section className="mt-[93px]">
            <article className="max-w-3xl flex flex-col gap-5">
              <h1 className="text-[64px] leading-[70.4px] font-title font-bold">
                We invent the future of DeFi insurance
              </h1>
              <p className="text-xl leading-8 max-w-[613px]">
                Protect your funds against smart-contracts exploits across 180+ protocols with an
                intelligent single policy that automatically adjusts premium to changes in your
                positions.
              </p>
            </article>
          </section>
          <section className="flex gap-10 mt-24">
            {[
              {
                title: 'Wallet coverage',
                body: 'Get your funds covered with a distinguished protection',
                url: 'https://solace.fi/wallet-coverage',
              },
              {
                title: '$SOLACE',
                body: 'Learn how tokenomics architecture helps us build better insurance',
                url: 'https://solace.fi/tokenomics',
              },
              {
                title: 'Staking',
                body: 'Earn yield from underwriting activity and token distribution without risk',
                url: 'https://solace.fi/staking',
              },
            ].map(({ title, body, url }, i) => {
              const Card = <GlassCard title={title} body={body} url={url} />
              if (i === 1) {
                return <div className="-mt-5">{Card}</div>
              } else {
                return Card
              }
            })}
          </section>
        </div>
      </div>
    </div>
  )
}
