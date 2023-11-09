import { useContext, useEffect, useState } from "react";
import { myContext } from "../../Authentication/Authprovider";
import Swal from "sweetalert2";


const BorrowedBooks = () => {
    const { user} = useContext(myContext)

    const [borrowedBooksInfos, setBorrowedBooksInfos] = useState()
    useEffect(() => {
        fetch(` https://library-management-server-psi.vercel.app/borrowedBooks/${user.email}`)
            .then(res => res.json())
            .then(data => setBorrowedBooksInfos(data))
    }, [])

    const handleDelete=_id=>{
        fetch(` https://library-management-server-psi.vercel.app/deleteBooks/${_id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            if(data.deletedCount > 0){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "Returned Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                const remaining=borrowedBooksInfos.filter(borrowedBooksInfo=>borrowedBooksInfo._id !== _id)
                setBorrowedBooksInfos(remaining)
            }
        })

    }
    return (
        <div>
           <div className="grid grid-cols-3 gap-5">
           {
                borrowedBooksInfos?.map(borrowedBooksInfo =>
                    <div key={borrowedBooksInfo._id}>
                        <img src={borrowedBooksInfo.imageURL} alt="" />
                        <h1 className="text-2xl font-bold mt-5">{borrowedBooksInfo.name}</h1>
                        <h1 className=" font-medium mt-1">Category: {borrowedBooksInfo.category}</h1>
                        <h1 className=" font-medium mt-1">Borrowed Date:{borrowedBooksInfo.currentDate}</h1>
                        <h1 className=" font-medium mt-1">Date Of Return{borrowedBooksInfo.date}</h1>
                        <button onClick={()=>handleDelete(borrowedBooksInfo._id)} className="btn-sm bg-cyan-400 rounded text-white mr-5 my-2">Return</button>
                        <button className="btn-sm bg-cyan-400 rounded text-white">Read</button>

                    </div>)
            }
           </div>
        </div>
    );
};

export default BorrowedBooks;