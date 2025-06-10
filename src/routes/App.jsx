import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Navbar from "../components/Navbar"
import SidebarLeft from "../components/SidebarLeft.jsx"
import SidebarRight from "../components/SidebarRight"

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <SidebarLeft />
          <div className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* صفحه‌های دیگه اینجا اضافه میشن */}
            </Routes>
          </div>
          <SidebarRight />
        </div>
      </div>
    </BrowserRouter>
  )
} 