import React from 'react'
import { SectionTitle } from '../molecules/SectionTitle'
// import { Flex, Grid } from '../../../../components/atoms/Layout'
// import { SectionTitle } from '../../../../components/atoms/Typography'
// import { Text } from '../../../../components/atoms/Typography'
// import { useWindowDimensions } from '../../../../hooks/internal/useWindowDimensions'
// import styled from 'styled-components'

function ProgressBar() {
  return (
    <div className="container bg-lightNeutral h-1 rounded-full bg-opacity-50">
      <style jsx>{`
        .container {
          grid-column: span 4 / span 4;
        }
      `}</style>
      <div className="content h-1 w-1/2 rounded-full bg-light" />
    </div>
  )
}

function Quarter({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="text-2xl font-title font-bold">{children}</div>
}

function RoadmapList({ children }: { children: React.ReactNode[] }): JSX.Element {
  return (
    <ul className="flex gap-4 flex-col list-disc mt-3">
      {children.map((child, index) => (
        <li key={index} className="smol-bullet flex gap-2 ml-2">
          <style jsx>{`
            // CODE SOURCE: https://stackoverflow.com/questions/7990429/how-to-control-size-of-list-style-type-disc-in-css
            .smol-bullet {
              list-style: none;
            }

            .smol-bullet:before {
              content: '·';
              font-size: 35px;
              vertical-align: middle;
              line-height: 20px;
            }
          `}</style>
          <div>{child}</div>
        </li>
      ))}
    </ul>
  )
}

// export const RoadmapSection = <RoadmapSectionFunction />
export function RoadmapSection({
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
  //   () => (ref && getScrollerForThisRef ? getScrollerForThisRef(ref) : () => console.log('no ref')),
  //   [ref, getScrollerForThisRef]
  // )
  // useEffect(() => {
  //   if (isVisible) scroller()
  // }, [isVisible, scroller, ref])
  return (
    <div
      className="hidden sm:flex flex-col items-stretch px-10 sm:px-36 first-letter:bg-dark max-w-7xl min-h-screen"
      ref={ref}
    >
      <SectionTitle>
        <div className="font-bold">Roadmap</div>
      </SectionTitle>
      {/* <Grid columns={4} gap={10} mt={60}> */}
      <div className="grid grid-cols-4 gap-2.5 mt-15">
        <div className="font-title font-bold text-4xl">2021</div>
        <div className="font-title font-bold text-4xl">2022</div>
        <ProgressBar />
        <div>
          <Quarter>Q4</Quarter>
          <RoadmapList>
            <>$SOLACE token launch </>
            <>Protocol Owned Underwriting Pool </>
            <>Protocol coverage products</>
          </RoadmapList>
        </div>
        <div>
          <Quarter>Q1</Quarter>
          <RoadmapList>
            <>DAO-2-DAO coverage launch</>
            <>Solace Wallet Coverage launch</>
            <>Cross-chain Deployments (Aurora, Polygon)</>
            <>Staking V2 w/locking and voting rights</>
          </RoadmapList>
        </div>
        <div>
          <Quarter>Q2</Quarter>
          <RoadmapList>
            <>Cross-chain Deployments (BNB, FTM, AVAX, etc.)</>
            <>Decentralization of Claims System</>
            <>Cross-chain balancing of staking/locking APY%</>
            <>Dynamic inflation-control model</>
          </RoadmapList>
        </div>
        <div>
          <Quarter>Q3</Quarter>
          <RoadmapList>
            <>Non-EVM deployments</>
            <>Asset Protection Tools beyond DeFi</>
            <>Transition to Community-run DAO</>
            <>Solace Market - open cover product platform</>
          </RoadmapList>
        </div>
      </div>
    </div>
  )
}
