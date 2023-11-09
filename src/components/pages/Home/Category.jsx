import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
    const [Categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://library-management-server-psi.vercel.app/categories')
        .then(res => res.json())
        .then(data =>setCategories(data))
    },[])
    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-10">Fetured Categories</h1>
            <div  className="grid grid-cols-3 gap-10">
            {
                Categories.map(Category=>
                    <div className="bg-base-100 px- pb-2 shadow-2xl rounded" key={Category._id}>
                        <img className="w-full mx-auto" src={Category.image} alt="" />
                        <div className="flex justify-between items-center p-5">
                        <h1 className="text-lg font-bold my-3">{Category.category_name}</h1>
                        <Link to={`/books/${Category.category_name}`}><button className="btn btn-sm bg-cyan-400 text-white">See all</button></Link>
                        </div>
                    </div>)
            }
            </div>
        </div>
    );
};

export default Category;