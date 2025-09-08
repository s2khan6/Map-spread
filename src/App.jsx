import Bar from "./Bar"
import Mainm from "./Mainm"

function App() {

  return (
    <>
        <div className="flex h-screen w-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="w-[320px] min-w-[300px] bg-white shadow-md">
        <Bar />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <Mainm />
      </div>
    </div>
    </>
  )
}

export default App
