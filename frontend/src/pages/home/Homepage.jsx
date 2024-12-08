import MessageContainer from "../../components/messages/MessageContainer.jsx"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
const Homepage = () => {
  return (
    <div  className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar/>
      
      <MessageContainer/>

    </div>
  )
}

export default Homepage
