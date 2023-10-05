import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import MideSideNavbar from "../Shared/MidSideNavbar/MideSideNavbar";
import Header from "./Header";
import Navbar from "./Navbar";
import BreakingNews from "../BreakingNews/BreakingNews";
import { useEffect, useState } from "react";
const Home = () => {
    const [infos,setInfos]=useState([]);
    useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>setInfos(data));
    },[])
    return (
        <div>
           <Header></Header>
           <BreakingNews></BreakingNews>
           <Navbar></Navbar>
           <div className="grid grid-cols-4 mx-auto w-4/5">
            <div><LeftSideNavbar></LeftSideNavbar></div>
            <div className="col-span-2"><MideSideNavbar infos={infos}></MideSideNavbar></div>
            <div><RightSideNavbar></RightSideNavbar></div>
           </div>
        </div>
    );
};

export default Home;