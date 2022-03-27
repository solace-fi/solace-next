/*
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.4;
    color: ${({ theme }) => `${theme.typography.contrastText}`};
    background: ${({ theme }) => theme.body.bg_color};
    ${(props) =>
      props.location.pathname == '/' &&
      `background: radial-gradient(ellipse 120% 150% at 60% 0,
      rgba(212,120,216,1) 10%,
      rgba(212,120,216,0) 50%),
  radial-gradient(ellipse 50% 150% at 40% 150%,
      rgba(243,211,126,1) 20%,
      rgba(243,211,126,0) 80%),
  radial-gradient(ellipse 50% 200% at 100% 50%,
      rgba(95,93,249,1) 10%,
      rgba(95,93,249,0) 90%),
  radial-gradient(ellipse 100% 200% at 0 100%,
      rgba(240,77,66,1) 10%,
      rgba(240,77,66,0) 100%);`}
    background-attachment: fixed;
    background-size: cover;
    animation: ${movingGradient} 30s ease infinite;
    ${Text3Css}*/

export default function SolaceGradientBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-color">
      <style jsx>{`
        .bg-color {
          background: radial-gradient(
              ellipse 120% 150% at 60% 0,
              rgba(212, 120, 216, 1) 10%,
              rgba(212, 120, 216, 0) 50%
            ),
            radial-gradient(ellipse 50% 150% at 40% 150%, rgba(243, 211, 126, 1) 20%, rgba(243, 211, 126, 0) 80%),
            radial-gradient(ellipse 50% 200% at 100% 50%, rgba(95, 93, 249, 1) 10%, rgba(95, 93, 249, 0) 90%),
            radial-gradient(ellipse 100% 200% at 0 100%, rgba(240, 77, 66, 1) 10%, rgba(240, 77, 66, 0) 100%);
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
        .bg-color {
          background-attachment: fixed;
          background-size: cover;
          animation: movingGradient 30s ease infinite;
        }
      `}</style>
      {children}
    </div>
  )
}
