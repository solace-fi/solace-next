import TechyGradientText from '@/components/atoms/Typography/TechyGradientText'
import AboutLayout from '@/components/organisms/pages/about/AboutLayout'
import AboutList from '@/components/organisms/pages/about/AboutList'
import ConnectWalletButton from '@/components/organisms/pages/about/ConnectWalletButton'
import DescriptionCard from '@/components/organisms/pages/about/DescriptionCard'
import SecondSectionSubtitle from '@/components/organisms/pages/about/SecondSectionSubtitle'
import SecondSectionTitle from '@/components/organisms/pages/about/SecondSectionTitle'
import ArrowRightMd from '@/resources/svgx/ArrowRightSm'
import HowToVideoCircle from '@/resources/svgx/HowToVideoCircle'
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
        <SecondSectionTitle className="mt-17.5">
          <TechyGradientText>How it works</TechyGradientText>{' '}
        </SecondSectionTitle>
        <SecondSectionSubtitle>
          It&apos;s just a few clicks to protect your funds:
        </SecondSectionSubtitle>
        {/* test here: https://play.tailwindcss.com/
            <div class="grid grid-flow-col w-max">
              <div class="bg-red-200 w-16 h-16"></div>
              <div class="bg-red-500 w-full h-16 place-self-center col-span-2"></div>
              <div class="bg-red-800 w-24 h-16"></div>
              <div class="bg-black w-0.5 mx-4 h-full row-span-2"></div>
              <div class="bg-gray-500 w-40 h-full row-span-2"></div>
            </div>
            */}
        <div className="grid grid-flow-row md:grid-flow-col md:max-w-max mt-17.5 items-center mb-20">
          <AboutList
            items={['Connect your wallet', 'Set a coverage limit', 'Top up your balance']}
          />
          {/* button */}
          <ConnectWalletButton
            className={classNames(
              'mt-[71px]', // outer placement
              'place-self-center md:col-span-2' // grid placement
            )}
          />
          <div className="ml-auto mr-auto md:mr-0 md:ml-[60px] mt-15 md:-mt-5 cursor-pointer hover:scale-105 hover:saturate-200 duration-300 ease-in">
            <HowToVideoCircle />
          </div>
          <div className="bg-blue rounded-full h-0.5 md:w-0.5 w-full md:h-full md:row-span-2 mt-15 md:mt-0 mx-0 md:mx-12 "></div>
          <div className="w-[275px] h-full md:row-span-2 flex-col flex justify-between mt-6 md:mt-0 gap-8 mx-[41.5px] md:mx-0">
            <h3 className="font-bold mx-[13.5px] md:mx-0">
              Wallet coverage protects your funds across 180+ protocols for the following exploit
              types:
            </h3>
            <ul className="flex flex-col gap-4 mx-auto md:mx-0">
              <li>Minting vulnerability</li>
              <li>Flash loan attack</li>
              <li>Trojan fake token</li>
              <li>Proxy manipulation</li>
              <li>Math error</li>
              <li>Re-entry attack</li>
            </ul>
            <Link href="https://docs.solace.fi/docs/overview/faq/cover-products" passHref>
              <a className="flex items-center gap-2 hover:gap-4 duration-300 uppercase text-blue text-sm font-semibold ml-auto md:ml-0">
                <div>Learn more</div> <ArrowRightMd className="fill-blue w-5" />
              </a>
            </Link>
          </div>
        </div>
      </article>
    </AboutLayout>
  )
}
