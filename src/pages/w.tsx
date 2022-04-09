// THIS IS A DOCUMENT TO TEST MAX WIDTH BEHAVIOR FOR PARENT ELEMENT

export default function W() {
  return (
    <div className="w-full bg-select h-[4000px] relative">
      <div className="absolute top-5 right-5 w-5 h-5 bg-warmGradientA rounded-full"></div>
    </div>
  )
}
