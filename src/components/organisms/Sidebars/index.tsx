import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'

export default function Sidebars() {
  return (
    <div className="bg-transparent md:bg-white">
      <SidebarLeft />
      <SidebarRight />
    </div>
  )
}
