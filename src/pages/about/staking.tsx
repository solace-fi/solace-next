import AboutLayout from '@/components/organisms/pages/about/AboutLayout'
import DescriptionCard from '@/components/organisms/pages/about/DescriptionCard'

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
  return AboutLayout(mainTitle, subtitle, cards, <></>)
}
