import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
    const [Categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data =>setCategories(data))
    },[])
    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Fetured categories</h1>
            <div  className="grid grid-cols-3 gap-5">
            {
                Categories.map(Category=>
                    <div className="bg-base-100 p-5 shadow-2xl rounded" key={Category._id}>
                        <img className="w-full mx-auto" src={Category.image} alt="" />
                        <h1>{Category.category_name}</h1>
                        <Link to={`/books/${Category.category_name}`}><button className="btn ">See all</button></Link>
                    </div>)
            }
            </div>
        </div>
    );
};

export default Category;