import React, { Suspense } from 'react'
import Loading from '../../Pages/Loading'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/ParentComponents/Sidebar/Sidebar'

function UserLayout({aside, children}) {
    return (
        <Suspense fallback={<Loading />}>
            <div className='columns is-multiline' style={{ minHeight: '80vh' }}>
                <aside className='column is-2'>
                    {/* <Sidebar role="user" /> */}
                    {aside}
                </aside>
                <main className='column is-10'>
                    {children}
                </main>
            </div>
        </Suspense>


    )
}

export default UserLayout