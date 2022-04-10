import AboutLayout from '@/components/organisms/pages/about/AboutLayout'
import DescriptionCard from '@/components/organisms/pages/about/DescriptionCard'

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
  return AboutLayout(
    mainTitle,
    subtitle,
    cards,
    <>
      <div></div>
    </>
  )
}
