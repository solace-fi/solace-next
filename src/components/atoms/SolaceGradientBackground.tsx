import classNames from 'classnames'
export default function SolaceGradientBackground({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={classNames('solace-gradient', className, 'relative')}>
      <style jsx>{`
        .solace-gradient {
          background: radial-gradient(
              ellipse 120% 150% at 60% 0,
              rgba(212, 120, 216, 1) 10%,
              rgba(212, 120, 216, 0) 50%
            ),
            radial-gradient(
              ellipse 50% 150% at 40% 150%,
              rgba(243, 211, 126, 1) 20%,
              rgba(243, 211, 126, 0) 80%
            ),
            radial-gradient(
              ellipse 50% 200% at 100% 50%,
              rgba(95, 93, 249, 1) 10%,
              rgba(95, 93, 249, 0) 90%
            ),
            radial-gradient(
              ellipse 100% 200% at 0 100%,
              rgba(240, 77, 66, 1) 10%,
              rgba(240, 77, 66, 0) 100%
            );
        }
        @keyframes movingGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .solace-gradient {
          background-attachment: fixed;
          background-size: cover;
          animation: movingGradient 30s ease infinite;
        }
        /* .solace-gradient::before {
          clear: both;
          content: '';
          display: table;
        } */
      `}</style>
      {children}
    </div>
  )
}
