import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../Pages/Loading'

function AdminLayout() {
  return (
    <Suspense fallback={<Loading/>}>
      <div>
      <Outlet/>
    </div>
      </Suspense>
    
  )
}

export default AdminLayout