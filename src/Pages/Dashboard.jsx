import React, { Suspense } from 'react'
import Loading from './Loading'

function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>   
     <div>Dashboard</div>

        </Suspense>
  )
}

export default Dashboard