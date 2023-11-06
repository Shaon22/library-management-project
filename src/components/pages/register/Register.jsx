import { Link } from "react-router-dom";
import icon from '../../../assets/Welcome-to-scribie-512x391.svg'
import { useContext } from "react";
import { myContext } from "../../Authentication/Authprovider";


const Register = () => {
    const {signUp}=useContext(myContext)
    const handleSignUp=(event)=>{
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const photoURL=form.photoURL.value
        const email=form.email.value
        const password=form.password.value
        console.log(name,photoURL,email,password)

        signUp(email,password)
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div className="flex flex-col mt-20 lg:flex-row lg:items-center ">
            <div className="hidden md:block lg:block lg:w-[50%]">
                <img src={icon} alt="" />
             </div>
             <div className="w-full sm:w-[50%]">
             <form onSubmit={handleSignUp}  className="space-y-5 w-[60%] mx-auto ">
                    <h1 className="mb-16 text-2xl text-center font-bold text-cyan-400">Register Account</h1>
                    <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="text" name="name" placeholder="NAME" id="" required />
                    <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="text" name="photoURL" placeholder="PHOTO URL" id="" required />

                    <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="email" name="email" placeholder="EMAIL" id="" required/>
                    <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="password" name="password" placeholder="PASSWORD" id="" required />
                    <input className="btn-sm rounded mx-auto block bg-cyan-400 text-white" type="submit" value="REGISTER" />
                    <h1 className="font-medium text-center">Already have an account ? <Link className="text-cyan-400 font-bold" to={'/login'}>LOG IN</Link> </h1>
                </form>
             </div>
             
        </div>
    );
};

export default Register;