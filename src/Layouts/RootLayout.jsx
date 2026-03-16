import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Scroll from "../Components/Scroll"

function Layout() {
  const location = useLocation();
  const isUserPage = location.pathname.startsWith('/user');
  const isContactPage = location.pathname === '/Contact';

  return (
    <div>
      <Scroll />  
      <Navbar />
      <main className="pt-24 min-h-screen">
        <Outlet />
      </main>
      {!isUserPage && !isContactPage && <Footer />}
    </div>
  )
}

export default Layout