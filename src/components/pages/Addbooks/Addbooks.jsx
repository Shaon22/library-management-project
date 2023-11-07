
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
        fetch('http://localhost:5000/books',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booksInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    }

    return (
        <div>
            <h1 className='text-5xl'>addbooks</h1>
            <form onSubmit={handleAddBooks} className="grid grid-cols-2">
                <input type="text" name="imageURL" placeholder="Image URL" id="" />
                <input type="text" name="name" placeholder="Name" id="" />
                <input type="number" name="quantity" placeholder="quantity" id="" />
                <input type="text" name="author" placeholder="Author" id="" />
                <input type="text" name="ratings" placeholder="Ratings" id="" />
               <select name="category" placeholder="Select category" id="">
                <option value="">Select category</option>
                <option value="Science and Technology">Science and Technology</option>
                <option value="Business">Business</option>
                <option value="Novel">Novel</option>
                <option value="Biography">Biography</option>
                <option value="Kids">Kids</option>
                <option value="History">History</option>
               </select>
                <textarea className="col-span-2" name="shortDescription" id="" placeholder="shortDescription" cols="30" rows="10"></textarea>
                <button className="btn">Add book</button>
            </form>
        </div>
    );
};

export default Addbooks;