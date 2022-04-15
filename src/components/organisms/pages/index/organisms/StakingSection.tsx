import React from 'react'
import AboutThesis from '../molecules/AboutThesis'
import FeatureListSection from '../molecules/FeatureListSection'

export function StakingSection({
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
  // const { isMobile } = useWindowDimensions()
  // const scroller = useMemo(
  //   () => (ref && getScrollerForThisRef ? getScrollerForThisRef(
  // </h2>
  //   if (isVisible) {
  //     // console.log('currently visible: ', 'ExploitsCoverageSection')
  //     // console.log('ExploitsCoverageSection > useEffect > isVisible > now trying to scroll here')
  //     // console.log('my ref: ', ref)
  //     scroller()
  //   }
  // }, [isVisible, scroller, ref])

  const Title = <span className="text-red-600 font-bold">Staking</span>

  const Theses = (
    <>
      <AboutThesis
        title="No risk of loss"
        text={
          <>
            Users earn revenue from the underwriting activity and further $SOLACE distribution,
            while the{' '}
            <span className="font-bold">
              risk of underwriting falls on the protocol&apos;s owned pool.
            </span>
          </>
        }
      />
      <AboutThesis
        title="Stake and get votes"
        text={
          <>
            Each staked $SOLACE gives you one <span className="font-bold">vote in the DAO.</span>
          </>
        }
      />
      <AboutThesis
        title="Long-term bonuses"
        text={
          <>
            Users can <span className="font-bold">multiply</span> their{' '}
            <span className="font-bold">rewards</span> (up to 2.5x) and voting rights (up to 4x) as
            they lock $SOLACE for chosen period.
          </>
        }
      />
      <AboutThesis
        title="Multiple revenue streams"
        text={
          <>
            Staked $SOLACE provides you with exposure to underwriting{' '}
            <span className="font-bold">rewards</span>, underwriting pool{' '}
            <span className="font-bold">investments</span>, plus $SOLACE{' '}
            <span className="font-bold">emissions</span>.
          </>
        }
      />
    </>
  )

  return FeatureListSection(ref, Title, Theses, 'staking')
}
