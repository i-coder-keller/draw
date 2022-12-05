import { lazy } from 'react'
import LazyLoad from '../components/lazyload'
const routers = [
    {
        path: '/login',
        element: LazyLoad(lazy(() => import('@/views/login/')))
    },
    {
        path: '/',
        element: LazyLoad(lazy(() => import('@/layout/'))),
        children: [
            {
                path: '/projects',
                element: LazyLoad(lazy(() => import('@/views/projects/')))
            }
        ]
    }
]

export default routers
