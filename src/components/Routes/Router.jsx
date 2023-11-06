import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import Addbooks from "../pages/Addbooks/Addbooks";
import Allbooks from "../pages/Allbooks/Allbooks";
import BorrowedBooks from "../pages/Boorowedbooks/BorrowedBooks";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addBooks',
                element:<Addbooks></Addbooks>
            },
            {
                path:'/allBooks',
                element:<Allbooks></Allbooks>
            },
            {
                path:'/borrowedBooks',
                element:<BorrowedBooks></BorrowedBooks>
            }
        ]
    }

])