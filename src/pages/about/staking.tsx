import TechyGradientText from '@/components/atoms/Typography/TechyGradientText'
import AboutLayout from '@/components/organisms/pages/about/AboutLayout'
import AboutList from '@/components/organisms/pages/about/AboutList'
import DescriptionCard from '@/components/organisms/pages/about/DescriptionCard'
import ArrowRightSm from '@/resources/svgx/ArrowRightSm'
import Link from 'next/link'
import classNames from 'classnames'
import Image from 'next/image'
import SecondSectionTitle from '@/components/organisms/pages/about/SecondSectionTitle'
import SecondSectionSubtitle from '@/components/organisms/pages/about/SecondSectionSubtitle'
import ConnectWalletButton from '@/components/organisms/pages/about/ConnectWalletButton'
import HeadTitle from '@/components/atoms/HeadTitle'

export default function Staking() {
  const mainTitle = 'Staking'
  const subtitle = 'Earn yield from underwriting activity and token distribution'
  const cards = [
    {
      title: 'No underwriting risk',
      text: 'Earn revenue from staking and never worry about the underwriting risk. It falls onto the protocol-owned pool.',
    },
    {
      title: 'Participate in Shaping Solace',
      text: 'Each staked $SOLACE gives you one vote in the DAO, with a maximum 4x multiplier through token locks.',
    },
    {
      title: 'Locking bonuses',
      text: 'Earn more $SOLACE (up to 2.5x) and voting rights (up to 4x) through locking your stake into a safe.',
    },
    {
      title: 'Multiple revenue streams.',
      text: 'Staked $SOLACE provides you with exposure to policy sales, underwriting pool investments, and $SOLACE emissions.',
    },
  ].map(({ title, text }, i) => <DescriptionCard title={title} text={text} key={i} />)
  return (
    <AboutLayout title={mainTitle} subtitle={subtitle} cards={cards}>
      <HeadTitle>Staking</HeadTitle>
      {/* button */}
      <div className="flex w-full justify-center">
        <ConnectWalletButton
          className={classNames(
            'mt-10 md:mr-50', // outer placement
            'col-span-2' // grid placement
          )}
          pathname="stake"
        />
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
        <div className="grid md:grid-flow-col mt-15 mt mb-20 max-w-5xl">
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
          <div className="row-span-3 col-span-2 mt-15 md:mt-0 md:ml-[65px] cursor-pointer ease-in gap-8 flex flex-col justify-center shrink-0 grow-0">
            <a target={'_blank'} rel="noreferrer" href="https://youtu.be/RUn4QFZilTU">
              <Image
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={require('@/resources/png/staking-tutorial-preview.png')}
                alt="preview"
                className="hover:brightness-95 duration-300 grow-0 shrink-0"
              />
            </a>
            <Link href="https://docs.solace.fi/docs/user-guides/stake" passHref>
              <a className="flex w-full justify-center">
                <div className="flex items-center duration-300 uppercase text-blue text-sm font-bold group">
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
