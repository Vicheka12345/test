import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Scroll from "../Components/Scroll"

function Layout() {
  return (
    <div>
      <Scroll />  
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout