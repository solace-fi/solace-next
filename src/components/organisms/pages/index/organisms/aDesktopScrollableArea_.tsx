// import VisibilitySensor from 'react-visibility-sensor'
// // import styled from 'styled-components'
// import React, { RefObject, useEffect } from 'react'
// import { HomepageSections } from '../utils/useHomepageSections'

// // const StyledSnapScroll = styled.div`
// //   height: calc(100vh);
// //   scroll-snap-type: y mandatory;
// //   overflow-y: scroll;
// //   scroll-behavior: smooth;
// //   scrollbar-width: none;
// //   & > * {
// //     scroll-snap-align: start;
// //     height: calc(100vh - 100px);
// //   }
// //   &::-webkit-scrollbar {
// //     width: 0; /* Remove scrollbar space */
// //     background: transparent; /* Optional: just make scrollbar invisible */
// //   }
// // `

// function SnapScroll({ children }: { children: React.ReactNode[] }): JSX.Element {
//   return (
//     <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth snapscroll">
//       <style jsx>{`
//         .snapscroll {
//           scrollbar-width: none;
//         }
//         .snapscroll > * {
//           scroll-snap-align: start;
//           height: calc(100vh);
//         }
//         .snapscroll::-webkit-scrollbar {
//           width: 0; /* Remove scrollbar space */
//           background: transparent; /* Optional: just make scrollbar invisible */
//         }
//       `}</style>
//       {children}
//     </div>
//   )
// }

// export default function aDesktopScrollableAreaa({
//   visibleSection,
//   setVisibleSection,
//   HomepageSections,
// }: {
//   visibleSection: number
//   setVisibleSection: (section: number) => void
//   HomepageSections: HomepageSections
// }): JSX.Element {
//   const scrollElementIntoView = (ref: React.RefObject<HTMLDivElement>) => {
//     console.log('scrollElementIntoView > ref.current =', ref.current)
//     if (ref.current !== null) {
//       ref.current.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       })
//     }
//   }
//   const getScrollerForThisRef =
//     (ref: RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void)) => () => {
//       console.log('getScrollerForThisRef > ref =', ref)
//       scrollElementIntoView(ref as RefObject<HTMLDivElement>)
//     }
//   // detect changes in visibleSection and scroll to the current one
//   useEffect(() => {
//     setVisibleSection(visibleSection)
//   }, [visibleSection, setVisibleSection])

//   /*
//     Current problem I'm noticing: all of the scrollers are being triggered whenever we scroll. Scrolling with buttons does nothing.
//   */

//   return (
//     <SnapScroll>
//       {HomepageSections.map((Section, index) => (
//         <VisibilitySensor key={Section.key}>
//           {({ isVisible }) => {
//             if (isVisible) {
//               setVisibleSection(index)
//             }
//             return (
//               <React.Fragment key={Section.key}>
//                 <Section.Section
//                   sectionRef={Section.ref}
//                   getScrollerForThisRef={getScrollerForThisRef}
//                   isVisible={visibleSection === index}
//                 />
//               </React.Fragment>
//             )
//           }}
//         </VisibilitySensor>
//       ))}
//     </SnapScroll>
//   )
// }
export {}
