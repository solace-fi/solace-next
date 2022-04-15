import TechyGradientText from '@/components/atoms/Typography/TechyGradientText'
import classNames from 'classnames'

export default function AboutListItem({
  decorator,
  text,
  bulletType,
  textType,
}: {
  decorator: string
  text: string | JSX.Element
  bulletType: 'white' | 'techy'
  textType: 'dark' | 'white' | 'techy'
}) {
  return (
    <li className="text-2xl flex items-center gap-4">
      <div
        className={classNames(
          { 'bg-white': bulletType === 'white' },
          {
            'bg-gradient-to-br from-techyGradientA to-techyGradientB text-white':
              bulletType === 'techy',
          },
          'rounded-full h-12 w-12 flex items-center justify-center text-2xl shrink-0 font-semibold'
        )}
      >
        {bulletType === 'techy' ? decorator : <TechyGradientText>{decorator}</TechyGradientText>}
      </div>
      {textType === 'techy' ? (
        <TechyGradientText>{text}</TechyGradientText>
      ) : (
        <div
          className={classNames(
            { 'text-white': textType === 'white' },
            { 'text-dark': textType === 'dark' }
          )}
        >
          {text}
        </div>
      )}
    </li>
  )
}
