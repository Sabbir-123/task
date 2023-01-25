import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../Pages/Shared/Login/Login";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter ([{
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
        path: '/',
        element: <Home></Home>
    },
        {
        path: '/about',
        element: <About></About>
    },
        {
        path: '/products',
        element: <PrivateRoute></PrivateRoute>
    },
        {
        path: '/login',
        element: <Login></Login>
    },
]
    
}])

export default router