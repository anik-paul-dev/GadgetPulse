import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main';
import Home from './Component/Home';
import Statistics from './Component/Statistics';
import Dashboard from './Component/Dashboard';
import Gadget from './Component/gadget';
import Specific from './Component/Specific';
import ErrorPages from './Component/ErrorPages';
import ContactUs from './Component/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPages></ErrorPages>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:(()=>fetch("/category.json")),
        children:[
          {
            path:"/",
           element:<Gadget></Gadget>,
           loader:(()=>fetch("/data.json"))

          },
          {
            path:"/category/:category",
           element:<Gadget></Gadget>,
           loader:(()=>fetch("/data.json"))

          }
        ]
        


      },
      {
        path:"/item/:id",
        element:<Specific></Specific>,
        loader:(()=>fetch("/data.json"))
      },
      
      {
        path:"/statistics",
        element:<Statistics></Statistics>

      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>,
        loader:(()=>fetch("/data.json"))


      },
      {
        path:"/contact",
        element:<ContactUs></ContactUs>,

      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
