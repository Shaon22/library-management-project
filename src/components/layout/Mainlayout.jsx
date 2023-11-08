import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/Navbar';
import Footer from '../pages/Home/Footer';

const Mainlayout = () => {
    return (
        <div className='w-[425px] lg:w-[1200px] mx-auto '>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;