import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const Root = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default Root;