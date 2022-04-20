/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import Image from 'next/image'
/*
 * @/resources/svg/audits/quantstamp.png
 * @/resources/svg/audits/hacken.png
 * @/resources/svg/grants/aave-logo-white-2.svg
 * @/resources/svg/grants/near-logo-white-2.svg
 * @/resources/svg/grants/polygon-logo-white-2.svg
 */

import { SectionTitle } from '../molecules/SectionTitle'
// import OwnImage from '@/components/atoms/OwnImage'
import AaveLogo from '@/resources/svgx/grants/AaveLogo'
import PolygonLogo from '@/resources/svgx/grants/PolygonLogo'
import NearLogo from '@/resources/svgx/grants/NearLogo'
import HackenLogo from '@/resources/svgx/audits/HackenLogo'
import QuantstampLogo from '@/resources/svgx/audits/QuantstampLogo'
import Link from 'next/link'

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
      id="grants-and-audits"
    >
      <SectionTitle>
        <div className="font-bold">Grants & Audits</div>
      </SectionTitle>
      <div className="flex mt-[10px] flex-col md:flex-row items-start md:items-end gap-10 md:gap-[118px] text-xl md:text-4xl leading-7 md:leading-[46.8px] font-light">
        <div className="flex flex-col gap-12.5 max-w-[490px]">
          <div>
            We are proud and thankful for the{' '}
            <span className="font-semibold">trust and grants from</span>
          </div>
          <div className="flex justify-between items-start max-w-[286px] md:max-w-full">
            {/* <div className="block h-[110px] shrink-0 bg-select flex-[0.2]">
              <OwnImage src={PolygonLogo} alt="Polygon" height="110px" width="40px" />
            </div>
            <div className="block h-[110px] shrink-0 bg-select flex-[0.2]">
              <OwnImage src={AaveLogo} alt="Aave" height="110px" width="40px" />
            </div> */}
            <PolygonLogo className="h-[72px] md:h-[110px]" />
            <AaveLogo className="h-[72px] md:h-[110px]" />
            <NearLogo className="h-[72px] md:h-[110px]" />
          </div>
        </div>
        <div className="flex flex-col gap-12.5">
          <div>
            <span className="font-semibold">Audited</span> by
          </div>
          <div className="flex flex-col gap-[25.73px]">
            {/* 2 divs, each width 277.82 px and height 31.62 px */}
            <a href="https://hacken.io/audits/#solace" target="_blank" rel="noopener noreferrer">
              <HackenLogo className="w-[277.82px]" />
            </a>
            <Link href="/files/Solace-Quantstamp-Report.pdf" passHref>
              <a>
                <QuantstampLogo className="w-[277.82px]" />
              </a>
            </Link>
            {/* <OwnImage src={HackenLogo} alt="Hacken" width="279px" className="" />
            <OwnImage src={QuantstampLogo} alt="Polygon" width="279px" className="" /> */}
            {/* <div className="h-[31.62px] w-[277.82px] bg-blue"></div>
              <div className="h-[31.62px] w-[277.82px] bg-blue"></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
