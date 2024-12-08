import SearchInput from "./SearchInput"
import Conversations from "./Conversations.jsx"
import Logoutbtn from "./Logoutbtn.jsx"
function Sidebar() {
  return (
    <div className="border-r border-slate-600 p-4 flex flex-col">
      <SearchInput/>
      <div className="divider px-3"></div>
      <Conversations/>
      <Logoutbtn/>
    </div>
  )
}

export default Sidebar
