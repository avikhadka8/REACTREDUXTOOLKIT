import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';


const Layout = () =>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}




const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      
    ]
  },
 
]);

function App() {
   
  
 

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
