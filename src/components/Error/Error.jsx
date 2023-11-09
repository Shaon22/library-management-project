import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center py-10">
            <img className="w-[50%] mx-auto" src="https://i.ibb.co/HKtg5MM/404-page-cover.jpg" alt="" />
           <Link><button className="btn text-center bg-cyan-400 text-white">Go Back</button></Link>
        </div>
    );
};

export default Error;