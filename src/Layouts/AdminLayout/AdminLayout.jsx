import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../Pages/Loading'
import Sidebar from '../../Components/ParentComponents/Sidebar/Sidebar'

function AdminLayout() {
  return (
    <Suspense fallback={<Loading />}>
            <div className='columns is-multiline' style={{ minHeight: '80vh' }}>
                <aside className='column is-2' >
                    <Sidebar role="admin" />
                </aside>
                <main className='column is-10'>
                    <Outlet />
                </main>
            </div>
        </Suspense>

  )
}

export default AdminLayout