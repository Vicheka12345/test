
import { Outlet } from "react-router-dom"
function UserLayout() {
  return <div>
    <h3>user Page</h3>
    <Outlet />
  </div>
}

export default UserLayout