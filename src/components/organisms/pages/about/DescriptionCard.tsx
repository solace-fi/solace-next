import TechyGradientText from '@/components/atoms/Typography/TechyGradientText'
import ArrowRightSm from '@/resources/svgx/ArrowRightSm'
import Link from 'next/link'

export default function DescriptionCard({
  title,
  text,
  linkText,
  linkUrl,
  type = 'internal',
}: {
  title: React.ReactNode
  text: React.ReactNode
  linkText?: React.ReactNode
  linkUrl?: string
  type?: 'internal' | 'external'
}) {
  const CardLink = (() => {
    if (linkText && linkUrl) {
      switch (type) {
        case 'internal':
          return (
            <Link href={linkUrl}>
              <a className="text-blue uppercase font-bold text-sm flex items-center gap-2 transition-all hover:gap-3 duration-300 hover:brightness-90 pretty-animated-underline w-max">
                <style jsx>{`
                  .pretty-animated-underline:after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    background-color: rgb(95 93 249);
                    bottom: -1px;
                    margin-left: 1px;
                    left: 0;
                    transition: width 0.3s ease-out;
                  }
                  .pretty-animated-underline:hover:after {
                    width: calc(100% - 4px);
                  }
                `}</style>
                {linkText}
                <ArrowRightSm className="fill-blue h-[12px] mb-px" />
                {/* <Image
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                  src={ArrowRight}
                  className="fill-blue"
                  alt="arrow to the right denoting a link"
                ></Image> */}
              </a>
            </Link>
          )
        case 'external':
          return (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue uppercase font-bold text-sm"
            >
              {linkText}
            </a>
          )
        default:
          return null
      }
    }
    return null
  })()
  return (
    <article className="rounded-std bg-white p-9 flex flex-col gap-4 shadow-std">
      <h3 className="text-2xl font-bold">
        <TechyGradientText>{title}</TechyGradientText>
      </h3>
      <p className="text-dark">{text}</p>
      {CardLink}
    </article>
  )
}
