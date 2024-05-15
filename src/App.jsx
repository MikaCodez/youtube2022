import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login';
import Single from './pages/Single';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Write from './pages/Write';

const Layout = () => {
  return (
    <>
    <Navbar />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ],
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div className="container"></div>
    <div>
      <RouterProvider router={router}/>
    </div>
    </div>
  );
}

export default App
