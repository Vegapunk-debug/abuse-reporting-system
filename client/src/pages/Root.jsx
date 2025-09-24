import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import ReportingForm from '../components/ReportingForm'

export default function Root() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}
