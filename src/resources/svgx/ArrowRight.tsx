import * as React from 'react'

const ArrowRightMd = ({ className, ...rest }: { className: string }) => (
  <svg
    width={25}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
    className={className}
  >
    <path
      d="M24.707 8.207a1 1 0 0 0 0-1.414L18.343.429a1 1 0 1 0-1.414 1.414L22.586 7.5l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM0 8.5h24v-2H0v2Z"
      // fill={color}
    />
  </svg>
)

export default ArrowRightMd
