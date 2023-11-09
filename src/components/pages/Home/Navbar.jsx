import { Link, NavLink } from "react-router-dom";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useContext } from "react";
import { myContext } from "../../Authentication/Authprovider";
import book from '../../../assets/book-logo.jpg'
const Navbar = () => {
  const {user,logout}=useContext(myContext)
  const handleLogOut = () => {
    logout()
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.error(error)
      })
  }
    const navlinks=
    <div className="text-lg font-semibold space-x-10">
        <>
    <NavLink to={'/'} className={({isActive})=>(isActive?'text-cyan-400':'text-black')}>Home</NavLink>
    <NavLink to={'/addBooks'} className={({isActive})=>(isActive?'text-cyan-400':'text-black')}>Add books</NavLink>
    <NavLink to={'/allBooks'} className={({isActive})=>(isActive?'text-cyan-400':'text-black')}>All books</NavLink>
    <NavLink to={'/borrowedBooks'} className={({isActive})=>(isActive?'text-cyan-400':'text-black')}>Borrowed books</NavLink>
    
    
    </>
    </div>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navlinks
        }
      </ul>
    </div>
    <img className="w-[20%]" src={book} alt="" />
    <a className="btn btn-ghost normal-case text-xl font-extrabold">THE <span className="text-orange-600">ATHENEUM</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navlinks
      }
    </ul>
  </div>
  <div className="navbar-end">
  {
    user?
    <>
    <h1 className=" mr-5">{user.displayName}</h1>
                            <img className="w-6 h-6 text-center rounded-full mr-4" src={user.photoURL} alt="" />
    <Link to={'/'}><button onClick={handleLogOut} className="btn rounded btn-sm border-none bg-red-500 text-white" >log Out <FiLogOut></FiLogOut></button></Link>
    </>
    :
    <>
    <NavLink className={({ isActive }) => (isActive ? 'hidden' : '')} to={'/login'}><button className="btn rounded  btn-sm border-none bg-cyan-400 text-white ">login <FiLogIn></FiLogIn> </button></NavLink>
    </>
  }
  
  </div>
</div>
    );
};

export default Navbar;