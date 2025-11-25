import React, { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostCall from './Components/PostCall/PostCall'
import DisplayAPI from './Components/CustomAPI/DisplayAPI'
import ApiFormData from './Components/ApiFormData/ApiFormData'

const MainLayout = lazy(() => import('./MainLayout/MainLayout'))
const Login = lazy(() => import('./Components/Login/Login'))
const Home = lazy(() => import('./Components/Home/Home'))
const Register = lazy(() => import('./Components/Register/Register'))
const TodoList = lazy(() => import('./Components/TodoList/TodoList'))
const ApiCalls = lazy(() => import('./Components/ApiCalls/AoiCalls'))
const Props = lazy(() => import('./Components/Props/Props'))
const CustomOptions = lazy(() => import('./Components/CustomOptions/CustomOptions'))
const PageNation = lazy(() => import('./Components/PageNation/PageNation'))
const ReactMemo = lazy(() => import('./Components/CommonComp/ReactMemo'))
const Formik = lazy(() => import('./Components/Formik/Formik'))
const MaterialUi = lazy(() => import('./Components/MaterialUI/MaterialUi'))
const Product = lazy(() => import('./Components/Products/Products'))
const UseForm = lazy(() => import('./Components/UseForm/UseForm'))
const NoFound = lazy(() => import('./Components/NoFound/NoFound.js'))
const CreateAccount = React.lazy(() => import('./Components/CreateAccount/CreateAccount.js'))


function Approutes() {

    const router = createBrowserRouter([
        { index: true, element: (<Suspense fallback={ <div>...Loading</div> }><Login /></Suspense>) },
        { path: 'login', element: (<Suspense fallback={ <div>...Loading</div> }><Login /></Suspense>) },
        {
            path: '/', element: (<Suspense fallback={ <div>...Loading</div> }><MainLayout /></Suspense>),
            children: [
                { path: 'register', element: (<Suspense fallback={ <div>Loading...</div> }><Register /></Suspense>) },
                { path: 'apiformdata', element: (<Suspense fallback={ <div>...Loading</div> }><ApiFormData /></Suspense>) },
                { path: 'formik', element: (<Suspense fallback={ <div>...Loading</div> }><Formik /></Suspense>) },
                { path: 'home', element: (<Suspense fallback={ <div>Loading...</div> }><Home /></Suspense>) },
                { path: 'todolist', element: (<Suspense fallback={ <div>Loading...</div> }><TodoList /></Suspense>) },
                { path: 'apicalls', element: (<Suspense fallback={ <div>Loading...</div> }><ApiCalls /></Suspense>) },
                { path: 'props', element: (<Suspense fallback={ <div>Loading...</div> }><Props /></Suspense>) },
                { path: 'custums', element: (<Suspense fallback={ <div>Loading...</div> }><CustomOptions /></Suspense>) },
                { path: 'pagenation', element: (<Suspense fallback={ <div>Loading...</div> }><PageNation /></Suspense>) },
                { path: 'postcall', element: (<Suspense fallback={ <div>Loading...</div> }><PostCall /></Suspense>) },
                { path: 'common', element: (<Suspense fallback={ <div>Loading...</div> }><ReactMemo /></Suspense>) },
                { path: 'customapi', element: (<Suspense fallback={ <div>Loading...</div> }><DisplayAPI /></Suspense>) },
                { path: 'materialui', element: (<Suspense fallback={ <div>...Loading</div> }><MaterialUi /></Suspense>) },
                { path: 'reduxtool', element: (<Suspense fallback={ <div>...Loading</div> }><Product /></Suspense>) },
                { path: 'useform', element: (<Suspense fallback={ <div>...Loading</div> }><UseForm /></Suspense>) },
                { path: 'create', element: (<Suspense fallback={ <div>...Loading</div> }><CreateAccount /></Suspense>) }
            ]
        },

        { path: '*', element: (<Suspense fallback={ <div>...Loading</div> }><NoFound /></Suspense>) }


    ])
    return <RouterProvider router={ router }></RouterProvider>
}

export default Approutes