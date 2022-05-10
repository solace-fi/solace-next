import TechyGradientText from '@/components/atoms/Typography/TechyGradientText'
import AboutLayout from '@/components/organisms/pages/about/AboutLayout'
import DescriptionCard from '@/components/organisms/pages/about/DescriptionCard'
import classNames from 'classnames'
import BoxedAboutList from '@/components/organisms/pages/about/AboutList/BoxedAboutList'
import SecondSectionTitle from '@/components/organisms/pages/about/SecondSectionTitle'
import ConnectWalletButton from '@/components/organisms/pages/about/ConnectWalletButton'

export default function Tokenomics() {
  const mainTitle = '$SOLACE token'
  const subtitle =
    "Solace's tokenomics are designed to provide $SOLACE stakers higher yields and policyholders with better claims process."
  const cards = [
    {
      title: 'Trustworthy protection',
      text: 'Solace owns its underwriting pool, underwrites the coverage, and pays the claims. Policyholders can be sure that our underwriting capital always will be there for them.',
    },
    {
      title: 'No underwriting risk',
      text: 'Solace raises underwriting capital through bonds, where users exchange their capital for vesting $SOLACE tokens at a discount. This decouples the underwriting risk from stakers, so they don’t need to worry about their capital being liquidated after an exploit.',
    },
    {
      title: 'Token value',
      text: (
        <>
          $SOLACE facilitates two primary functions. First and foremost, it is a mean of payment for
          insurance. Although we do allow policyholders to use stablecoins, those ultimately get
          traded for $SOLACE.
          <br />
          <br />
          Second, $SOLACE can be staked or locked to receive a share of the revenue that the
          protocol generates and partake in the governance of Solace. Ultimately, the value
          generated for investors is derived from Solace’s cashflows, success as an underwriter, and
          the DAO’s balance sheet.
        </>
      ),
    },
    {
      title: 'Yield and governance',
      text: 'Holders are able to stake and lock $SOLACE to access rewards and governance rights , benefiting from the underwriting activity and token emissions.',
      linkText: 'Learn more about staking',
      linkUrl: '/about/staking',
    },
  ].map(({ title, text, linkText, linkUrl }, i) => (
    <DescriptionCard title={title} text={text} linkText={linkText} linkUrl={linkUrl} key={i} />
  ))
  return (
    <AboutLayout title={mainTitle} subtitle={subtitle} cards={cards}>
      {/* TOKENOIMICS BUTTON */}
      {/* <div className="mr-[200px]">
        <div
          className={classNames(
            'mt-10 mx-auto', // outer placement
            'px-20 py-6 justify-center flex items-center gap-3', // inner layout
            'bg-gradient-to-br from-techyGradientA to-techyGradientB rounded-full max-w-md w-full', // general appearance
            'font-semibold text-light', // text appearance
            'cursor-pointer hover:brightness-110 hover:gap-5 duration-300 ease-out hover:scale-105 hover:shadow-std' // interaction
          )}
        >
          <p>Connect Wallet</p>
          <ArrowRightSm className="fill-light" />
        </div>
      </div> */}
      <div className="flex w-full justify-center">
        <ConnectWalletButton
          className={classNames(
            'mt-10 md:mr-50', // outer placement
            'col-span-2' // grid placement
          )}
          pathname="bond"
        />
      </div>

      <article className="max-w-5xl pb-20">
        <SecondSectionTitle className="mt-25">
          How to <TechyGradientText>buy $SOLACE</TechyGradientText>{' '}
        </SecondSectionTitle>
        <section className="grid md:grid-cols-2 gap-7.5 mt-12.5">
          {/* techy bg box */}
          <div className="bg-gradient-to-br from-techyGradientA to-techyGradientB rounded-std shadow-std p-9">
            <h2 className="text-4xl font-title mb-9 mr-6 text-light">
              Purchase $SOLACE <strong className="font-bold">via bonds:</strong>
            </h2>
            <BoxedAboutList
              bulletType="white"
              identifier="bonds"
              textType="white"
              textSize={'small'}
              items={[
                'Connect your wallet',
                'Choose the token you would like to purchase a bond with, and click Bond.',
                'Input the amount of tokens you would like to provide.',
                'If you would like to have your bonded tokens staked, select “Auto-stake”.',
              ]}
            />
          </div>
          {/* white bg box */}
          <div className="bg-white rounded-std shadow-std p-9">
            <h3 className="text-4xl font-title mb-9 mr-6">
              <TechyGradientText>
                Purchase $SOLACE <strong className="font-bold">on the open market:</strong>
              </TechyGradientText>
            </h3>
            <BoxedAboutList
              bulletType="techy"
              identifier="market"
              textType="dark"
              textSize={'small'}
              items={[
                <>
                  Ethereum: <br />
                  <a
                    href="https://app.sushi.com/swap?inputCurrency=0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48&outputCurrency=0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <TechyGradientText className="font-bold underline-offset-1 decoration-1 cursor-pointer decoration-techyGradientB underline">
                      $SOLACE on Sushiswap
                    </TechyGradientText>
                  </a>
                  <br />
                  in a $SOLACE/USDC pool
                </>,
                <>
                  Polygon: <br />
                  <a
                    href="https://app.uniswap.org/#/swap?chain=polygon&inputCurrency=0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89&outputCurrency=0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <TechyGradientText className="font-bold underline-offset-1 decoration-1 cursor-pointer decoration-techyGradientB underline">
                      $SOLACE on Uniswap
                    </TechyGradientText>
                  </a>
                  <br />
                  in a $SOLACE/FRAX pool
                </>,
                <>
                  Aurora: <br />
                  <a
                    href="https://www.trisolaris.io/#/swap?inputCurrency=0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d&outputCurrency=0x501acE9c35E60f03A2af4d484f49F9B1EFde9f40"
                    target={'_blank'}
                    rel="noreferrer"
                  >
                    <TechyGradientText className="font-bold underline-offset-1 decoration-1 cursor-pointer decoration-techyGradientB underline">
                      $SOLACE on Trisolaris
                    </TechyGradientText>
                  </a>
                  <br />
                  in a $SOLACE/wNEAR pool
                </>,
              ]}
            />
          </div>
        </section>
        <section className="w-full justify-center items-center flex flex-col gap-10 mt-25">
          <h3 className="text-4xl font-title">Still have questions about buying $SOLACE?</h3>
          <div className="flex flex-col md:flex-row gap-9">
            {/* button to "Watch How-to Video" on youtube */}
            <a
              className={classNames(
                'mt-10 mx-auto', // outer placement
                'py-6 px- justify-center flex items-center', // inner layout
                'bg-gradient-to-br from-techyGradientA to-techyGradientB rounded-full w-80', // general appearance: ;
                'font-semibold text-light', // text appearance
                'cursor-pointer hover:brightness-110 duration-300 ease-out hover:shadow-std hover:scale-105' // interaction
              )}
              href="https://youtu.be/RUn4QFZilTU"
              target="_blank"
              rel="noreferrer"
            >
              Watch How-to Video
            </a>
            <a
              className={classNames(
                'mt-10 mx-auto', // outer placement
                'py-6 justify-center flex items-center', // inner layout
                'bg-gradient-to-br from-techyGradientA to-techyGradientB rounded-full w-80', // general appearance: ;
                'font-semibold text-light', // text appearance
                'cursor-pointer hover:brightness-110 duration-300 ease-out hover:shadow-std hover:scale-105' // interaction
              )}
              href="https://docs.solace.fi/docs/user-guides/buy-token"
              target={'_blank'}
              rel="noreferrer"
            >
              Learn more about buying $SOLACE
            </a>
          </div>
        </section>
      </article>
    </AboutLayout>
  )
}
