import Login from '@/pages/Login'
import Layout from '@/pages/Layout'
import Register from '@/pages/Register'
import Forgot_password from '@/pages/Forgot_password'

import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },
    {
        path: "/forgot_password",
        element: <Forgot_password/>
    }
    
])

export default router