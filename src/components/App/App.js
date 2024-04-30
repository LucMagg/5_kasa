import Layout from "../../pages/Layout/Layout"
import Home from '../../pages/Home/Home'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import About from '../../pages/About/About'
import RentalPage from '../../pages/RentalPage/RentalPage'

import { dataLoader, getDataById } from '../../assets/loader'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

export default function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children : [
        
        {
          path: "/index",
          index: true,
          element: <Home />,
          loader: dataLoader,
        },
        {
          path: '/about',
          element: <About />,
          
        },
        {
          path: '/rental/:rentalId',
          element: <RentalPage />,
          loader: getDataById,
        }
      ]
    } 
  ])

  return (
        <RouterProvider router={router} />  
  );
}