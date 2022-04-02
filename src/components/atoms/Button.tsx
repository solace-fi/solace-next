function WarmGradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-b from-warmGradientA to-warmGradientB">
      {children}
    </span>
  )
}

function TechyGradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-b from-techyGradientA to-techyGradientB">
      {children}
    </span>
  )
}

/**
 * @description Button with default 56px height, full width, and a bg-light
 * background. An outlined button is a transparent button with border-light.
 * Normal button can have 2 types: warmgradient and techygradient. This makes the
 * text clip to a background gradient. Ideally, on hover, the gradient would move.
 * The outline button has `light` text.
 * @params {String} type - The type of button. Can be `warmgradient`, `techygradient`, or `outline`.
 * @params {String} className - Additional class names to add to the button.
 * @params {String} children - The text to display inside the button.
 * @params {String} href - The link to navigate to when the button is clicked.
 * @params {String} target - The target of the link.
 * @params {String} rel - The rel of the link.
 * @example <Button type="warmgradient" className="ml-2" href="https://solace.network" target="_blank" rel="noopener noreferrer">Learn More</Button>
 */
// prettier-ignore
export default function Button({ type, className, children, href, target, rel }: {
  type: "warmgradient" | "techygradient" | "outline";
  className?: string,
  children: React.ReactNode,
  href?: string,
  target?: string,
  rel?: string,
}) {
  return (
    <a href={href} target={target} rel={rel} className={`${className ?? ""} h-14 w-50 flex items-center justify-center rounded-full
      ${type === 'outline'
        ? 'text-light bg-transparent border border-light'
        : 'bg-light'}
    `}>
      {type === 'warmgradient' ? <WarmGradientText>{children}</WarmGradientText> : null}
      {type === 'techygradient' ? <TechyGradientText>{children}</TechyGradientText> : null}
      {type === 'outline' ? children : null}
    </a>
  );
}
