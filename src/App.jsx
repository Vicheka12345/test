
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Home, Service, ErrorPage } from "./Page";
import RootLayout from "./Layouts/RootLayout";
import AboutLayout from "./Layouts/AboutLayout";
import UserLayout from "./Layouts/UserLayout";
import User, { Userloader } from "./Page/user/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutLayout />,
        children:[
          {
            index: true,
            element: <h4>Vision</h4>,
          },
           {
            path: "Mision",
            element: <h4>Mision</h4>,
          },
           {
            path: "Goal",
            element: <h4>Goal</h4>,
          },
        ]
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path : "user",
        element:<UserLayout />,
        children:[
          {
           index: true,
            element: <User />,
            loader: Userloader,
          },
        ]
      },
    ] 
  },
  
]);
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
