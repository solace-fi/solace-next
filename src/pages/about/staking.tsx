import TechyGradientText from '@/components/atoms/Typography/TechyGradientText'
import AboutLayout from '@/components/organisms/pages/about/AboutLayout'
import AboutList from '@/components/organisms/pages/about/AboutList'
import DescriptionCard from '@/components/organisms/pages/about/DescriptionCard'
import ArrowRightSm from '@/resources/svg/tsx/ArrowRightSm'
import Link from 'next/link'
import classNames from 'classnames'
import Image from 'next/image'
import SecondSectionTitle from '@/components/organisms/pages/about/SecondSectionTitle'
import SecondSectionSubtitle from '@/components/organisms/pages/about/SecondSectionSubtitle'

export default function Staking() {
  const mainTitle = 'Staking'
  const subtitle =
    'Earn yield from underwriting activity and token distribution without fear of loss.'
  const cards = [
    {
      title: 'Instant quote',
      text: 'Just one click to see all your positions with associated risks and to get a quote',
    },
    {
      title: 'Get votes',
      text: 'Each staked $SOLACE gives you one vote in the DAO.',
    },
    {
      title: 'Long-term bonuses',
      text: 'Multiply your rewards (up to 2.5x) and voting rights (up to 4x) for a chosen period.',
    },
    {
      title: 'Multiple revenue streams.',
      text: 'Staked $SOLACE provides you with exposure to underwriting rewards, underwriting pool investments and $SOLACE emissions.',
    },
  ].map(({ title, text }, i) => <DescriptionCard title={title} text={text} key={i} />)
  return (
    <AboutLayout title={mainTitle} subtitle={subtitle} cards={cards}>
      {/* button */}
      <div className="mr-[200px]">
        <div
          className={classNames(
            'mt-10 mx-auto', // outer placement
            'col-span-2', // grid placement
            'px-20 py-6 justify-center flex items-center gap-3', // inner layout
            'bg-gradient-to-br from-techyGradientA to-techyGradientB rounded-full max-w-md w-full', // general appearance
            'font-semibold text-light', // text appearance
            'cursor-pointer hover:brightness-110 hover:gap-5 duration-300 ease-out hover:scale-105 hover:shadow-std' // interaction
          )}
        >
          <p>Connect Wallet</p>
          <ArrowRightSm className="fill-light" />
        </div>
      </div>

      <article>
        <SecondSectionTitle className="mt-25">
          How to <TechyGradientText>stake $SOLACE</TechyGradientText>{' '}
        </SecondSectionTitle>
        <SecondSectionSubtitle>
          It&apos;s just a few clicks to earn with solace:
        </SecondSectionSubtitle>
        {/* test here: https://play.tailwindcss.com/
            <div class="grid grid-flow-col gap-4 w-max">
              <div class="row-span-3 bg-red-200">01</div>
              <div class="col-span-2 bg-red-400">02</div>
              <div class="row-span-2 col-span-2 bg-red-600">03</div>
            </div>
            */}
        <div className="grid grid-flow-col mt-15 mt mb-20 max-w-5xl">
          <div className="row-span-3">
            <AboutList
              items={[
                'Connect your wallet',
                'Click Create New Safe',
                'Choose a Deposit Amount and a Lock Time',
                "Click 'Stake' and confirm the transaction",
              ]}
            />
          </div>
          <div className="row-span-3 col-span-2 ml-[65px] cursor-pointer ease-in gap-8 flex flex-col justify-center shrink-0 grow-0">
            <Image
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              src={require('@/resources/png/staking-tutorial-preview.png')}
              alt="preview"
              className="hover:brightness-95 duration-300 grow-0 shrink-0"
            />
            <Link href="https://docs.solace.fi/docs/overview/faq/cover-products" passHref>
              <a className="flex w-full justify-center">
                <div className="flex items-center duration-300 uppercase text-blue text-sm font-semibold group">
                  <div>READ more ABOUT STAKING $SOLACE</div>{' '}
                  <ArrowRightSm className="fill-blue w-5 mb-px ml-2 group-hover:ml-4 duration-300" />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </AboutLayout>
  )
}
