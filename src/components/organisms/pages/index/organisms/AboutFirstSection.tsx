import React, { useEffect, useState /* , { RefObject, useEffect, useMemo } */ } from 'react'
import GlassCard from '../GlassCard'
import { Lock, UnderwritingPoolUSDBalances, Coverage } from '@solace-fi/sdk-nightly'
import { truncateValue } from '@/utils'
import { formatUnits } from '@ethersproject/units'
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
  const [globalStake, setGlobalStake] = useState<string>('-')
  const [globalAverageApr, setGlobalAverageApr] = useState<string>('-')
  const [uwpSize, setUwpSize] = useState<string>('-')
  const [activeCoverLimit, setActiveCoverLimit] = useState<string>('-')

  const getSolaceStats = async () => {
    const lock = new Lock()
    const uwpUSD = new UnderwritingPoolUSDBalances()
    const coverage1 = new Coverage(1)
    const coverage137 = new Coverage(137)

    const [
      mainnetGlobalLockStats,
      polygonGlobalLockStats,
      auroraGlobalLockStats,
      uwpUSDSize,
      mainnetCoverLimit,
      polygonCoverLimit,
    ] = await Promise.all([
      lock.getGlobalLockStats(1),
      lock.getGlobalLockStats(137),
      lock.getGlobalLockStats(1313161554),
      uwpUSD.getUSDBalances_All(),
      coverage1.activeCoverLimit(),
      coverage137.activeCoverLimit(),
    ])

    const numberifiedSolaceStaked =
      parseFloat(mainnetGlobalLockStats.solaceStaked) +
      parseFloat(polygonGlobalLockStats.solaceStaked) +
      parseFloat(auroraGlobalLockStats.solaceStaked)
    setGlobalStake(truncateValue(numberifiedSolaceStaked.toString(), 2))

    const numberifiedApr =
      parseFloat(mainnetGlobalLockStats.apr) +
      parseFloat(polygonGlobalLockStats.apr) +
      parseFloat(auroraGlobalLockStats.apr)
    setGlobalAverageApr(truncateValue(parseInt((numberifiedApr / 3).toString()), 2))

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const uwpUSDTotal: number = uwpUSDSize.total

    setUwpSize(truncateValue(uwpUSDTotal, 2))

    const totalCoverLimit = mainnetCoverLimit.add(polygonCoverLimit)
    setActiveCoverLimit(truncateValue(formatUnits(totalCoverLimit, 18), 2))
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getSolaceStats()
  }, [])

  return (
    <section className="hidden md:flex items-center gap-15 w-full justify-center pr-50" id="start">
      {[
        {
          title: 'Global Stake',
          amount: globalStake,
          unit: 'SOLACE',
        },
        {
          title: 'Global Average APR',
          amount: `${globalAverageApr}%`,
        },
        {
          title: 'Underwriting Pool',
          amount: `$${uwpSize}`,
        },
        {
          title: 'Active Cover Limit',
          amount: `$${activeCoverLimit}`,
        },
      ]
        .map(({ title, amount, unit }, i) => (
          <div className="flex flex-col items-center gap-0.5" key={title + i.toString()}>
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
        <div className="mx-5 md:mx-24">
          <SolaceStatsSection />
          <section className="mx-5 sm:mx-auto mt-20 md:mt-[93px]">
            <article className="max-w-3xl flex flex-col gap-5">
              <h1 className="text-[28px] md:text-[64px] leading-[33.6px] md:leading-[70.4px] font-title font-bold">
                DeFi is a Journey.
                <br />
                Focus on Yields.
              </h1>
              <p className="text-base md:text-xl leading-[25.6px] md:leading-8 max-w-[618px]">
                Protect your funds against smart-contracts exploits across 180+ protocols with an
                intelligent single policy that dynamically updates as your portfolio changes.
              </p>
            </article>
          </section>
          <section className="flex md:items-start items-center flex-col md:flex-row gap-[18px] md:gap-10 mt-12.5 md:mt-24">
            {[
              {
                title: 'Wallet coverage',
                body: 'Learn about undisputed advantages of one-for-all Solace coverage',
                url: '/about/cover',
              },
              {
                title: '$SOLACE',
                body: 'Learn how tokenomics architecture helps us build better insurance',
                url: '/about/tokenomics',
              },
              {
                title: 'Staking',
                body: 'Earn yield from underwriting activity and token distribution without risk',
                url: '/about/staking',
              },
            ].map(({ title, body, url }, i) => (
              <GlassCard
                title={title}
                body={body}
                url={url}
                key={'glassCard-internal' + title}
                middleCard={i === 1}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}
