
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import About from './components/About/About.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//         path: '',
//         element: <Home />
//         },
//         {
//           path: 'contact',
//           element: <Contact />
//         },
//         {
//           path: 'github',
//           element: <Github />
//         },
//         {
//           path: 'user/:id',
//           element: <User />
//         },
//         {
//           path: 'about',
//           element: <About />
//         }
//       ]
//     }
//   ]
// )

// same code as above written in a another way as below line
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      
      <Route path='user/:userid' element={<User />} />
      <Route 
        loader={githubInfoLoader} 
        path='github' element={<Github />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
