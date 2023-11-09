import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooks = () => {
    const addedBooksInfo = useLoaderData()
    console.log(addedBooksInfo)

    const handleUpdate=event=>{
        event.preventDefault()
        const form = event.target;
        const imageURL = form.imageURL.value
        const name = form.name.value
        const category= form.category.value
        const author = form.author.value
        const ratings = form.ratings.value
        const upadatedInfo={
            imageURL,name,category,ratings,author
        }
        console.log(upadatedInfo)

        fetch(`https://library-management-server-psi.vercel.app/allBooks/${addedBooksInfo._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upadatedInfo)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
               
                if(data.modifiedCount>0){
                    
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                        
                      })
                      
                }
            })
        
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5'>Update Books</h1>
            <form onSubmit={handleUpdate} className="grid gap-5 grid-cols-2">

                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 hover:border-2 border-cyan-400 px-5 " type="text" name="imageURL" placeholder="Image URL" defaultValue={addedBooksInfo.imageURL} id="" />

                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 hover:border-2 border-cyan-400 px-5 " type="text" name="name" placeholder="Name" defaultValue={addedBooksInfo.name} id="" />

                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 hover:border-2 border-cyan-400 px-5 " type="text" name="author" placeholder="Author" defaultValue={addedBooksInfo.author} id="" />

                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 hover:border-2 border-cyan-400 px-5 " type="text" name="ratings" placeholder="Ratings" defaultValue={addedBooksInfo.ratings} id="" />
                
                <select className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 col-span-2 hover:border-2 border-cyan-400 px-5 " name="category" placeholder="Select Category" defaultValue={addedBooksInfo.category
                } id="">
                    <option value="">Select category</option>
                    <option value="Science and Technology">Science and Technology</option>
                    <option value="Business">Business</option>
                    <option value="Novel">Novel</option>
                    <option value="Biography">Biography</option>
                    <option value="Kids">Kids</option>
                    <option value="History">History</option>
                </select>
                <button className="btn btn-wide col-span-2 bg-cyan-400 mx-auto">Update book</button>
            </form>
        </div>
    );
};

export default UpdateBooks;