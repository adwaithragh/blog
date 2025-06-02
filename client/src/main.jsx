import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './routes/Layout'
import Home from './pages/Home'
import AddBlog from './pages/AddBlog'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    {path: '/', element: <Home />},
    {path: '/addBlog', element: <AddBlog />},
  ]}
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
