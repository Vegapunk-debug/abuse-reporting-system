import './App.css'
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import Root from './pages/Root';
import ProductPage from './pages/ViewReports';
import ReportingForm from './components/ReportingForm';
import HowItWorks from './components/HowItWorks';
import AdminHome from './adminpages/AdminHome';
import AdminRoot from './adminpages/AdminRoot';
import About from './pages/About';
import BlogSection from './components/Blogs';
import HelpLine from './pages/HelpLine';
import { Navigate } from 'react-router-dom';

function App() {

  const role=localStorage.getItem('data');
  const router = createBrowserRouter([
    {
      path: '/',
        element: <Root/>,
        children: [
          {
            path: '/', element: role ? <HomePage/> : <Navigate to="/Login"/>
          },
          {
            path: '/Products', element: <ProductPage/>
          },
          {
            path: '/Report', element: <ReportingForm/>
            },
          {
            path: '/HowItWorks', element: <HowItWorks />
          },
          {
            path: '/About', element: <About />
          },
          {
            path: '/Blogs', element: <BlogSection />
          },
          {
            path: '/HelpLine', element: <HelpLine />
          }
        ]
    },
    {
      path: '/Register', element: <Register/>
    },
    {
      path: '/Login', element: role == 'user' ? <Navigate to ="/"/> :role == 'admin' ? <Navigate to ="/AdminHome"/> : <LoginPage/>
    },
    {
      path: '/AdminHome/*', element: <AdminRoot />, 
      // children: [
      //   {
      //     path: '/'
      //   }
      // ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
