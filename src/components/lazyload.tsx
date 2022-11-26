import React, { Suspense } from 'react'
import Fallback from './fallback'
function Lazyload(Page: React.LazyExoticComponent<any>): React.ReactNode {
    return (
        <Suspense fallback={<Fallback />}>
            < Page/>
        </Suspense>
    )
}

export default Lazyload