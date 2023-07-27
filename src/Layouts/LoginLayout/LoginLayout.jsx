import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../Pages/Loading'
import './LoginLayout.css'
function LoginLayout() {
    return (
        <Suspense fallback={<Loading />}>
            <div className='login-layout container is-centered is-6'>
                <Outlet />
            </div>
        </Suspense>
    )
}

export default LoginLayout