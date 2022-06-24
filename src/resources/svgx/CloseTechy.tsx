export default function CloseTechy({
  className,
  onClick,
}: {
  className: string
  onClick?: () => void
}) {
  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M16.3205 16.3199C15.945 16.6955 15.3361 16.6955 14.9606 16.3199L0.680674 2.04006C0.305124 1.66451 0.305124 1.05562 0.680675 0.68007C1.05622 0.30452 1.66511 0.304519 2.04066 0.68007L16.3205 14.9599C16.6961 15.3355 16.6961 15.9444 16.3205 16.3199Z"
        fill="url(#paint0_linear_4741_31964)"
      />
      <path
        d="M0.6801 16.32C0.30455 15.9444 0.30455 15.3355 0.6801 14.96L14.96 0.680119C15.3355 0.304569 15.9444 0.304569 16.32 0.68012C16.6955 1.05567 16.6955 1.66456 16.32 2.04011L2.04009 16.32C1.66454 16.6955 1.05565 16.6955 0.6801 16.32Z"
        fill="url(#paint1_linear_4741_31964)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4741_31964"
          x1="0.398438"
          y1="0.398407"
          x2="13.3293"
          y2="18.8903"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D478D8" />
          <stop offset="1" stopColor="#5F5DF9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4741_31964"
          x1="0.398438"
          y1="0.398407"
          x2="13.3293"
          y2="18.8903"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D478D8" />
          <stop offset="1" stopColor="#5F5DF9" />
        </linearGradient>
      </defs>
    </svg>
  )
}
