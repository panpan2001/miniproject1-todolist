import React, { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import Loading from '../Pages/Loading'

function ProtectedRoute({ isAllowed, children }) {

    if (!isAllowed) {
        return (
            <Suspense fallback={<Loading />}>
                <Navigate to="/login" replace />
            </Suspense>
        )
    }
    else {
        return (
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
        )

    }

}

export default ProtectedRoute