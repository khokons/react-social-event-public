import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";



const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Root;