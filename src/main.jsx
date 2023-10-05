import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Layouy/Root';
import Home from './Pages/Home';
import './index.css'
import About from './Pages/About';
import Career from './Pages/Career';
import Login from './Pages/Login/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Provider/AuthProvider';
import Registration from './Pages/Registration/Registration';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/about",
        element:<About></About>
      },{
        path:"/career",
        element:<Career></Career>
      },{
        path:"/login",
        element:<Login></Login>
      },{
        path:"/register",
        element:<Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
