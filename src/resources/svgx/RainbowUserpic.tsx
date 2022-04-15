export default function RainbowUserpic({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_3543_33336"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="36"
        height="36"
      >
        <circle cx="18" cy="18" r="16" stroke="white" strokeWidth="4" />
      </mask>
      <g mask="url(#mask0_3543_33336)">
        <rect x="-15.998" y="-20.5371" width="67.9962" height="77.074" fill="#FAFAFA" />
        <path
          d="M37.7424 42.7644C31.9668 82.4508 11.0673 107.164 -8.93803 97.9624C-28.9434 88.7611 -40.4788 49.1297 -34.7033 9.44332C-28.9277 -30.2431 -8.02814 -54.9561 11.9772 -45.7547C31.9825 -36.5534 43.518 3.07799 37.7424 42.7644Z"
          fill="url(#paint0_radial_3543_33336)"
        />
        <path
          d="M58.8201 25.3213C55.8442 54.9764 44.8679 76.3005 34.3037 72.9501C23.7396 69.5996 17.5881 42.8433 20.564 13.1882C23.5399 -16.4669 34.5162 -37.7911 45.0804 -34.4406C55.6445 -31.0901 61.796 -4.33384 58.8201 25.3213Z"
          fill="url(#paint1_radial_3543_33336)"
        />
        <path
          d="M28.7211 24.2324C31.4904 36.7183 26.8832 51.6434 18.4307 57.5685C9.97813 63.4936 0.881021 58.1749 -1.88828 45.689C-4.65759 33.2031 -0.0504017 18.278 8.40215 12.3529C16.8547 6.42782 25.9518 11.7464 28.7211 24.2324Z"
          fill="url(#paint2_radial_3543_33336)"
        />
        <path
          d="M16.5374 20.4725C4.36338 18.9907 -5.14112 8.32468 -4.69147 -3.35065C-4.24182 -15.026 5.99171 -23.2894 18.1658 -21.8076C30.3398 -20.3258 39.8443 -9.65982 39.3946 2.0155C38.945 13.6908 28.7115 21.9543 16.5374 20.4725Z"
          fill="url(#paint3_radial_3543_33336)"
        />
      </g>
      <rect x="6" y="6" width="24" height="24" rx="12" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_3543_33336" transform="scale(0.0078125)" />
        </pattern>
        <radialGradient
          id="paint0_radial_3543_33336"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(1.51958 26.1038) rotate(98.2801) scale(72.6155 38.2446)"
        >
          <stop stopColor="#F04D42" />
          <stop offset="1" stopColor="#F04D42" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_3543_33336"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(39.6921 19.2547) rotate(95.7304) scale(53.965 19.6382)"
        >
          <stop stopColor="#5F5DF9" />
          <stop offset="1" stopColor="#5F5DF9" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_3543_33336"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(13.4164 34.9607) rotate(77.4946) scale(23.1572 17.2646)"
        >
          <stop stopColor="#F3D37E" />
          <stop offset="1" stopColor="#F3D37E" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_3543_33336"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.3516 -0.667573) rotate(-173.06) scale(22.2057 21.0835)"
        >
          <stop stopColor="#D478D8" />
          <stop offset="1" stopColor="#D478D8" stopOpacity="0" />
        </radialGradient>
        <image
          id="image0_3543_33336"
          width="128"
          height="128"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADfklEQVR4Ae3dwXXbQAxFUbXg9tKBm0lt2WRll5G9cqYFPZ4DwbwLLWGAM/8/YCiKfvz++/Usn3/ff57lU3Kf2JL7itjp+mv+R/0DdRGn82+vv64fASwnGAHEDUQAM0CaI6oDpwWoBUSCEMDyBZx24HR+BFgu4EogAiAAN4IKhqsDS+4TW/MjAAIgQHFhdWDJjQC+C9ACqoNqPAIs76EE4FbwvW8FVweIb89DTK/fY7oA+WcFRABxhtkuYAIggFkEbXfQ9voRAAEQYLuLS/0IgAAIUBy0PRYBEAABtru41I8ACIAAxUHbYxEAARBgu4tL/QhwdwJMP9JU1Cv2BzwWbhNbC64GHv9dAAEQQHom7+4CQoCbD3EEQADpxyFmgOUCQoDlG1hnGAIgAC2gumhzPAIgAAJsdnCtHQEQAAGqizbHIwACIMBmB9faMwFqAdPxdQFq/PT11/zrnwiqG1jj6wZMxxPA8CtyCCAOcdXBNX56A2t+BECA9khSVWCNrw6u8bX+6XgEQAAEKBSYdnDNjwAIgAAIEI9iFUMlvmzeFbGl9neI1QK0AC2gkOAdXFxqQAAEQAAEMAS+/FBFwe87xOZfBv36/HhOfqYXcfLaT+5CrxNLAJF+BIAAowREgOjg2kIQAAEQYNIF1cE1fvLaT24tQAtIInAKiAJCADOAGWDSBbWH1/jJazcDfH6Mv2KOALQALWDSBRXhNX7y2rUALSAdAX0ZFI+Ahx4IYAYYFUG+E1h7YI2vF1Dz1/jt9Y8/E7h9AbfXTwBxDiCAmy8gARBAOorVGaTGawE3FzABEMDsD0O299Dt9SMAAiBAGaQQ4OYOIgACcAy8M0IRAAEQAAG+XhZBWbsrYh0Db06wLIDpHljz1/jqwun8BDD8jiACGEbw9AZM50cABGi3gqcVXPPXeDPAcgcRwHAPnnYQARDAyzdxjnimBVzzGwKXtzACiBuoBWgBWkDByHYHba+/7N2JNQPEFlI3YFqABEAA7gQWFyLAcgeVzT+x6wVQ33AxvQC1/ho/LaBa/6P+AQJ4/XGwKwhS948A4ituEGD4RlJ1QI0nAAIYvZNYBawFaAHtv34ZAg2B6Sxce2hFYI2v9VcD1fq1AC1ACyguQgCnAKeA0seqg4p7r4it9Ze1O7H1GswAZgAzQHERApgBzAClj1UHFfdeEVvrL2t3xQzwH5XwiE+scDAuAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  )
}
