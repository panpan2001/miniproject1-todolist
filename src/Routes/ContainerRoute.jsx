import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'


// layouts 
const AdminLayout = React.lazy(() => import('../Layouts/AdminLayout'))
const MainLayout = React.lazy(() => import('../Layouts/MainLayout'))
const LoginLayout = React.lazy(() => import('../Layouts/LoginLayout'))

// pages
const NotFound = React.lazy(() => import('../Pages/NotFound'))
const Dashboard = React.lazy(() => import('../Pages/Dashboard'))
const LandingPage = React.lazy(() => import('../Pages/LandingPage'))
//components



function ContainerRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<LandingPage />} />
                    <Route path='/*' element={<NotFound />} />
                    <Route path='/login' element={<LoginLayout />} />
                    <Route path='/profile' element={
                        <ProtectedRoute
                            isAllowed={false}
                            children={<h1>main layout vo dc ne cung</h1>}
                        />}>
                    </Route>
                </Route>


                <Route path='/admin' element={<AdminLayout />}>
                    <Route index element={
                        <ProtectedRoute
                            isAllowed={true}
                            children={<Dashboard />}
                        />}>
                    </Route>
                    <Route path='/admin/*' element={<NotFound />} />
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default ContainerRoute