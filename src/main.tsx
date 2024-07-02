import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home'
import ErrorPage from './pages/error'
import Aboutpage from './pages/about'
import Projects from './pages/Projects'
import Contact from './pages/contact'
import Resume from './pages/resume'
import Github from './pages/git'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.scss'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage/>,

  },
  {
    path: "/:about",
    element: <Aboutpage/>,
    errorElement:<ErrorPage/>,
  },
  {
    path: "projects",
    element: <Projects/>,
    errorElement:<ErrorPage/>,
  },
  {
    path: "resume",
    element: <Resume/>,
    errorElement:<ErrorPage/>,
  },
  {
    path: "git",
    element: <Github/>,
    errorElement:<ErrorPage/>,
  },
  {
    path: "contact",
    element: <Contact/>,
    errorElement:<ErrorPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
