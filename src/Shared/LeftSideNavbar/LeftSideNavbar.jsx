import { useEffect, useState } from "react";
import Cat from "../Cat/Cat";

const LeftSideNavbar = () => {
    const [category,setCategory]=useState([]);
    useEffect(()=>{
        fetch('../../../public/categories.json')
        .then(res=>res.json())
        .then(data=>setCategory(data));
    },[])
    return (
        <div>
            <div>
                <h3 className="text-2xl">All Caterogy</h3>
                {
                    category.map(cat=><Cat cat={cat} key={cat.id}></Cat>)
                }
            </div>
        </div>
    );
};

export default LeftSideNavbar;