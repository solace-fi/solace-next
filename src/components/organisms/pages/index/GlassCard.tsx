import ArrowRightMd from '@/resources/svg/tsx/ArrowRight'
import Link from 'next/link'

export default function GlassCard({
  title,
  body,
  url,
  middleCard,
}: {
  title: string
  body: React.ReactNode
  url: string
  middleCard: boolean
}) {
  return (
    <Link href={url} key={'link-internal' + title} passHref={true}>
      <a
        className={
          'h-[216px] w-[327px] px-[32px] pt-[31px] pb-[28px] rounded-[30px] cursor-pointer floating-card group' +
          (middleCard ? 'mt-0 md:-mt-5' : '')
        }
        style={{
          backgroundImage: `url("/images/glass-card.svg")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          boxShadow: '0 5px 30px 0 rgb(0 0 0 / 0.03)',
        }}
      >
        <style jsx>{`
          .floating-card:hover {
            transform: translateY(-10px);
            transition-duration: 0.3s;
            transition-timing-function: ease-out;
          }
          .floating-card {
            transform: translateY(0);
            transition-duration: 300ms;
            transition-timing-function: ease-out;
          }
        `}</style>
        <div className="flex flex-col justify-between h-full">
          <article className="flex flex-col">
            <h2 className="text-[28px] leading-[28px] font-title font-bold mb-3">{title}</h2>
            <blockquote>{body}</blockquote>
          </article>
          <div className="w-full flex font-body justify-end font-bold">
            <a
              // href={url}
              className="flex items-center gap-2 group-hover:gap-[13px] group-hover:mr-[5px] ease-out duration-300 "
            >
              {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
              <div>LEARN MORE</div>{' '}
              {/* <Image src={ArrowRight} alt="Arrow pointing to the right" className="text-white" /> */}
              <ArrowRightMd className="fill-light" />
            </a>
          </div>
        </div>
      </a>
    </Link>
  )
}
