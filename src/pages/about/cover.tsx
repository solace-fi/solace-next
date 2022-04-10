import TechyGradientText from '@/components/atoms/Typography/TechyGradientText'
import AboutLayout from '@/components/organisms/pages/about/AboutLayout'
import AboutList from '@/components/organisms/pages/about/AboutList'
import DescriptionCard from '@/components/organisms/pages/about/DescriptionCard'
import ArrowRightMd from '@/resources/svg/tsx/ArrowRightSm'
import HowToVideoCircle from '@/resources/svg/tsx/HowToVideoCircle'
import classNames from 'classnames'
import Link from 'next/link'

export default function Cover() {
  const mainTitle = 'Wallet Coverage'
  const subtitle = 'Coverage that providers a better experience at every stage.'
  const cards = [
    {
      title: 'Instant quote',
      text: 'Just one click to see all your positions with associated risks and to get a quote',
    },
    {
      title: 'Cost efficient',
      text: 'Get your whole portfolio covered by setting a coverage limit to your highest position',
    },
    {
      title: 'Dynamic pricing',
      text: 'You are charged only for actual positions within a set coverage limit',
    },
    {
      title: 'Cross-chain',
      text: 'Buy a policy on one chain and get covered on multiple (currently servicing Ethereum and Polygon)',
    },
    {
      title: 'Hassle free claims',
      text: 'No need to file a claim',
    },
    {
      title: 'Fast payouts',
      text: 'You receive a payout within one week',
    },
  ].map(({ title, text }, i) => <DescriptionCard title={title} text={text} key={i} />)
  return (
    <AboutLayout title={mainTitle} subtitle={subtitle} cards={cards}>
      <article>
        <h2 className="text-[80px] leading-[80px] font-title font-bold mt-17.5 mb-2">
          <TechyGradientText>How it works</TechyGradientText>{' '}
        </h2>
        <p className="text-2xl">It&apos;s just a few clicks to protect your funds:</p>
        {/* test here: https://play.tailwindcss.com/
            <div class="grid grid-flow-col w-max">
              <div class="bg-red-200 w-16 h-16"></div>
              <div class="bg-red-500 w-full h-16 place-self-center col-span-2"></div>
              <div class="bg-red-800 w-24 h-16"></div>
              <div class="bg-black w-0.5 mx-4 h-full row-span-2"></div>
              <div class="bg-gray-500 w-40 h-full row-span-2"></div>
            </div>
            */}
        <div className="grid grid-flow-col max-w-max mt-17.5 items-center mb-20">
          <AboutList
            items={['Connect your wallet', 'Set a coverage limit', 'Top up your balance']}
          />
          {/* button */}
          <div
            className={classNames(
              'mt-[71px]', // outer placement
              'place-self-center col-span-2', // grid placement
              'px-20 py-6 justify-center flex items-center gap-3', // inner layout
              'bg-gradient-to-br from-techyGradientA to-techyGradientB rounded-full max-w-md w-full', // general appearance
              'font-semibold text-light', // text appearance
              'cursor-pointer hover:brightness-110 hover:gap-5 duration-300 ease-out' // interaction
            )}
          >
            <p>Connect Wallet</p> <ArrowRightMd className="fill-light" />
          </div>
          <div className="ml-[60px] cursor-pointer hover:brightness-95 hover:saturate-200 duration-300 ease-in">
            <HowToVideoCircle />
          </div>
          <div className="bg-blue rounded-full w-0.5 h-full row-span-2 mx-12"></div>
          <div className="w-[275px] h-full row-span-2 flex-col flex justify-between">
            <h3 className="font-bold">
              Wallet coverage protects your funds across 180+ protocols for the following exploit
              types:
            </h3>
            <ul className="flex flex-col gap-4">
              <li>Minting vulnerability</li>
              <li>Flash loan attack</li>
              <li>Trojan fake token</li>
              <li>Proxy manipulation</li>
              <li>Math error</li>
              <li>Re-entry attack</li>
            </ul>
            <Link href="https://docs.solace.fi/docs/overview/faq/cover-products" passHref>
              <a className="flex items-center gap-2 hover:gap-4 duration-300 uppercase text-blue text-sm font-semibold">
                <div>Learn more</div> <ArrowRightMd className="fill-blue w-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </AboutLayout>
  )
}
