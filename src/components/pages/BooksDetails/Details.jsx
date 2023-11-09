import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { myContext } from "../../Authentication/Authprovider";
import moment from "moment/moment";
import Swal from "sweetalert2";
const Details = () => {
    const currentDate = moment().subtract(10, 'days').calendar();
    const bookDetails = useLoaderData()
    const { name, imageURL,category,author, shortDescription} = bookDetails
    const { user, loading } = useContext(myContext)
    const [quantity,setQuantity]=useState(bookDetails.quantity)
    
    if (loading) {
        return <progress className="progress text-center w-56"></progress>
    }
    const userEmail = user.email
    const userName = user.displayName
    
    
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
        fetch('http://localhost:5000/borrowedBooks',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(borrowedBooksInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            form.reset()
            Swal.fire({
                position: "top",
                icon: "success",
                title: "You borrowed the book.",
                showConfirmButton: false,
                timer: 1500
              });
            setQuantity(quantity-1)
            

        })
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
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn-sm bg-cyan-400 rounded text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Borrow</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form onSubmit={handleBorrow}>
                            
                            <span className="text-sm font-semibold text-gray-400">User Email</span>
                                
                                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="email" name="email" defaultValue={userEmail} id="" />
                                
                                <span className="text-sm font-semibold text-gray-400">User Name</span>
                                
                                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="text" name="userName" defaultValue={userName} id="" />
                                
                                <span className="text-sm font-semibold text-gray-400">Date of Return</span>
                                
                                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded hover:border-2 border-cyan-400 px-5 py-2" type="date" name="date" id="" />
                                
                                <button className="btn-sm rounded mx-auto block bg-cyan-400 text-white mt-2">Submit</button>
                            </form>
                            <form  method="dialog">
                                
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                        </div>
                    </dialog>
                </div>

            </div>
            <form className="space-y-3">

            </form>
        </div>

    );
};

export default Details;