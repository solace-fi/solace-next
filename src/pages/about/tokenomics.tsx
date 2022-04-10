import AboutLayout from '@/components/organisms/pages/about/AboutLayout'
import DescriptionCard from '@/components/organisms/pages/about/DescriptionCard'

export default function Tokenomics() {
  const mainTitle = '$SOLACE token'
  const subtitle =
    "Solace's tokenomics architecture is designed to provide capital providers with higher yields and policyholders with a better protection."
  const cards = [
    {
      title: 'Trustworthy protection',
      text: 'Solace owns its underwriting pool, therefore, the protocol itself underwrites coverage, not the users. Policyholders can be sure that our underwriting capital always will be there for them.',
    },
    {
      title: 'Yield and governance',
      text: 'Holders are able to stake and lock $SOLACE to access governance rights and rewards, benefiting from the underwriting activity and token emissions.',
      linkText: 'Learn more about staking',
      linkUrl: '/about/staking',
    },
    {
      title: 'Token value',
      text: (
        <>
          $SOLACE is a market-driven token. It derives value from the protocol’s growth, success as
          an underwriter, and the DAO’s balance sheet. Payouts are unrelated to the token price.
          <br />
          <br />
          Solace drives the utility and establishes demand through staking and facilitating
          insurance. Accrued policy premiums are collected and used to buy back $SOLACE on the open
          market.
        </>
      ),
    },
    {
      title: 'No risk for capital providers',
      text: 'Our underwriting capital is raised by a bonding mechanism where users exchange their capital for vested $SOLACE tokens at a discount. This decouples the underwriting risk from capital providers, so they don’t need to worry about their capital being liquidated after an exploit.',
    },
  ].map(({ title, text, linkText, linkUrl }, i) => (
    <DescriptionCard title={title} text={text} linkText={linkText} linkUrl={linkUrl} key={i} />
  ))
  return AboutLayout(mainTitle, subtitle, cards, <></>)
}
