import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
      fetch('categories.json')
      .then(res=>res.json())
      .then(data=>setCategories(data))
    })
    return (
      <div>
        <h2 className="text-center text-5xl text-[#1A1919] font-extrabold mb-4 mt-4">
          Job Category List
        </h2>
        <p className="text-base text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need.Its your future.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4 mt-12 mb-12">
          {
            categories.map(category=><Category key={category.id} category={category}></Category>)
          }
        </div>
      </div>
    );
};

export default CategoryList;