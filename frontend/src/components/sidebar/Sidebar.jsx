import SearchInput from "./Searchinput.jsx"
import Conversations from "./Conversations.jsx"
import Logoutbtn from "./Logoutbtn.jsx"
function Sidebar() {
  return (
    <div className="md:min-w-[225px] border-r border-slate-600 p-4 flex flex-col">
      <SearchInput/>
      <div className=" divider-primary px-5"></div>
      <Conversations/>
      <Logoutbtn/>
    </div>
  )
}

export default Sidebar
