import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import LoginForm from '../Components/ParentComponents/LoginForm/LoginForm'
import NotFound from '../Pages/NotFound'
import Sidebar from '../Components/ParentComponents/Sidebar/Sidebar'
import FilterForm from '../Components/ParentComponents/FilterForm/FilterForm'
import TodoContent from '../Components/ParentComponents/TodoContent/TodoContent'

// layouts 
const AdminLayout = React.lazy(() => import('../Layouts/AdminLayout/AdminLayout'))
const MainLayout = React.lazy(() => import('../Layouts/MainLayout/MainLayout'))
const LoginLayout = React.lazy(() => import('../Layouts/LoginLayout/LoginLayout'))
const UserLayout = React.lazy(() => import('../Layouts/UserLayout/UserLayout'))
// pages
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
                    <Route path='/login' element={<LoginLayout />} >
                        <Route index element={<LoginForm />} />
                        </Route>
                    <Route path='/profile' element={
                        <ProtectedRoute
                            isAllowed={true}
                            children={<UserLayout 
                                aside={<Sidebar role="user" />}
                                
                            />}
                        />}>
                    </Route>
                    <Route path='/todo' element={
                        <ProtectedRoute
                            isAllowed={true}
                            children={<UserLayout 
                                aside={<FilterForm />}
                                children={<TodoContent/>}
                                />}
                        />}>
                    </Route>
                </Route>

                <Route
                    path='/admin'
                    element={
                        <ProtectedRoute
                            isAllowed={true}
                            children={<AdminLayout/>}
                        />}>
                    <Route path='/admin/*' element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default ContainerRoute