/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { Ref } from 'react'
import { peeps } from '@/resources/collaborators/assets/lists/addPfpUtility'
import Image from 'next/image'
import { Collective, Person } from '@/resources/collaborators/types'
import { SectionTitle } from '../../molecules/SectionTitle'
import collectiveInvestors from '@/resources/collaborators/assets/lists/collectiveInvestors'
import coreContributors from '@/resources/collaborators/assets/lists/coreContributors'

/*
 * @/resources/svg/audits/quantstamp.png
 * @/resources/svg/audits/hacken.png
 * @/resources/svg/grants/aave-logo-white-2.svg
 * @/resources/svg/grants/near-logo-white-2.svg
 * @/resources/svg/grants/polygon-logo-white-2.svg
 */

import QuantstampLogo from '@/resources/svg/audits/quantstamp.png'
import HackenLogo from '@/resources/svg/audits/hacken.png'

import AaveLogo from '@/resources/svg/grants/aave-logo-white-2.svg'
import NearLogo from '@/resources/svg/grants/near-logo-white-2.svg'
import PolygonLogo from '@/resources/svg/grants/polygon-logo-white-2.svg'

const { pfpdAdvisors, pfpdIndividualInvestors } = peeps
const advisors = pfpdAdvisors
const individualInvestors = pfpdIndividualInvestors

// profilePic is div h&w=60px > div borderWidth=5px padding=5px borderRadius=100% > div borderRadius=100% overflow=hidden > img objectFit=cover
function ProfilePic({ src, alt }: { src: string; alt: string }): JSX.Element {
  return (
    <div className="w-15 h-15 grow-0 p-[5px] border-[5px] rounded-full border-solid border-white">
      <Image src={src} alt={alt} height={40} width={40} className="object-cover object-center" />
    </div>
  )
}

