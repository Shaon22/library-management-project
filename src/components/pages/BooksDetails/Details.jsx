import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { myContext } from "../../Authentication/Authprovider";
import moment from "moment/moment";
const Details = () => {
    const currentDate = moment().subtract(10, 'days').calendar();
    const bookDetails = useLoaderData()
    const { user, loading } = useContext(myContext)
    if (loading) {
        return <progress className="progress text-center w-56"></progress>
    }
    console.log(user)
    const userEmail = user.email
    console.log(userEmail)
    console.log(bookDetails)
    const { name, imageURL, author, category, shortDescription, quantity } = bookDetails
    const handleBorrow = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const userName = form.userName.value
        const date = form.date.value
        console.log(email, date, userName)
        const borrowedBooksInfo = {
            name, imageURL, category, email, date, userName, currentDate
        }
        console.log(borrowedBooksInfo)
    }

    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-5">Details</h1>
            <div className="flex gap-7 mt-10">
            <img className="w-[300px]" src={imageURL} alt="" />
            <div>
                <h1 className="text-2xl font-bold mb-6">{name}</h1>
                <h1 className="text-lg font-medium mb-1">Author: {author}</h1>
                <h1 className="text-lg font-medium">Available Book(s): <span className="text-2xl bg-cyan-400 text-white px-4 rounded"> {quantity}</span> </h1>
                <p className="font-medium my-5">{shortDescription}</p>
                
                <button className="btn ">update</button>
                <button onClick={handleBorrow} className="btn ">Borrow</button>
                
                    </div>
                
            </div>
            <form className="space-y-3">
                            <span className="text-sm font-semibold text-gray-400">User Email</span>
                            <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="email" name="email" defaultValue={userEmail} id="" />
                            <span className="text-sm font-semibold text-gray-400">User Name</span>
                            <input  className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="text" name="userName" defaultValue={user.displayName} id="" />
                            <span className="text-sm font-semibold text-gray-400">Date of Return</span>
                            <input  className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="date" name="date" id="" />
                            <button><input className="btn-sm rounded mx-auto block bg-cyan-400 text-white" type="submit" value="SUBMIT" /></button>
                        </form>
        </div>
            
    );
};

export default Details;