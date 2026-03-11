
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { OurStory,Manu, ErrorPage } from "./Page";
import RootLayout from "./Layouts/RootLayout";
import AboutLayout from "./Layouts/AboutLayout";
import UserLayout from "./Layouts/UserLayout";
import User from "./Page/user/User";
import Bakery from "./Page/Bakery";
import Blog from "./Page/blog";
import UserDetail from "./Page/user/UserDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children:[
      { 
        index: true,
        element: <OurStory />,
      },
      {
        path: "Menu",
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
        path: "Bakery",
        element: <Bakery />,
      },
      {
        path: "Blog",
        element: <Blog />,
      },
      {
        path : "user",
        element:<UserLayout />,
        children:[
          {
           index: true,
            element: <User />
          },
          {
            path: ":id",
            element : <UserDetail />,
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
