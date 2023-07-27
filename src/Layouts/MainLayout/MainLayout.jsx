import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../Pages/Loading'
import Header from '../../Components/ParentComponents/Header/Header'
import Footer from '../../Components/ParentComponents/Footer/Footer'

function MainLayout() {
  return (
    <Suspense fallback={<Loading/>}>
    <div>
      <Header/>
      <main style={{ minHeight: '80vh' }}>
            <Outlet/>
      </main>
    <Footer/>
  </div>
    </Suspense>
  )
}

export default MainLayout