export function TeamMemberComponent({
  name,
  role,
  twitterUsername,
  profilePic,
}: {
  name: string
  role: string
  twitterUsername?: string
  profilePic?: string
}): JSX.Element {
  const twitterUrl = twitterUsername && `https://twitter.com/${twitterUsername}`
  const atUsername = twitterUsername && `@${twitterUsername}`
  return (
    // <Flex gap={10}>
    <div className="flex gap-2.5">
      {profilePic ? <ProfilePic src={profilePic} alt={name} /> : null}
      <div className="flex flex-col gap-[3px]">
        <div className="font-bold font-title leading-[1.2] text-xl">{name}</div>
        <div className="text-sm"></div>
        {role}
        {twitterUsername && (
          <div className="text-xs underline mt-[3px]">
            <a href={twitterUrl} target="_blank" rel="noreferrer">
              {atUsername}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

// This element exists for the simple reason that dynamically loading images requires to add a `.default`
// at the end, since it is not possible to dynamically load with the `import` syntax, and it is not possible
// to add `.default` to the require statement itself without causing a TypeScript error.
function HijackedImg({ src, alt }: { src: { default: string }; alt: string }): JSX.Element {
  return <Image src={src.default} alt={alt} width={221} className=" object-contain object-center" />
}

export function CollectiveComponent({ altName, fileName }: Collective): JSX.Element {
  // path = /resources/collaborators/assets/collectiveImages/${fileName}
  return (
    <div className="flex justify-start">
      <HijackedImg
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        src={require(`@/resources/collaborators/assets/collectiveImages/${fileName}`)}
        alt={altName}
      />
    </div>
  )
}

function ReactCollective({ collectiveList }: { collectiveList: Collective[] }) {
  return (
    <div className="flex flex-col justify-start sm:justify-between gap-7.5 sm:gap-0">
      {collectiveList.map((collective) => {
        return (
          <CollectiveComponent
            altName={collective.altName}
            fileName={collective.fileName}
            key={collective.altName}
          />
        )
      })}
    </div>
  )
}

export function ListOfPeople({
  peopleList, // array of { name, role, twitter }
  collectiveList,
  title, // string
  // direction, // 'row' or 'column'
  // columns, // number
  // mobileColumns,
  // desktopColumns,
  sectionRef,
  item,
}: {
  peopleList: Person[]
  // if there's a collective list, the first column will be the collective, and the optional second and third will be the people
  collectiveList?: Collective[]
  title: string
  logoList?: string[]
  // direction?: 'row' | 'column'
  // columns?: number
  // mobileColumns?: number
  // desktopColumns?: number
  sectionRef?: Ref<HTMLDivElement>
  item: 'investors' | 'advisors' | 'coreContributors'
}): JSX.Element {
  const reactTeam = peopleList.map(({ name, role, twitter, profilePic }) => (
    <TeamMemberComponent
      key={name}
      name={name}
      role={role}
      twitterUsername={twitter}
      profilePic={profilePic}
    />
  ))

  const tailwindGridColumns = {
    investors: 'sm:grid-cols-2',
    advisors: 'sm:grid-cols-2',
    coreContributors: 'sm:grid-cols-3',
  }[item]

  return (
    <div
      className="flex flex-col items-stretch px-10 sm:px-36 gap-15 sm:gap-16 justify-center min-h-screen"
      ref={sectionRef}
    >
      <SectionTitle>
        <div className="font-bold">{title}</div>
      </SectionTitle>
      <div className="flex flex-col sm:flex-row gap-7.5 sm:gap-[120px] mt-[10px]">
        {collectiveList && <ReactCollective collectiveList={collectiveList} />}
        <div className={`grid gap-x-[120px] gap-y-7.5 grid-cols-1 ${tailwindGridColumns}`}>
          {reactTeam}
        </div>
      </div>
    </div>
  )
}

export function GrantsAndAudits({
  useScrollingRef,
}: {
  useScrollingRef: () => React.MutableRefObject<HTMLDivElement | null>
}) {
  const ref = useScrollingRef()
  return (
    <div
      className="flex flex-col items-stretch px-10 sm:px-36 gap-15 sm:gap-16 justify-center min-h-screen"
      ref={ref}
    >
      <SectionTitle>
        <div className="font-bold">Grants & Audits</div>
      </SectionTitle>
      <div className="flex mt-[10px] flex-col md:flex-row items-start md:items-end gap-7.5 md:gap-[118px] text-xl md:text-4xl leading-7 md:leading-[46.8px] font-light">
        <div className="flex flex-col gap-12.5 max-w-[490px]">
          <div>
            We are proud and thankful for the{' '}
            <span className="font-semibold">trust and grants from</span>
          </div>
          <div className="flex justify-between">
            <div className="block h-[110px] shrink-0 bg-select flex-[0.2]">
              <Image src={PolygonLogo} alt="Polygon" height={110} layout={'responsive'} />
            </div>
            <div className="block h-[110px] shrink-0 bg-select flex-[0.2]">
              <Image src={AaveLogo} alt="Aave" height={110} layout={'responsive'} />
            </div>
            <div className="block h-[110px] shrink-0 bg-select flex-[0.2]">
              <Image src={NearLogo} alt="Near" height={110} layout={'responsive'} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12.5">
          <div>
            <span className="font-semibold">Audited</span> by
          </div>
          <div className="flex flex-col gap-[25.73px]">
            {/* 2 divs, each width 277.82 px and height 31.62 px */}
            <Image src={HackenLogo} alt="Hacken" width={279} className="" />
            <Image src={QuantstampLogo} alt="Polygon" width={279} className="" />
            {/* <div className="h-[31.62px] w-[277.82px] bg-blue"></div>
              <div className="h-[31.62px] w-[277.82px] bg-blue"></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Investors({
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
  //   if (isVisible) scroller()
  // }, [isVisible, scroller, ref])
  return (
    <ListOfPeople
      sectionRef={ref}
      collectiveList={collectiveInvestors}
      peopleList={individualInvestors}
      title="Investors"
      // mobileColumns={1}
      // direction="row"
      item={'investors'}
    />
  )
}

export function Advisors({
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
  // useEffect(() => {
  //   if (isVisible) console.log("advisors is visible! here's the ref: ", ref)
  //   if (isVisible) scroller()
  // }, [isVisible, scroller, ref])
  return (
    <ListOfPeople
      sectionRef={ref}
      peopleList={advisors}
      title="Advisors"
      // mobileColumns={1}
      // desktopColumns={2}
      item={'advisors'}
    />
  )
}

export function CoreContributors({
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
  //   if (isVisible) scroller()
  // }, [isVisible, scroller, ref])

  return (
    <ListOfPeople
      sectionRef={ref}
      peopleList={coreContributors}
      title="Core contributors"
      // mobileColumns={1}
      // desktopColumns={3}
      item={'coreContributors'}
    />
  )
}
