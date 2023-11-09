import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/register/Register";
import Addbooks from "../pages/Addbooks/Addbooks";
import Allbooks from "../pages/Allbooks/Allbooks";
import BorrowedBooks from "../pages/Borrowedbooks/BorrowedBooks";
import Books from "../pages/Books/Books";
import Details from "../pages/BooksDetails/Details";
import Private from "../PrivateRoute/Private";
import UpdateBooks from "../pages/UpdateBooks/UpdateBooks";
import Error from "../Error/Error";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        errorElement:<Error></Error>,
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
                element:<Private><Addbooks></Addbooks></Private>
            },
            {
                path:'/allBooks',
                element:<Private><Allbooks></Allbooks></Private>,
                loader:()=>fetch('http://localhost:5000/allBooks')
            },
            {
                path:'/borrowedBooks',
                element:<Private><BorrowedBooks></BorrowedBooks></Private>,
                
            },
            {
                path:'books/:category_name',
                element:<Books></Books>,
                loader:({params})=>fetch(`http://localhost:5000/books/${params.category_name}`)
            },
            {
                path:'/booksDetails/:_id',
                element:<Private><Details></Details></Private>,
                loader:({params})=> fetch(`http://localhost:5000/booksDetails/${params._id}`)
            },
            {
                path:'/updateBooks/:id',
                element:<UpdateBooks></UpdateBooks>,
                loader:({params})=>fetch(`http://localhost:5000/allBooks/${params.id}`)
            }
        ]
    }

])