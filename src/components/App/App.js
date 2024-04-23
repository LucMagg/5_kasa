import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Root from '../../pages/Root/Root'
import Home from '../../pages/Home/Home'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'
import About from '../../pages/About/About'
import RentalPage from '../../pages/RentalPage/RentalPage'

import './App.scss'
import { dataLoader, getDataById } from '../../assets/loader'

export default function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage isInRoot={false} />,
      children : [
        {
          errorElement: <ErrorPage isInRoot={true} />
        },
        {
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
    <div className='app'>
        <RouterProvider router={router} />
    </div>
    
  );
}