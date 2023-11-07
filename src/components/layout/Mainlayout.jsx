import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/Navbar';

const Mainlayout = () => {
    return (
        <div className='w-[425px] lg:w-[1200px] mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;