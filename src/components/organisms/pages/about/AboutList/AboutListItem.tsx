import TechyGradientText from '@/components/atoms/Typography/TechyGradientText'
import classNames from 'classnames'

export default function AboutListItem({
  decorator,
  text,
  bulletType,
  textType,
  textSize,
}: {
  decorator: string
  text: string | JSX.Element
  bulletType: 'white' | 'techy'
  textType: 'dark' | 'white' | 'techy'
  textSize: 'small' | 'large'
}) {
  return (
    <li
      className={`${
        {
          small: 'text-lg',
          large: 'text-2xl',
        }[textSize]
      } flex items-center gap-4`}
    >
      <div
        className={classNames(
          { 'bg-white': bulletType === 'white' },
          {
            'bg-gradient-to-br from-techyGradientA to-techyGradientB text-white':
              bulletType === 'techy',
          },
          `rounded-full h-12 w-12 flex items-center justify-center text-2xl shrink-0 font-semibold self-start`
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
