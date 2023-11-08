import { Link, useLocation, useNavigate} from "react-router-dom";
import loginImg from '../../../assets/login.jpg'
import { useContext, useState } from "react";
import { myContext } from "../../Authentication/Authprovider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { login,googleLogIn } = useContext(myContext)
    const [loginError, setLoginError] = useState('')
    const location = useLocation()
    const navigate=useNavigate()
    
    
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(res => {
                console.log(res)
                form.reset()
                navigate(location?.state ? location.state :'/')
                
            })
            .catch(error => {
                console.log(error)
                form.reset()
                setLoginError('Email or password not matched !')
            })
}
            const handleGoogle = () => {
                googleLogIn()
                    .then(result => {
                        console.log(result.user)
                        navigate(location?.state ? location.state : '/')
        
                    })
                    .catch(error => {
                        console.error(error)
        
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
                        </form>
                    <hr className="w-[50%] mx-auto my-2" />
                   <div className="text-center">
                   <button onClick={handleGoogle} className='btn btn-wide outline my-2 '>Log in with <FcGoogle className='text-xl'></FcGoogle></button>
                   </div>
                 
                  <h1 className="font-medium text-center mt-2">Do not have any account ? <Link className="text-cyan-400 font-bold" to={'/register'}>REGISTER</Link> </h1>
                {
                loginError && <p className="text-center mt-2 text-red-500">{loginError}</p>
            }
                </div>
               
            </div> 
           
        </div>
    );
};

export default Login;