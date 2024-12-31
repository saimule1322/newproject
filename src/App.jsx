import './App.css'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import { About, ContactUs, DashboardLayout, Error, Home, Products, Services } from './Pages'
import EachProductdetails from './utils/EachProductdetails'
import Whatsapp from './Pages/Whatsapp'

const routing = createBrowserRouter([
  {
    path:'/',
    element:<DashboardLayout />,
    errorElement:<Error />,
    children:[
      {
         index:true,
         element:<Home />,
      },
      {
         path:'Home',
         element:<Home />,
      },
      {
         path: 'About-Us',
         element:<About />,
      },
      {
         path:'Products',
        
         children:[
            {
               index:true,
               element:<Products />,
            },
            {
               path: ':productName', 
               element:<EachProductdetails />,
            },
         ]
      },
      {
         path:'Services',
         element:<Services />,
      },
      {
         path:'Contact-Us',
         element:<ContactUs />,
      },
    ]
  }
 
]) 

function LocationTracker() {
   const location = useLocation();
   console.log('Current location:', location);
   useEffect(() => {
     console.log('Location changed:', location);
   }, [location]);
 
   return null; // No UI, just tracking the location
 }

function App() {

  return (

 <RouterProvider router={routing} >

 </RouterProvider>

  )
}

export default App
