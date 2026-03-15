
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { OurStory, Manu, ErrorPage, Contact, Reservation, Bakery, Blog, User } from "./Page";
import RootLayout from "./Layouts/RootLayout";
import AboutLayout from "./Layouts/AboutLayout";
import UserLayout from "./Layouts/UserLayout";
import UserDetail from "./Page/user/UserDetail";
import Drink from "./Children/Drink";
import Breakfast from "./Children/Breakfast";



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
            element: <Manu />,
          },
           {
            path: "Drink",
            element: <Drink />
          },
           {
            path: "Breakfast",
            element: <Breakfast />,
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
        path:"Reservation",
        element:<Reservation />,
      },
      {
        path:"Contact",
        element:<Contact />,
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
