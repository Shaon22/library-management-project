import Swal from "sweetalert2";

const Addbooks = () => {
    const handleAddBooks=event=>{
        event.preventDefault();
        const form =event.target;
        const name=form.name.value
        const imageURL=form.imageURL.value
        const author=form.author.value
        const shortDescription=form.shortDescription.value
        const ratings=form.ratings.value
        const category=form.category.value

        const booksInfo={
            name,imageURL,author,shortDescription,ratings,category
        }
        console.log(booksInfo)
        fetch('https://library-management-server-psi.vercel.app/books',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booksInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            Swal.fire({
                position: "top",
                icon: "success",
                title: "Added book successfully",
                showConfirmButton: false,
                timer: 1500
              });
        })

    }

    return (
        <div>
            <h1 className='text-3xl font-bold text-center my-5'>Add Books</h1>
            <form onSubmit={handleAddBooks} className="grid gap-5 grid-cols-2">
                
                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 hover:border-2 border-cyan-400 px-5 " type="text" name="imageURL" required placeholder="Image URL" id="" />
                
                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 hover:border-2 border-cyan-400 px-5 "  type="text" name="name" required placeholder="Name" id="" />
               
                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 hover:border-2 border-cyan-400 px-5 "  type="text" name="author" required placeholder="Author" id="" />
                
                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 hover:border-2 border-cyan-400 px-5 "  type="text" name="ratings" required placeholder="Ratings" id="" />
                
                <input className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 hover:border-2 border-cyan-400 px-5 "  type="number" name="quantity" required placeholder="Quantity" id="" />
               
               <select className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 hover:border-2 border-cyan-400 px-5 "  name="category" required placeholder="Select Category" id="">
                <option value="">Select category</option>
                <option value="Science and Technology">Science and Technology</option>
                <option value="Business">Business</option>
                <option value="Novel">Novel</option>
                <option value="Biography">Biography</option>
                <option value="Kids">Kids</option>
                <option value="History">History</option>
               </select>
                
                <textarea className="block w-[100%] outline-none border-b-2 border-b-cyan-400 rounded p-2 hover:border-2 border-cyan-400 px-5 col-span-2"  name="shortDescription" id="" placeholder="Short Description" cols="30" rows="10"></textarea>
                <button className="btn btn-wide col-span-2 bg-cyan-400 mx-auto">Add book</button>
            </form>
        </div>
    );
};

export default Addbooks;