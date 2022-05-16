// import VisibilitySensor from 'react-visibility-sensor'
import React, { RefObject, useEffect } from 'react'
import { HomepageSectionsType } from './utils/useHomepageSections'

function SnapScroll({ children }: { children: React.ReactNode[] }): JSX.Element {
  return (
    <div className={/*"h-screen snap-y snap-mandatory scroll-smooth snapscroll" */ ''}>
      <style jsx>{`
        //.snapscroll {
        //  scrollbar-width: none;
        //}
        //.snapscroll > * {
        //  scroll-snap-align: start;
        //  height: calc(100vh);
        //}
        //.snapscroll::-webkit-scrollbar {
        //  width: 0; /* Remove scrollbar space */
        //  background: transparent; /* Optional: just make scrollbar invisible */
        //}
      `}</style>
      {children}
    </div>
  )
}

export default function DesktopScrollableArea({
  visibleSection,
  setVisibleSection,
  HomepageSections,
}: {
  visibleSection: number
  setVisibleSection: (section: number) => void
  HomepageSections: HomepageSectionsType
}): JSX.Element {
  // const scrollElementIntoView = (ref: React.RefObject<HTMLDivElement>) => {
  //   console.log('scrollElementIntoView > ref.current =', ref.current)
  //   if (ref.current !== null) {
  //     ref.current.scrollIntoView({
  //       behavior: 'smooth',
  //       block: 'start',
  //     })
  //   }
  // }
  // const getScrollerForThisRef =
  //   (ref: RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void)) => () => {
  //     console.log('getScrollerForThisRef > ref =', ref)
  //     scrollElementIntoView(ref as RefObject<HTMLDivElement>)
  //   }
  // detect changes in visibleSection and scroll to the current one
  // useEffect(() => {
  //   setVisibleSection(visibleSection)
  // }, [visibleSection, setVisibleSection])

  // const useScrollingRef = (
  //   // ref: React.RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void),
  //   sectionIndex: number
  // ) => {
  //   const isVisible = visibleSection === sectionIndex
  //   const ref = HomepageSections[sectionIndex].ref
  //   useEffect(() => {
  //     const scroller = ref ? getScrollerForThisRef(ref) : () => console.log('no ref')
  //     if (isVisible) scroller()
  //   }, [isVisible, ref])
  //   return ref
  // }

  // curry useScrollingRef with sectionIndex and return a function without args
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const curriedUseScrollingRef = (sectionIndex: number) => () => useScrollingRef(sectionIndex)

  return (
    <>
      {HomepageSections.map((Section, i) => (
        <Section.Section useScrollingRef={() => Section.ref} key={Section.key} />
      ))}
    </>
    // <SnapScroll>
    // <Section.Section
    // sectionRef={Section.ref}
    // getScrollerForThisRef={getScrollerForThisRef}
    // isVisible={visibleSection === index}
    // useScrollingRef={curriedUseScrollingRef(index)}
    // />
    //   {/* {HomepageSections.map((Section, index) => (
    //     <VisibilitySensor key={'visibility' + Section.key}>
    //       {({ isVisible }) => {
    //         if (isVisible) {
    //           setVisibleSection(index)
    //         }
    //         return (
    //         )
    //       }}
    //     </VisibilitySensor>
    //   ))} */}
    // // </SnapScroll>
  )
}
