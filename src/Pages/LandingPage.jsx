import React, { Suspense } from 'react'
import Loading from './Loading'

function LandingPage() {
  return (
    <Suspense fallback={<Loading/>}>
        <div>LandingPage</div>

        </Suspense>
   )   
}

export default LandingPage