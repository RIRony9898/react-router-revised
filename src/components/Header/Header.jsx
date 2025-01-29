import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Header = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Header;