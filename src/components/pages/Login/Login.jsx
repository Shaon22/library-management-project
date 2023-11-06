import { Link, useNavigate } from "react-router-dom";
import loginImg from '../../../assets/login.jpg'
import { useContext } from "react";
import { myContext } from "../../Authentication/Authprovider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const navigate = useNavigate()
    const { login } = useContext(myContext)
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        login(email, password)
            .then(res => {
                console.log(res)
                navigate('/')
            })
    }
    return (
        <div>
            <div className="flex flex-col mt-5 lg:flex-row  items-center">
                <div className="hidden md:block lg:block w-[50%]">
                    <img className="w-[80%]" src={loginImg} alt="" />
                </div>
                <div className="w-full sm:w-[50%]">
                    <form onSubmit={handleLogin} className="space-y-5 w-[60%] mx-auto ">
                        <h1 className="mb-16 text-2xl text-center font-bold text-cyan-400">Log In Your Account</h1>
                        <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="email" name="email" placeholder="EMAIL" id="" required />
                        <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="password" name="password" placeholder="PASSWORD" id="" required />
                        <input className="btn-sm rounded mx-auto block bg-cyan-400 text-white" type="submit" value="LOG IN" />
                        <h1 className="font-medium text-center">Do not have any account ? <Link className="text-cyan-400 font-bold" to={'/register'}>REGISTER</Link> </h1>
                        
                    </form>
                    <hr className="w-[50%] mx-auto my-2" />
                  <div className="flex justify-center items-center gap-2">
                  <h1 className="font-medium text-center">log in with</h1>
                  <FcGoogle className="text-xl"></FcGoogle>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Login;