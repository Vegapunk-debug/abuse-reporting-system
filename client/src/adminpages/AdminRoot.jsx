import React from 'react';
import AdminHome from './AdminHome';
import { Outlet } from 'react-router-dom';

export default function AdminRoot() {
  return (
    <div>
      <AdminHome />
      <Outlet />
    </div>
  )
}
